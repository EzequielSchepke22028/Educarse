import express from 'express';
import {
    crearMateria, 
    obtenerMateriasPorUsuario, 
    actualizarMateria, 
    eliminarMateria, 
} from '../controllers/materiasController.js';

const router = express.Router();

router.post('/', crearMateria);
router.get('/:usuarioId', obtenerMateriasPorUsuario);
router.put('/:id', actualizarMateria);
router.delete('/:id', eliminarMateria);

export default router;