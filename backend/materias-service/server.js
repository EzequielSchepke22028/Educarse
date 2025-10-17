import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import eventsRoutes from './routes/eventsRoutes.js'; 
import remindersRoutes from './routes/remindersRoutes.js';
import materias from './routes/materiasRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5003;

app.use(cors());
app.use(express.json());

app.use('/api/events', eventsRoutes);
app.use('/api/reminders', remindersRoutes);
app.use('/api/materias', materiasRoutes);

/* Conexión a MongoDB */
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ Events-service conectado a MongoDB: ✅');
        app.listen(PORT, () => (console.log(`🚀 Events-service corriendo en puerto ${PORT}`)));
        })
    .catch((err) => {
        console.error('❌ Error al conectar a la base de datos: ❌', err);
    });


/*import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import eventRoutes from './routes/eventsRoutes.js'; 
import remindersRoutes from './routes/remindersRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5003;

app.use(cors());
app.use(express.json());

app.use('/api/events', eventRoutes);
app.use

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ Events-service conectado a MongoDB: ✅');
        app.listen(PORT, () => (console.log(`🚀 Events-service corriendo en puerto ${PORT}`)));
        })
    .catch((err) => {
        console.error('❌ Error al conectar a la base de datos: ❌', err);
    }); */




/*
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ Events-service conectado a MongoDB ✅');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error al conectar a la base de datos:', error);
    });
*/