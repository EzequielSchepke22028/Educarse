import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { logout } from '../services/authService';
import { duplicarPerfiles, getProfiles, createProfile, updateProfile, deleteProfile } from '../services/profilesService';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

const Container = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const Input = styled.input`
  padding: 8px;
  flex: 1;
`;

const Button = styled.button`
  padding: 8px 12px;
  cursor: pointer;
`;

const Filter = styled.select`
  margin-bottom: 20px;
  padding: 8px;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
`;

const Card = styled.div`
  background: #f4f4f4;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`;

const CardTitle = styled.h3`
  margin: 0 0 10px;
`;

const CardText = styled.p`
  margin: 0 0 10px;
`;

const Perfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({ nombre: '', carrera: '' });
  const [editingId, setEditingId] = useState(null);
  const [selectedCareer, setSelectedCareer] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const token = localStorage.getItem('token');
      const decoded = jwtDecode(token);
      const usuarioID = decoded.id;

      const response = await getProfiles();
      const perfilesDelUsuario = response.data.filter(perfil => perfil.usuarioID === usuarioID);
      setProfiles(perfilesDelUsuario);
    } catch (error) {
      console.error('Error al obtener perfiles:', error);
    }
  };

  const handleChange = (e) => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const decoded = jwtDecode(token);
      const usuarioID = decoded.id;

      if (editingId) {
        await updateProfile(editingId, { ...newProfile, usuarioID });
        setEditingId(null);
      } else {
        await createProfile({ ...newProfile, usuarioID });
      }
      setNewProfile({ nombre: '', carrera: '' });
      fetchProfiles();
    } catch (error) {
      console.error('Error al guardar perfil:', error);
    }
  };

  const handleEdit = (profile) => {
    setNewProfile({ nombre: profile.nombre, carrera: profile.carrera });
    setEditingId(profile._id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteProfile(id);
      fetchProfiles();
    } catch (error) {
      console.error('Error al eliminar perfil:', error);
    }
  };

  const handleDuplicate = async (profile) => {
    const carreraDestino = prompt('¿A qué carrera querés duplicar este perfil?', profile.carrera);
    if (!carreraDestino) return;

    try {
      await duplicarPerfiles({
        carreraOrigen: profile.carrera,
        carreraDestino
      });
      fetchProfiles();
    } catch (error) {
      console.error('Error al duplicar perfil:', error);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Container>
      <h2>Perfiles por Carrera</h2>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="nombre"
          placeholder="Nombre del perfil"
          value={newProfile.nombre}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="carrera"
          placeholder="Carrera"
          value={newProfile.carrera}
          onChange={handleChange}
          required
        />
        <Button type="submit">{editingId ? 'Actualizar' : 'Agregar'}</Button>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </Form>

      <Filter value={selectedCareer} onChange={(e) => setSelectedCareer(e.target.value)}>
        <option value="">Todas las carreras</option>
        {[...new Set(profiles.map(p => p.carrera))].map((career, index) => (
          <option key={index} value={career}>{career}</option>
        ))}
      </Filter>

      <CardGrid>
        {profiles
          .filter(profile => !selectedCareer || profile.carrera === selectedCareer)
          .map((profile) => (
            <Card key={profile._id}>
              <CardTitle>{profile.nombre}</CardTitle>
              <CardText><strong>Carrera:</strong> {profile.carrera}</CardText>
              {profile.materias && profile.materias.length > 0 && (
                <CardText>
                  <strong>Materias:</strong>
                  <ul>
                    {profile.materias.map((materia, index) => (
                      <li key={index}>{materia}</li>
                    ))}
                  </ul>
                </CardText>
              )}
              <Button onClick={() => handleEdit(profile)}>✏️ Editar</Button>{' '}
              <Button onClick={() => handleDelete(profile._id)}>🗑️ Eliminar</Button>{' '}
              <Button onClick={() => handleDuplicate(profile)}>📄 Duplicar</Button>
            </Card>
        ))}
      </CardGrid>
    </Container>
  );
};

export default Perfiles;
