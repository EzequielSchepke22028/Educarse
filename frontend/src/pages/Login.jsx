import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

const Login = () => {
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
            const response = await login(formData);
            const { token } = response.data;
            localStorage.setItem('token', token);
            setSuccess('Login exitoso ✅');
            console.log('Token:', token);
            navigate('/materias'); // Redirige correctamente
        } catch (err) {
            setError(err.response?.data?.message || 'Error al iniciar sesión');
            setSuccess('');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <h2>Iniciar Sesión</h2>
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
                <button type="submit">Iniciar Sesión</button>
            </form>
            {error && <p style={{ color: 'red' }}>❌ {error}</p>}
            {success && <p style={{ color: 'green' }}>✅ {success}</p>}
        </div>
    );
};

export default Login;

/*import react, { useState } from 'react';
import { login } from '../services/authService';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');    //const [password, setPassword] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');
        try {
            const response = await login(formData);
            const { token } = response.data;
            //guardar token en localStorage o en el estado global
            localStorage.setItem('token', token);
            setSuccess('Login exitoso ✅');
            console.log('Token:', token );      //setError('');
            Navigate('/materias'); // Redirigir a la página de materias o a la ruta que quieras
        } catch (err) {
            setError(err.response?.data?.message || 'Error al iniciar sesión');//setError('Login failed. Please try again.');
            setSuccess('');
        }
    };

    return (
        <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}> 
            <h2>Iniciar Sesión</h2>
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
                    required />
                </div>
                <button type="submit">Iniciar Sesión</button>
            </form>
            {error && <p style={{ color: 'red' }}>❌ {error}</p>}
            {success && <p style={{ color: 'green' }}>✅ {success}</p>}
        </div>
    );
};*/