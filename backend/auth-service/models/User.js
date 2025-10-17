import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nombre: String,
    email: {type: String, unique: true},
    password: {type: String, required: true},
    carrera: String
});

export default mongoose.model('User', userSchema);