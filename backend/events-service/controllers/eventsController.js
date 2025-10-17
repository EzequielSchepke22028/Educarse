import Event from '../models/Event.js';

// Crear un nuevo evento
export const crearEvento = async (req, res) => {
    try {
        const nuevoEvento = new Event(req.body);
        await nuevoEvento.save();
        res.status(201).json(nuevoEvento);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//Obtener evento por usuario
export const obtenerEventosPorUsuario = async (req, res) => {
    try {
        const {usuarioId} = req.params;
        const eventos = await Event.find({ usuarioID: usuarioId });                                //const eventos = await Event.find({ usuarioID: usuarioId });
        res.status(200).json(eventos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const actualizarEvento = async (req, res) => {
    try {
        const eventoActualizado = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(eventoActualizado);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const eliminarEvento = async (req, res) => {
    try {
        await Event.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Evento eliminado correctamente' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

/*
//actualizar evento por ID
export const actualizarEvento = async (req, res) => {
    try {
        const {id} = req.params;
        const eventoActualizado = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!eventoActualizado) {
            return res.status(404).json({ message: 'Evento no encontrado' });
        }
        res.status(200).json(eventoActualizado);
    } catch (err) {
        res.status(500).json({ message: 'error al actualizar el evento', message: err.message });
    }
};

export const eliminarEvento = async (req, res) => {
    try {
        const {id} = req.params;
        const eventoEliminado = await Event.findByIdAndDelete(id);
        if (!eventoEliminado) {
            return res.status(404).json({ message: 'Evento no encontrado' });
        }
        res.status(200).json({ message: 'Evento eliminado correctamente' });
    } catch (err) {
        res.status(500).json({ message: 'error al eliminar el evento', message: err.message });
    }
}; */