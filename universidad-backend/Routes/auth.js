// El archivo routes/auth.js es el 
// encargado de definir las rutas específicas relacionadas 
// al proceso de autenticación, como el login. Es como el "puente" entre el frontend y la lógica del backend.


const express = require("express");
const router = express.Router();
const authController = require("../Controllers/authController");

router.post("/login", authController.login);

module.exports = router;//- Exporta el router para que pueda ser usado en el archivo principal (index.js


