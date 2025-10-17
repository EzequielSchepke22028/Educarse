import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    title: {type:String, required: true},
    tipo: { type: String, enum: ['block', 'parcial', 'final'], required: true },
    contenido: String, 
    usuarioId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    carrera: String,
    fecha: { type: Date, default: Date.now}
}, { timestamps: true });

export default mongoose.model('Note', noteSchema);

/*const noteSchema = new mongoose.Schema({
    tipo: { type: String, enum: ['block', 'parcial', 'final'], required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
const Note = mongoose.model('Note', noteSchema);
export default Note;
*/