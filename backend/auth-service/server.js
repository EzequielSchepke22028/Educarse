import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5001;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado a MongoDB');
    app.listen(PORT, () => console.log(`Servidor de autenticación corriendo en el puerto ${PORT}`));
}).catch(err => console.error('Error al conectar a MongoDB:', err));




/*import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
//import bodyParser from 'body-parser';

dotenv.config();
const app = express(); 
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => { 
        console.log('✅ Conectado a MongoDB Atlas ✅');
        app.listen(PORT, () => console.log(`🚀 Servidor escuchando en el puerto ${PORT} 🚀`));
    })
    .catch(err => console.error('❌ Error de conexion: ❌', err));

*/

/* Configuración del servidor 2da version
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('MongoDB connection error:', error);
});

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});*/
