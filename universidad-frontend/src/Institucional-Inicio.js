import './Institucional-inicio.css';
import { useNavigate } from 'react-router-dom';

function Institucionalinicio() {

const navigate = useNavigate();

  return (
    <div className="institucional-wrapper">
      <header className="institucional-header">
        <nav className="institucional-navbar">
          <div className="logo">IFTS</div>
          <ul className="nav-links">
            <li><a href="#programas">Programas</a></li>
            <li><a href="#institucional">Institucional</a></li>
            <li><a href="#eventos">Eventos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1>Institutos de Formación Técnica</h1>
          <p>Educación publica, No arancelada y de calidad para tu futuro</p>
          <button className="btn" onClick={() => navigate('/login')}>Inscribite Ahora</button>         
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
          <h2>Próximos Eventos</h2>
          <ul>
            <li>📅 Charla sobre ciberseguridad - 15 de septiembre</li>
            <li>📅 Jornada de puertas abiertas - 28 de septiembre</li>
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