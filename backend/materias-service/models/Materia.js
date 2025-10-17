import mongoose, { Mongoose } from "mongoose";

const materiaSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    descripcion: { type: String},
    carrera: { type: String, required: true },
    usuarioID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true});


//const Materia = mongoose.model("Materia", materiaSchema);

export default mongoose.model("Materia", materiaSchema);
