import express from 'express';
import { register, login} from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

export default router;


/* 2da version */

/* import express from 'express';
import {
  registrarUsuario,
  loginUsuario,
  verificarToken
} from '../controllers/authController.js';

const router = express.Router();

router.post('/register', registrarUsuario);
router.post('/login', loginUsuario);
router.get('/verify', verificarToken);

export default router;*/