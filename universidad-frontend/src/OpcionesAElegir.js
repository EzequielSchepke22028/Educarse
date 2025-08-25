import { useNavigate } from 'react-router-dom';
import './OpcionesAElegir.css';
import './App';

function OpcionesAElegir() {
  const navigate = useNavigate();

  const opcionesAElegir = [
    { id: 1, nombre: 'Materias' },
    { id: 2, nombre: 'Notas' },
    { id: 3, nombre: 'Historia Académica' },
    { id: 4, nombre: 'Plan de Estudios' },
  ];

  //agregar logica para que en caso de que vaya a un ID en especial vaya al menu correcto
  const manejarSeleccion = (id) => {
    localStorage.setItem('opcionElegida', id);
    navigate('/materias'); // Podrías cambiar esto según la opción
  };

  return (
    <div className="opciones-container">
      <h1>Seleccione su opción</h1>
      <div className="opciones-lista">
        {opcionesAElegir.map((opc) => (
          <div
            key={opc.id}
            className="opciones-card"
            onClick={() => manejarSeleccion(opc.id)}
          >
            {opc.nombre}
          </div>
        ))}
      </div>
    </div>
  );
}

export default OpcionesAElegir;
