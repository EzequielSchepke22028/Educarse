import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import notesRoutes from './routes/notes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/notas', notesRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Conectado a MongoDB');
    app.listen(process.env.PORT, () => {
      console.log(`Servidor de notas corriendo en el puerto ${process.env.PORT}`);
    });
  })
  .catch(err => console.error('Error al conectar a MongoDB:', err));








/*import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import notesRouter from './routes/notesRoutes.js'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5002;

app.use(cors());
app.use(express.json());
app.use('/api/notes', notesRouter);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ Notes-service Conectado a la base de datos de MongoDB ✅');
        app.listen(PORT, () => {
            console.log(`🚀 Notes-service corriendo en puerto ${PORT} 🚀`);
        });
    })
    .catch(err => console.error('❌ Error al conectar a la base de datos ❌', err));
*/
        

/* Conexión a la base de datos MongoDB  
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/notesdb';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Conectado a la base de datos');
})
.catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
});

app.use(cors());
app.use(express.json());
app.use('/api/notes', notesRouter);

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});*/
