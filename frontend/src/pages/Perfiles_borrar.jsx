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





/*import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { logout } from '../services/authService';
import { duplicarPerfiles } from '../services/profilesService';
import { useNavigate } from 'react-router-dom';
import {
  getProfiles,
  createProfile,
  updateProfile,
  deleteProfile,
} from '../services/profilesService';
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
  const [newProfile, setNewProfile] = useState({ name: '', career: '' });
  const [editingId, setEditingId] = useState(null);
  const [selectedCareer, setSelectedCareer] = useState('');

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token);
    const usuarioId = decoded.id;

    const response = await getProfiles();
    const perfilesDelUsuario = response.data.filter(perfil => perfil.usuarioId === usuarioId);
    setProfiles(perfilesDelUsuario);
  };
    /*try {
      const response = await getProfiles();
      setProfiles(response.data);
    } catch (error) {
      console.error('Error al obtener perfiles:', error);
    }  
  };

  const handleChange = (e) => {
    setNewProfile({ ...newProfile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token);
    const usuarioId = decoded.id;

    await createProfile({ ...newProfile, usuarioId });
    e.preventDefault();
    try {
      if (editingId) {
        await updateProfile(editingId, newProfile);
        setEditingId(null);
      } else {
        await createProfile(newProfile);
      }
      setNewProfile({ name: '', career: '' });
      fetchProfiles();
    } catch (error) {
      console.error('Error al guardar perfil:', error);
    }
  };

  const handleEdit = (profile) => {
    setNewProfile({ name: profile.name, career: profile.career });
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
    const carreraDestino = prompt('¿A qué carrera querés duplicar este perfil?', profile.career);
    if (!carreraDestino) return;

    try {
      await duplicarPerfiles({
        carreraOrigen: profile.career,
        carreraDestino
      });
      fetchProfiles();
    } catch (error) {
      console.error('Error al duplicar perfil:', error);
    }
  };


/*  const handleDuplicate = async (profile) => {
    const nuevaCarrera = prompt('¿A qué carrera querés duplicar este perfil?', profile.career);
    if (!nuevaCarrera) return;

    const duplicatedProfile = {
      name: profile.name,
      career: nuevaCarrera,
    };

    try {
      await createProfile(duplicatedProfile);
      fetchProfiles();
    } catch (error) {
      console.error('Error al duplicar perfil:', error);
    }
  };

    const navigate = useNavigate();

    const handleLogout = () => {
        logout();               // Elimina el token del almacenamiento local    
        navigate('/login');   // Redirige al usuario a la página de login
    };

  return (
    <Container>
      <h2>Perfiles por Carrera</h2>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Nombre del perfil"
          value={newProfile.name}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="career"
          placeholder="Carrera"
          value={newProfile.career}
          onChange={handleChange}
          required
        />
        <Button type="submit">{editingId ? 'Actualizar' : 'Agregar'}</Button>
        <button onClick={handleLogout}>Cerrar Sesión</button>
      </Form>

      <Filter value={selectedCareer} onChange={(e) => setSelectedCareer(e.target.value)}>
        <option value="">Todas las carreras</option>
        {[...new Set(profiles.map(p => p.career))].map((career, index) => (
          <option key={index} value={career}>{career}</option>
        ))}
      </Filter>

      <CardGrid>
        {profiles
          .filter(profile => !selectedCareer || profile.career === selectedCareer)
          .map((profile) => (
            <Card key={profile._id}>
              <CardTitle>{profile.name}</CardTitle>
              <CardText><strong>Carrera:</strong> {profile.career}</CardText>
              <Button onClick={() => handleEdit(profile)}>✏️ Editar</Button>{' '}
              <Button onClick={() => handleDelete(profile._id)}>🗑️ Eliminar</Button>{' '}
              <Button onClick={() => handleDuplicate(profile)}>📄 Duplicar</Button>
            </Card>
        ))}
      </CardGrid>
    </Container>
  );
};

export default Perfiles;*/


/* //version sin tarjetas import /*React, { useEffect, useState } from 'react';
import { getProfiles, createProfile, updateProfile, deleteProfile } from '../services/profilesService';

const Perfiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({ name: '', career: '' });
  const [editingId, setEditingId] = useState(null);
  const [selectedCarrer, setSelectedCareer] = useState('');

  useEffect(() => {
    fetchProfiles();
  }, []);

  const fetchProfiles = async () => {
    try {
      const response = await getProfiles();
      setProfiles(response.data);
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
      if (editingId) {
        await updateProfile(editingId, newProfile);
        setEditingId(null);
      } else {
        await createProfile(newProfile);
      }
      setNewProfile({ name: '', career: '' });
      fetchProfiles();
    } catch (error) {
      console.error('Error al guardar perfil:', error);
    }
  };

  const handleEdit = (profile) => {
    setNewProfile({ name: profile.name, career: profile.career });
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
  const nuevaCarrera = prompt('¿A qué carrera querés duplicar este perfil?', profile.career);
  if (!nuevaCarrera) return;

  const duplicatedProfile = {
    name: profile.name,
    career: nuevaCarrera,
  };

  try {
    await createProfile(duplicatedProfile);
    fetchProfiles();
  } catch (error) {
    console.error('Error al duplicar perfil:', error);
  }
};

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Perfiles por Carrera</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre del perfil"
          value={newProfile.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="career"
          placeholder="Carrera"
          value={newProfile.career}
          onChange={handleChange}
          required
        />
        <button type="submit">{editingId ? 'Actualizar' : 'Agregar'} perfil</button>
      </form>

      <div>
        <label>Filtrar por carrera: </label>
        <select value={selectedCarrer} onChange={(e) => setSelectedCareer(e.target.value)}>
          <option value="">Todas</option>
          {[...new Set(profiles.map((p) => p.career))].map((career) => (
            <option key={career} value={career}>{career}</option>
          ))}
        </select>
      </div>

      <ul>
        {profiles
        .filter(profile => selectedCarrer === '' || profile.career === selectedCarrer)
        .map((profile) => (
          <li key={profile._id}>
            <strong>{profile.name}</strong> - {profile.career}
            <button onClick={() => handleEdit(profile)}>✏️</button>
            <button onClick={() => handleDelete(profile._id)}>🗑️</button>
            <button onClick={() => handleDuplicate(profile)}>📄</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Perfiles;*/