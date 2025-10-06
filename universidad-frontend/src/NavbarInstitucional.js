import './NavbarInstitucional.css';
import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function NavbarInstitucional() {
  const navigate = useNavigate();
  const location = useLocation();
  const [seleccionada, setSeleccionada] = useState(false);

  const manejarClick = (rutaDestino) => {
    setSeleccionada(true);
    setTimeout(() => {
      navigate(rutaDestino);
    }, 300);
  };

  // 👇 Ocultar botones si estás en /opcionesaelegir
  const mostrarCampus = location.pathname !== '/opcionesaelegir';
  const mostrarRegis = location.pathname !== '/opcionesaelegir';

  return (
    <nav className="institucional-navbar">
      <div className="logo">
        <Link to="/">
          <img src="/imagenes/logoIFTS.png" alt="Logo IFTS" />
        </Link>
      </div>

      <div className="botones-navbar">
        {mostrarRegis && (
          <>
            <button className="btn" onClick={() => manejarClick('/Formulario')}>
              Inscribite Ahora
            </button>

            {mostrarCampus && (
              <button className="btncampus" onClick={() => manejarClick('/login')}>
                Accedé al campus
              </button>
            )}
          </>
        )}
      </div>
    </nav>
  );
}

export default NavbarInstitucional;