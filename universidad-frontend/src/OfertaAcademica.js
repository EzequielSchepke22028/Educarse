import './OfertaAcademica.css';
import { useState } from 'react';

function OfertaAcademica() {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('');
  const [modalidad, setModalidad] = useState('');
  const [nivel, setNivel] = useState('');

  const carreras = [
    {
      nombre: 'Tecnicatura en Desarrollo Web',
      categoria: 'Informática',
      modalidad: 'Semipresencial',
      nivel: 'Pregrado',
      duracion: '3 años',
    },
    {
      nombre: 'Tecnicatura en Administración Pública',
      categoria: 'Administración',
      modalidad: 'Presencial',
      nivel: 'Pregrado',
      duracion: '2 años',
    },
    {
      nombre: 'Diplomatura en Educación Digital',
      categoria: 'Educación',
      modalidad: 'Virtual',
      nivel: 'Diplomatura',
      duracion: '1 año',
    },
    // Agregá más carreras según tu oferta
  ];

  const carrerasFiltradas = carreras.filter((carrera) => {
    return (
      carrera.nombre.toLowerCase().includes(busqueda.toLowerCase()) &&
      (categoria === '' || carrera.categoria === categoria) &&
      (modalidad === '' || carrera.modalidad === modalidad) &&
      (nivel === '' || carrera.nivel === nivel)
    );
  });

  return (
    <div className="oferta-wrapper">
      <h1>Oferta Académica</h1>

      <div className="filtros">
        <input
          type="text"
          placeholder="Buscar carrera..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />

        <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
          <option value="">Todas las áreas</option>
          <option value="Informática">Informática</option>
          <option value="Administración">Administración</option>
          <option value="Educación">Educación</option>
        </select>

        <select value={modalidad} onChange={(e) => setModalidad(e.target.value)}>
          <option value="">Todas las modalidades</option>
          <option value="Presencial">Presencial</option>
          <option value="Virtual">Virtual</option>
          <option value="Semipresencial">Semipresencial</option>
        </select>

        <select value={nivel} onChange={(e) => setNivel(e.target.value)}>
          <option value="">Todos los niveles</option>
          <option value="Pregrado">Pregrado</option>
          <option value="Diplomatura">Diplomatura</option>
        </select>
      </div>

      <div className="carreras-grid">
        {carrerasFiltradas.length > 0 ? (
          carrerasFiltradas.map((carrera, index) => (
            <div key={index} className="carrera-card">
              <h3>{carrera.nombre}</h3>
              <p><strong>Área:</strong> {carrera.categoria}</p>
              <p><strong>Modalidad:</strong> {carrera.modalidad}</p>
              <p><strong>Nivel:</strong> {carrera.nivel}</p>
              <p><strong>Duración:</strong> {carrera.duracion}</p>
              <button>Ver más</button>
            </div>
          ))
        ) : (
          <p className="no-resultados">No se encontraron carreras con esos filtros.</p>
        )}
      </div>
    </div>
  );
}

export default OfertaAcademica;