import React, { useEffect, useState } from 'react';
import { getNotes } from '../services/notesService';

const NotaFinal = () => {
  const [finalNotes, setFinalNotes] = useState([]);

  useEffect(() => {
    fetchFinalNotes();
  }, []);

  const fetchFinalNotes = async () => {
    try {
      const response = await getNotes();
      // Filtramos solo las notas finales
      const filtered = response.data.filter(note => note.type === 'final');
      setFinalNotes(filtered);
    } catch (error) {
      console.error('Error al obtener notas finales:', error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Notas Finales</h2>
      <ul>
        {finalNotes.map((note) => (
          <li key={note._id}>
            <strong>{note.title}</strong>: {note.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotaFinal;