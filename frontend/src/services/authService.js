// src/services/authService.js

import axios from 'axios';

const API = 'http://localhost:5001/api/auth'; // Cambia esto a la URL de tu backend

export const login = (data) => axios.post(`${API}/login`, data);
export const register = (data) => axios.post(`${API}/register`, data);
export const verifyToken = (token) => 
    axios.get(`${API}/verify`, {
        headers: { Authorization: `Bearer ${token}` }
    });
export const logout = () => {
    localStorage.removeItem('token');
}

// Puedes agregar más funciones según las necesidades de tu aplicación VER QUE MAS PRECISAMOS