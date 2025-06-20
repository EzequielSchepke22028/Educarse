import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [dni, setDni] = useState('');
  const [usuario, setUsuario] = useState('');
  const [clave, setClave] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [foto, setFoto] = useState(null);

  const navigate = useNavigate();

  const manejarRegistro = (e) => {
    e.preventDefault();

    // Aquí podrías enviar los datos a una API o guardarlos en localStorage
    console.log({
      dni,
      usuario,
      clave,
      nombre,
      apellido,
      foto
    });

    alert('Registro exitoso');
    navigate('/'); // Vuelve al login
  };

  return (
    <div className="registro-container">
      <h2>Registro de Ingresante</h2>
      <form onSubmit={manejarRegistro}>
        <input
          type="text"
          placeholder="DNI"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          required
        />
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
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
          required
        />
        <label className="label-foto">
          Foto de perfil:
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setFoto(e.target.files[0])}
            required
          />
        </label>

        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default Register;
