import './NavbarInstitucional.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function NavbarInstitucional() {
  const navigate = useNavigate();
  const [seleccionada, setSeleccionada] = useState(false);

  const manejarClick = (rutaDestino) => {
    setSeleccionada(true);
    setTimeout(() => {
      navigate(rutaDestino);
    }, 300);
  };



  return (
<nav className="institucional-navbar">
  <div className="logo">
    <Link to="/">
      <img src="/imagenes/logoIFTS.png" alt="Logo IFTS" />
    </Link>
  </div>

  <div className="botones-navbar">
    <button className="btn" onClick={() => manejarClick('/Formulario')}>
      Inscribite 
      Ahora
    </button>
    <button className="btncampus" onClick={() => manejarClick('/login')}>
      Accedé al campus
    </button>
  </div>
</nav>

  );
}

export default NavbarInstitucional;