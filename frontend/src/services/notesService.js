//src/services/notesService.js

import axios from 'axios';
const API = 'http://localhost:5002/api/notes'; // Cambia esto a la URL de tu backend

export const getNotes = () => axios.get(`${API}/`);
export const createNote = (data) => axios.post(`${API}/`, data);
export const updateNote = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteNote = (id) => axios.delete(`${API}/${id}`);
export const getNotesByUser = (usuarioId) => axios.get(`${API}/user/${usuarioId}`); // Obtener notas por usuario
