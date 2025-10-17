import express from 'express';
import { 
    crearEvento, 
    obtenerEventosPorUsuario,
    obtenerTodosLosEventos,
    actualizarEvento,
    eliminarEvento
} from '../controllers/eventsController.js';

const router = express.Router();

// Ruta para crear un nuevo evento
router.post('/', crearEvento);

// Ruta para obtener eventos por usuario
router.get('/:usuarioId', obtenerEventosPorUsuario);

// Ruta para obtener todos los eventos
router.get('/', obtenerTodosLosEventos);

// Ruta para actualizar un evento
router.put('/:id', actualizarEvento); 

// Ruta para eliminar un evento
router.delete('/:id', eliminarEvento);

export default router;
