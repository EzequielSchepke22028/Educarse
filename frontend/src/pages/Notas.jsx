import React, { useEffect, useState } from 'react';
import { 
    getNotesByUser,
    createNote, 
    updateNote, 
    deleteNote
} from '../services/notesService';
import { jwtDecode } from 'jwt-decode';
//import { getNotes, createNote, updateNote, deleteNote } from '../services/notesService';  crud notas

const Notas = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: '', content: '' });
  const [editingId, setEditingId] = useState(null);


  useEffect(() => {
    fetchNotes();
  }, []);

    const fetchNotes = async () => {
    try {
      const token = localStorage.getItem('token');
      const decoded = jwtDecode(token);
      const usuarioId = decoded.id;

      const response = await getNotesByUser(usuarioId);
      setNotes(response.data);
    } catch (error) {
      console.error('Error al obtener notas:', error);
    }
  };

  /*  const fetchNotes = async () => {
    try {
      const response = await getNotes();
      setNotes(response.data);
    } catch (error) {
      console.error('Error al obtener notas:', error);
    }
  };*/

  const handleChange = (e) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await updateNote(editingId, newNote);
        setEditingId(null);
      } else {
        await createNote(newNote);
      }
      setNewNote({ title: '', content: '' });
      fetchNotes();
    } catch (error) {
      console.error('Error al guardar nota:', error);
    }
  };

  const handleEdit = (note) => {
    setNewNote({ title: note.title, content: note.content });
    setEditingId(note._id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      fetchNotes();
    } catch (error) {
      console.error('Error al eliminar nota:', error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Notas</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={newNote.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Contenido"
          value={newNote.content}
          onChange={handleChange}
          required
        />
        <button type="submit">{editingId ? 'Actualizar' : 'Agregar'} nota</button>
      </form>

      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <strong>{note.title}</strong>: {note.content}
            <button onClick={() => handleEdit(note)}>✏️</button>
            <button onClick={() => handleDelete(note._id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notas;