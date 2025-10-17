import Reminder from '../models/Reminder.js';

// Obtener todos los recordatorios

export const obtenerRecordatorios = async (req, res) => {

  try {

    const recordatorios = await Reminder.find();

    res.status(200).json(recordatorios);

  } catch (err) {

    res.status(500).json({ message: err.message });

  }

};

 

// Crear un nuevo recordatorio

export const crearRecordatorio = async (req, res) => {

  try {

    const nuevoRecordatorio = new Reminder(req.body);

    await nuevoRecordatorio.save();

    res.status(201).json(nuevoRecordatorio);

  } catch (err) {

    res.status(500).json({ message: err.message });

  }

};

 

// Actualizar un recordatorio por ID

export const actualizarRecordatorio = async (req, res) => {

  try {

    const recordatorioActualizado = await Reminder.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(recordatorioActualizado);

  } catch (err) {

    res.status(500).json({ message: err.message });

  }

};

 

// Eliminar un recordatorio por ID

export const eliminarRecordatorio = async (req, res) => {

  try {

    await Reminder.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: 'Recordatorio eliminado correctamente' });

  } catch (err) {

    res.status(500).json({ message: err.message });

  }

};