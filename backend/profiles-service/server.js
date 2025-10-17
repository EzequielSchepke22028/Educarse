import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import profilesRouter from './routes/profilesRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5004;

app.use(cors());
app.use(express.json());
app.use('/api/profiles', profilesRouter);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(' Profiles-service conectado a MongoDB');
    app.listen(PORT, () => console.log(` Profiles-service corriendo en puerto ${PORT}`));
  })
  .catch(err => console.error(' Error de conexión:', err));
