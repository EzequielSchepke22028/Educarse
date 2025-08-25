import { useNavigate } from 'react-router-dom';
import './Instituciones.css';

function Instituciones() {
  const navigate = useNavigate();

  const instituciones = [
    { id: 1, nombre: 'IFTS 9' },
    { id: 2, nombre: 'IFTS 12' },
    { id: 3, nombre: 'IFTS 4 Análisis en Sistemas' },
    { id: 4, nombre: 'IFTS 5' },
    { id: 5, nombre: 'IFTS 6' }
  ];

  const manejarSeleccion = (idInstitucion) => {
    localStorage.setItem('institucionSeleccionada', idInstitucion);
    navigate('/opcionesaelegir');
  };

  return (
    <div className="instituciones-wrapper">
      <div
        className="instituciones-fondo"
        style={{ backgroundImage: "url('/imagenes/estudiantes.jpg')" }}
      ></div>

      <div className="instituciones-panel">
        <h1>Seleccione su Institución</h1>
        <div className="instituciones-lista">
          {instituciones.map((inst) => (
            <div
              key={inst.id}
              className="institucion-card"
              onClick={() => manejarSeleccion(inst.id)}
            >
              {inst.nombre}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Instituciones;