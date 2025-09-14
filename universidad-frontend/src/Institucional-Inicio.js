import './Institucional-inicio.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Institucionalinicio() {
  const navigate = useNavigate();
  const [seleccionada, setSeleccionada] = useState(false);

  const manejarClick = (rutaDestino) => {
    setSeleccionada(true);
    setTimeout(() => {
      navigate(rutaDestino);
    }, 300); // ✅ espera 300ms para mostrar el efecto visual
  };

  return (
    <div className="institucional-wrapper">
      <header className="institucional-header">
        <nav className="institucional-navbar">
          <div className="logo">
            <img src="/imagenes/logoIFTS.png" alt="Logo IFTS" />
          </div>
          <ul className="nav-links">
            <li><a href="#programas">Programas</a></li>
            <li><a href="#institucional">Institucional</a></li>
            <li><a href="#eventos">Eventos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1>INSTITUTO DE FORMACIÓN TÉCNICA SUPERIOR</h1>
          <p>Educación pública, no arancelada y de calidad para tu futuro</p>
          <button className="btn" onClick={() => manejarClick('/Formulario')}>
            ¿No sos Alumno? Inscribite Ahora
          </button>
          <button className="btncampus" onClick={() => manejarClick('/login')}>
            ¿Ya sos alumno? Accedé al campus
          </button>
        </div>
      </header>

      <main>
        <section id="programas" className="institucional-section">
          <h2
            className={`SobreIFTS ${seleccionada ? 'activa' : ''}`}
            onClick={() => manejarClick('/SobreIFTS')}
          >
            Sobre IFTS
          </h2>
        </section>

        <section id="OfertaAcademica" className="institucional-section">
            <h2
            className={`OfertaAcademica ${seleccionada ? 'activa' : ''}`}
            onClick={() => manejarClick('/OfertaAcademica')}
          >
           Oferta Academica
          </h2>
        </section>

        <section id="eventos" className="institucional-section">
            <h2
            className={`Convenio ${seleccionada ? 'activa' : ''}`}
            onClick={() => manejarClick('/Convenio')}
          >
           Convenios con Universidades
          </h2>
        </section>

        <section id="institucional" className="institucional-section">
          <h2
            className={`Donde ${seleccionada ? 'activa' : ''}`}
            onClick={() => manejarClick('/Donde')}
          >
            ¿Dónde encontrarnos?
          </h2>
        </section>
      </main>

      <footer className="institucional-footer">
        <p>© 2025 Instituto de Formación Técnica (IFTS). Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Institucionalinicio;