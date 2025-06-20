import { useEffect, useState } from 'react';

function Materias() {
  const [materias, setMaterias] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/materias')
      .then(res => res.json())
      .then(data => setMaterias(data));
  }, []);

  return (
    <div>
      <h2>Materias</h2>
      <ul>
        {materias.map((m, i) => (
          <li key={i}>{m.nombre} ({m.codigo})</li>
        ))}
      </ul>
    </div>
  );
}

export default Materias;
