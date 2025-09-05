//Controlador de login 


// Importa el modelo de usuario desde la carpeta models.
// Este modelo representa la estructura de los documentos en la colección de usuarios en MongoDB.
const User = require("../Models/Users");

// Importa la librería bcrypt, que permite comparar contraseñas encriptadas.
// Nunca se deben comparar contraseñas en texto plano por seguridad.
const bcrypt = require("bcrypt");

// Exporta la función login para que pueda ser usada en las rutas.
// Esta función maneja el proceso de autenticación del usuario.
exports.login = async (req, res) => {

  // Extrae el nombre de usuario y la contraseña del cuerpo de la solicitud.
  // Estos datos vienen del frontend (por ejemplo, desde un formulario de login).
  const { username, password } = req.body;

  // Busca en la base de datos un usuario cuyo campo 'username' coincida con el ingresado.
  // Si no lo encuentra, devuelve null.
  const user = await User.findOne({ username });

  // Si no se encontró ningún usuario, responde con un código 401 (no autorizado)
  // y un mensaje indicando que el usuario no existe.
  if (!user) return res.status(401).send("usuario no encontrado, intente de nuevo");

  // Si el usuario está bloqueado (por demasiados intentos fallidos), responde con un 403 (prohibido).
  if (user.isBlocked) return res.status(403).send("Cuenta bloqueada");

  // Compara la contraseña ingresada con la contraseña encriptada guardada en la base de datos.
  // bcrypt.compare devuelve true si coinciden, false si no.
  const isValid = await bcrypt.compare(password, user.passwordHash);

  // Si la contraseña es incorrecta:
  if (!isValid) {
    // Aumenta el contador de intentos fallidos.
    user.failedAttempts += 1;

    // Si el usuario falló 3 veces o más, se bloquea la cuenta.
    if (user.failedAttempts >= 3) user.isBlocked = true;

    // Guarda los cambios en la base de datos (contador actualizado y posible bloqueo).
    await user.save();

    // Devuelve una respuesta con código 401 y mensaje de credenciales incorrectas.
    return res.status(401).send("Credenciales incorrectas");
  }

  // Si la contraseña es correcta:
  // Reinicia el contador de intentos fallidos a 0.
  user.failedAttempts = 0;

  // Guarda el cambio en la base de datos.
  await user.save();

  // Devuelve una respuesta exitosa al frontend.
  res.send("Login exitoso");
};