// 1. Cargar variables de entorno desde el archivo .env
require('dotenv').config();

// 2. Importar dependencias
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // ← nuevo


// 3. Crear instancia de Express
const app = express();

// 4. Middleware para parsear JSON
app.use(express.json());


// 4.5 Habilitar CORS
app.use(cors()); // ← nuevo

// 5. Conectar a MongoDB usando la URI del .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.error('❌ Error de conexión:', err));

// 6. Importar y usar rutas
const authRoutes = require('./Routes/auth');
app.use('/api', authRoutes);

// 7. Definir el puerto desde el .env o usar 3000 por defecto
const PORT = process.env.PORT || 3000;

// 8. Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});