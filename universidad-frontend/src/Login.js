import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const manejarLogin = (e) => {
    e.preventDefault();

    if (usuario === 'alumno' && clave === '1234') {
      setError('');
      navigate('/instituciones');
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="Login-wrapper">
      <div
        className="Login-fondo"
        style={{ backgroundImage: "url('/imagenes/loginima.png')" }}
      >
        <div className="Login-overlay"></div>
      </div>

      <div className="login-container">
        <h2>Iniciar sesión</h2>
        <form onSubmit={manejarLogin}>
          {error && <div className="error-message">{error}</div>}

          <input
            type="text"
            placeholder="Usuario"
            aria-label="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            aria-label="Contraseña"
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
    </div>
  );
}

export default Login;