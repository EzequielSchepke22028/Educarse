import React from 'react';
import { Navigate } from 'react-router-dom';
//import { isAuthenticated } from '../services/authService';

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
/*
const PrivateRoute = ({ children }) => {
  const isAuth = true; // Cambiar esto por la lógica de autenticación real

  return isAuth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
// El código anterior es un ejemplo básico de una ruta privada en React Router v6.
// Asegúrate de reemplazar la lógica de autenticación con la que uses en tu aplicación.
*/