import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const Materias = () => {
  const [perfiles, setPerfiles] = useState([]);
  const [perfilSeleccionado, setPerfilSeleccionado] = useState('');
  const [materias, setMaterias] = useState([]);
  const [nuevaMateria, setNuevaMateria] = useState('');

  useEffect(() => {
    fetchPerfiles();
  }, []);

  const fetchPerfiles = async () => {
    try {
      const token = localStorage.getItem('token');
      const decoded = jwtDecode(token);
      const usuarioID = decoded.id;

      const response = await axios.get('http://localhost:5004/api/profiles');
      const perfilesDelUsuario = response.data.filter(p => p.usuarioID === usuarioID);
      setPerfiles(perfilesDelUsuario);
    } catch (error) {
      console.error('Error al obtener perfiles:', error);
    }
  };

  const fetchMaterias = async (perfilId) => {
    try {
      const perfil = perfiles.find(p => p._id === perfilId);
      setMaterias(perfil.materias || []);
      setPerfilSeleccionado(perfilId);
    } catch (error) {
      console.error('Error al obtener materias:', error);
    }
  };

  const agregarMateria = async () => {
    if (!nuevaMateria.trim()) return;
    try {
      const perfil = perfiles.find(p => p._id === perfilSeleccionado);
      const materiasActualizadas = [...(perfil.materias || []), nuevaMateria];

      await axios.put(`http://localhost:5004/api/profiles/${perfilSeleccionado}`, {
        ...perfil,
        materias: materiasActualizadas
      });

      setNuevaMateria('');
      fetchPerfiles();
      fetchMaterias(perfilSeleccionado);
    } catch (error) {
      console.error('Error al agregar materia:', error);
    }
  };

  const eliminarMateria = async (materiaAEliminar) => {
    try {
      const perfil = perfiles.find(p => p._id === perfilSeleccionado);
      const materiasActualizadas = perfil.materias.filter(m => m !== materiaAEliminar);

      await axios.put(`http://localhost:5004/api/profiles/${perfilSeleccionado}`, {
        ...perfil,
        materias: materiasActualizadas
      });

      fetchPerfiles();
      fetchMaterias(perfilSeleccionado);
    } catch (error) {
      console.error('Error al eliminar materia:', error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Administrar Materias</h2>

      <select onChange={(e) => fetchMaterias(e.target.value)} value={perfilSeleccionado}>
        <option value="">Seleccionar perfil</option>
        {perfiles.map((perfil) => (
          <option key={perfil._id} value={perfil._id}>
            {perfil.nombre} - {perfil.carrera}
          </option>
        ))}
      </select>

      {perfilSeleccionado && (
        <div style={{ marginTop: '20px' }}>
          <h3>Materias</h3>
          <ul>
            {materias.map((materia, index) => (
              <li key={index}>
                {materia}
                <button onClick={() => eliminarMateria(materia)} style={{ marginLeft: '10px' }}>
                  🗑️
                </button>
              </li>
            ))}
          </ul>

          <input
            type="text"
            placeholder="Nueva materia"
            value={nuevaMateria}
            onChange={(e) => setNuevaMateria(e.target.value)}
          />
          <button onClick={agregarMateria}>Agregar</button>
        </div>
      )}
    </div>
  );
};

export default Materias;


/*otra version import React, { useEffect, useState } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const Materias = () => {
  const [materias, setMaterias] = useState([]);
  const [nuevaMateria, setNuevaMateria] = useState({ nombre: '', descripcion: '', carrera: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchMaterias();
  }, []);

  const fetchMaterias = async () => {
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token);
    const usuarioId = decoded.id;

    try {
      const response = await axios.get(`http://localhost:5005/api/materias/${usuarioId}`);
      setMaterias(response.data);
    } catch (error) {
      console.error('Error al obtener materias:', error);
    }
  };

  const handleChange = (e) => {
    setNuevaMateria({ ...nuevaMateria, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const decoded = jwtDecode(token);
    const usuarioID = decoded.id;

    try {
      if (editingId) {
        await axios.put(`http://localhost:5005/api/materias/${editingId}`, nuevaMateria);
        setEditingId(null);
      } else {
        await axios.post('http://localhost:5005/api/materias', { ...nuevaMateria, usuarioID });
      }
      setNuevaMateria({ nombre: '', descripcion: '', carrera: '' });
      fetchMaterias();
    } catch (error) {
      console.error('Error al guardar materia:', error);
    }
  };

  const handleEdit = (materia) => {
    setNuevaMateria({
      nombre: materia.nombre,
      descripcion: materia.descripcion,
      carrera: materia.carrera
    });
    setEditingId(materia._id);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5005/api/materias/${id}`);
      fetchMaterias();
    } catch (error) {
      console.error('Error al eliminar materia:', error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Materias</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={nuevaMateria.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="descripcion"
          placeholder="Descripción"
          value={nuevaMateria.descripcion}
          onChange={handleChange}
        />
        <input
          type="text"
          name="carrera"
          placeholder="Carrera"
          value={nuevaMateria.carrera}
          onChange={handleChange}
          required
        />
        <button type="submit">{editingId ? 'Actualizar' : 'Agregar'}</button>
      </form>

      <ul>
        {materias.map((materia) => (
          <li key={materia._id}>
            <strong>{materia.nombre}</strong> - {materia.descripcion} ({materia.carrera})
            <button onClick={() => handleEdit(materia)}>✏️</button>
            <button onClick={() => handleDelete(materia._id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Materias; */