import React, { useEffect, useState } from 'react';
import { getNotes } from '../services/notesService';

const NotaParcial = () => {
  const [partialNotes, setPartialNotes] = useState([]);

  useEffect(() => {
    fetchPartialNotes();
  }, []);

  const fetchPartialNotes = async () => {
    try {
      const response = await getNotes();
      // Filtramos solo las notas parciales
      const filtered = response.data.filter(note => note.type === 'parcial');
      setPartialNotes(filtered);
    } catch (error) {
      console.error('Error al obtener notas parciales:', error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Notas Parciales</h2>
      <ul>
        {partialNotes.map((note) => (
          <li key={note._id}>
            <strong>{note.title}</strong>: {note.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotaParcial;