import React, { useState } from 'react';
import { register } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const { data } = await register(formData) // await register(formData); // Desestructuramos la respuesta para obtener data. Este primer comentario sirve para hacer response directamente
      console.log('Usuario registrado:', data);
      setSuccess('Registro exitoso ✅');
      setTimeout(() => navigate('/login'), 1500); // redirige al login
    } catch (err) {
      setError(err.response?.data?.message || 'Error al registrarse');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Registrarse</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Crear cuenta</button>
      </form>
      {error && <p style={{ color: 'red' }}>❌ {error}</p>}
      {success && <p style={{ color: 'green' }}>✅ {success}</p>}
    </div>
  );
};

export default Register;