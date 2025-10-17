// src/services/profilesService.js

import axios from 'axios';

const API = 'http://localhost:5004/api/profiles'; // Cambia esto a la URL de tu backend

export const getProfiles = () => axios.get(`${API}/`);
export const createProfile = (data) => axios.post(`${API}/`, data);
export const updateProfile = (id, data) => axios.put(`${API}/${id}`, data);
export const deleteProfile = (id) => axios.delete(`${API}/${id}`);
// Puedes agregar más funciones según las necesidades de tu aplicación VER QUE PRECISAMOS