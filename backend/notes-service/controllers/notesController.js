import Note from '../models/Note.js';

// Crear una nueva nota
export const crearNota = async (req, res) => {
    try {
        const nuevaNota = new Note(req.body);
        await nuevaNota.save();
        res.status(201).json(nuevaNota);
    } catch (err) {
        res.status(500).json({ message: 'Error al crear la nota', error: err.message});
    }
};

// Obtener notas por usuario
export const obtenerNotasPorUsuario = async (req, res) => {
    try {
        const { usuarioId } = req.params;
        const notas = await Note.find({ usuarioId });
        res.json(notas);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener las notas' });
    }
};

//Actualizar una nota por ID

export const actualizarNota = async (req, res) => {
    try {
        const { id } = req.params;
        const notaActualizada = await Note.findByIdAndUpdate(id, req.body, { new: true });
        //res.json(notaActualizada);
        if (!notaActualizada) {
            return res.status(404).json({ message: 'Nota no encontrada' });
        }
        res.json(notaActualizada);
    } catch (err) {
        res.status(500).json({ message: 'Error al actualizar la nota', error: err.message });
    }
};

// Eliminar una nota por ID
export const eliminarNota = async (req, res) => {
    try { 
        const { id } = req.params;
        const notaEliminada = await Note.findByIdAndDelete(id);
        if (!notaEliminada) {
            return res.status(404).json({ message: 'Nota no encontrada' });
        }
        res.status(200).json({ message: 'Nota eliminada exitosamente' });
    } catch (err) {
        res.status(500).json({ message: 'Error al eliminar la nota', error: err.message });
    }
};

/*import Note from '../models/Note.js';

export const crearNota = async (req, res) => {
    try {
        const nuevaNota = new Note(req.body);
        await nuevaNota.save();
        res.status(201).json(nuevaNota);
    } catch (err) {
        res.status(500).json({ message: 'Error al crear la nota' });
    }
};

export const obtenerNotasPorUsuario = async (req, res) => {
    try {
        const { usuarioId } = req.params;
        const notas = await Note.find({ usuarioId });
        res.json(notas);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener las notas' });
    }
};

const createNote = async (req, res) => {
    const { tipo, contenido, usuarioId, carrera } = req.body;
    const nuevaNota = new Note({ tipo, contenido, usuarioId, carrera });
    try {
        await nuevaNota.save();
        res.status(201).json(nuevaNota);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la nota' });
    }
};

export { getNotes, createNote };
*/

/* Obtener todas las notas 
export const crearNota = async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las notas' });
    }
};

const createNote = async (req, res) => {
    const { tipo, contenido, usuarioId, carrera } = req.body;
    const nuevaNota = new Note({ tipo, contenido, usuarioId, carrera });
    try {
        await nuevaNota.save();
        res.status(201).json(nuevaNota);
    } catch (error) {
        res.status(500).json({ message: 'Error al crear la nota' });
    }
};

export { getNotes, createNote };
*/