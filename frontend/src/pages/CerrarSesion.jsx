import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';

const CerrarSesion = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();               // Elimina el token del almacenamiento local
        navigate('/login');    // Redirige al usuario a la página de login
    }

    return (
        <div style={{ padding: '20px' }}>
        <h2>¿Querés cerrar sesión?</h2>
        <button onClick={handleLogout}>Cerrar Sesión</button>
        </div>
    );
};

export default CerrarSesion;


/*import react from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/authService';

const CerrarSesion = () => {
    const navigate = useNavigate();

    useEffect(() => {
        logout();
        navigate('/login');
    }, [navigate]);

    return null;
};

export default CerrarSesion;
 */