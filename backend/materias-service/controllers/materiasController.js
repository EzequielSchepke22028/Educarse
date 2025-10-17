import Materia from '../models/Materia.js';

// Crear una nueva materia
export const crearMateria = async (req, res) => {
//    const { nombre, descripcion, usuarioId } = req.body;
    try {
        const nuevaMateria = new Materia(req.body);  //({ nombre, descripcion, usuarioId });
        await nuevaMateria.save();
        res.status(201).json(nuevaMateria);
    } catch (err) {
        //console.error('Error al crear materia:', error);
        res.status(500).json({ error: 'Error al crear materia', error: err.message });
    }
};
    //Obtener todas las materias de un usuario
    export const obtenerMateriasPorUsuario = async (req, res) => {
        try {
            const { usuarioId } = req.params;
            const materias = await Materia.find({ usuarioId: usuarioId });
            res.status(200).json(materias);
        } catch (err) {
            //console.error('Error al obtener materias:', err);
            res.status(500).json({ error: 'Error al obtener materias', error: err.message });
        }
    };
    //Actualizar una materia por ID
    export const actualizarMateria = async (req, res) => {
        try {
            const { id } = req.params;
            const materiaActualizada = await Materia.findByIdAndUpdate(id, req.body, { new: true });
            if (!materiaActualizada) {
                return res.status(404).json({ error: 'Materia no encontrada' });
            }
            res.status(200).json(materiaActualizada);
        } catch (err) {
            //console.error('Error al actualizar materia:', err);
            res.status(500).json({ error: 'Error al actualizar materia', error: err.message });
        }
    };
    //Eliminar una materia por ID
    export const eliminarMateria = async (req, res) => {
        try {
            const { id } = req.params;
            const materiaEliminada = await Materia.findByIdAndDelete(id);
            if (!materiaEliminada) {
                return res.status(404).json({ error: 'Materia no encontrada' });
            }
            res.status(200).json({ message: 'Materia eliminada exitosamente' });
        } catch (err) {
            //console.error('Error al eliminar materia:', err);
            res.status(500).json({ error: 'Error al eliminar materia', error: err.message });
        }
    };

