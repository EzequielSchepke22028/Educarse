import express from 'express';
import { crearNota, obtenerNotasPorUsuario } from '../controllers/notesController.js';

const router = express.Router();

router.post('/', crearNota);
router.get('/:usuarioId', obtenerNotasPorUsuario);

export default router;