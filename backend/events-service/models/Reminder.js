import mongoose from "mongoose";

const reminderSchema = new mongoose.Schema({
    titulo: String, 
    descripcion: String,
    fecha: Date, 
    usuarioID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Asociar recordatorio a un usuario específico
});

export default mongoose.model('Reminder', reminderSchema);