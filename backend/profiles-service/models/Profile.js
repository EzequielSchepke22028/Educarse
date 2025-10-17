import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  nombre:  { type: String, required: true }, 
  carrera: { type: String, required: true },
  materias: [{ type: String}], // Array de materias
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // asociacion con usuario
});

//const Profile = mongoose.model('Profile', profileSchema);

export default mongoose.model('Profile', profileSchema);
