import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // para los estilos
import image from './image.png'; // ✅ imagen importada correctamente

function Login() {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const manejarLogin = (e) => {
    e.preventDefault();

    if (usuario === 'alumno' && clave === '1234') {
      setError(''); // Limpia el error si el login es correcto
      navigate('/materias');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <img src={image} alt="Logo" className="logo" />
      <h2>Iniciar sesión</h2>
      <form onSubmit={manejarLogin}>
        {error && <div className="error-message">{error}</div>}

        <input
          type="text"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          required
        />

        <p className="registro-texto">
          ¿No tiene usuario? <a href="/registro">Regístrese aquí</a>
        </p>

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Login;