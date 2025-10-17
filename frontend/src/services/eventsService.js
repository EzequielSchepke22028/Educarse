//src/services/eventsService.js

import axios from 'axios';
const EVENTS_API = 'http://localhost:5003/api/events'; // Cambia esto a la URL de tu backend
const REMINDER_API = 'http://localhost:5003/api/reminders'; //AJUSTAR SI ES DIFERENTE 

//EVENTOS (CALENDARIO) 
export const getEvents = () => axios.get(`${EVENTS_API}/`);
export const createEvent = (data) => axios.post(`${EVENTS_API}/`, data);
export const updateEvent = (id, data) => axios.put(`${EVENTS_API}/${id}`, data);
export const deleteEvent = (id) => axios.delete(`${EVENTS_API}/${id}`);

//RECORDATORIOS
export const getReminders = () => axios.get(`${REMINDER_API}/`);
export const createReminder = (data) => axios.post(`${REMINDER_API}/`, data);
export const updateReminder = (id, data) => axios.put(`${REMINDER_API}/${id}`, data);
export const deleteReminder = (id) => axios.delete(`${REMINDER_API}/${id}`);
