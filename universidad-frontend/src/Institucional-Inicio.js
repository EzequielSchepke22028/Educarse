import './Institucional-inicio.css';
import { useNavigate } from 'react-router-dom';

function Institucionalinicio() {

const navigate = useNavigate();

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
          <button className="btn" onClick={() => navigate('/Formulario')}>¿No sos Alumno? Inscribite Ahora</button>     
          <button className="btncampus" onClick={() => navigate('/login')}>¿Ya sos alumno? Accede al campus</button>      
        </div>
      </header>

      <main>

        <section id="institucional" className="institucional-section">
          <h2>Sobre el IFTS</h2>
          <p>Somos una institución comprometida con la formación técnica profesional, con docentes especializados y vínculos con el sector productivo.</p>
        </section>

        <section id="programas" className="institucional-section">
          <h2>Programas Académicos</h2>
          <p>Conocé nuestras tecnicaturas en desarrollo web, redes, administración y más.</p>
        </section>

        <section id="eventos" className="institucional-section">
          <h2>Convenios con Universidades</h2>
          <ul>

          </ul>
        </section>
      </main>

      <footer className="institucional-footer">
        <p>© 2025 Instituto de Formación Técnica (IFTS). Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Institucionalinicio;