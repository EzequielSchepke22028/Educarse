import express from 'express';
import {
    crearPerfil, 
    obtenerPerfilesPorCarrera, 
    duplicarPerfiles, 
    actualizarPerfil, 
    eliminarPerfil, 
    eliminarPerfilesPorCarrera, 
    obtenerTodosLosPerfiles
} from '../controllers/profilesController.js';            //import { crearPerfil, obtenerPerfilesPorCarrera, duplicarPerfiles } from '../controllers/profilesController';

const router = express.Router();

router.post('/', crearPerfil);
router.get('/carrera', obtenerPerfilesPorCarrera);//router.get('/carrera/:carrera', obtenerPerfilesPorCarrera);
router.post('/duplicar', duplicarPerfiles);
router.put('/:id', actualizarPerfil);
router.delete('/:id', eliminarPerfil);
router.delete('/carrera/:carrera', eliminarPerfilesPorCarrera);
router.get('/', obtenerTodosLosPerfiles);
router.get('/carrera/:carrera', obtenerPerfilesPorCarrera);

router.post('/id/materias', agregarMateria);
router.delete('/id/materias', eliminarMateria);

export default router;
