import React, { useEffect, useState } from 'react';
import { getReminders, createReminder, deleteReminder } from '../services/eventsService';

const Recordatorios = () => {
  const [reminders, setReminders] = useState([]);
  const [newReminder, setNewReminder] = useState({ title: '', date: '' });

  useEffect(() => {
    fetchReminders();
  }, []);

  const fetchReminders = async () => {
    try {
      const response = await getReminders();
      setReminders(response.data);
    } catch (error) {
      console.error('Error al obtener recordatorios:', error);
    }
  };

  const handleChange = (e) => {
    setNewReminder({ ...newReminder, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createReminder(newReminder);
      setNewReminder({ title: '', date: '' });
      fetchReminders();
    } catch (error) {
      console.error('Error al crear recordatorio:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteReminder(id);
      fetchReminders();
    } catch (error) {
      console.error('Error al eliminar recordatorio:', error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Recordatorios</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título del recordatorio"
          value={newReminder.title}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={newReminder.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Agregar recordatorio</button>
      </form>

      <ul>
        {reminders.map((reminder) => (
          <li key={reminder._id}>
            {reminder.title} - {new Date(reminder.date).toLocaleDateString()}
            <button onClick={() => handleDelete(reminder._id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recordatorios;