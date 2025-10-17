import React, { useEffect, useState } from 'react';
import { getEvents, createEvent, deleteEvent } from '../services/eventsService';

const Calendario = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', date: '' });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const response = await getEvents();
      setEvents(response.data);
    } catch (error) {
      console.error('Error al obtener eventos:', error);
    }
  };

  const handleChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEvent(newEvent);
      setNewEvent({ title: '', date: '' });
      fetchEvents();
    } catch (error) {
      console.error('Error al crear evento:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEvent(id);
      fetchEvents();
    } catch (error) {
      console.error('Error al eliminar evento:', error);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Calendario</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Título del evento"
          value={newEvent.title}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={newEvent.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Agregar evento</button>
      </form>

      <ul>
        {events.map((event) => (
          <li key={event._id}>
            {event.title} - {new Date(event.date).toLocaleDateString()}
            <button onClick={() => handleDelete(event._id)}>🗑️</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendario;