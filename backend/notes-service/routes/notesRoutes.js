import express from 'express';
import { crearNota, obtenerNotasPorUsuario, actualizarNota, eliminarNota} from '../controllers/notesController.js';//import { getNotes, createNote, updateNote, deleteNote } from '../controllers/notesController.js';

const router = express.Router();

router.post('/', crearNota);
router.get('/:usuarioId', obtenerNotasPorUsuario);
router.put('/:id', actualizarNota);
router.delete('/:id', eliminarNota);

export default router;