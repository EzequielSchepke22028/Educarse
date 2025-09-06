import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const manejarLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: usuario,
          password: clave
        })
      });

      const resultado = await response.text();

      if (response.ok) {
        setError('');
        navigate('/instituciones');
      } else {
        setError(resultado); // muestra el mensaje del backend
      }
    } catch (err) {
      console.error("Error al conectar con el backend:", err);
      setError("No se pudo conectar con el servidor");
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