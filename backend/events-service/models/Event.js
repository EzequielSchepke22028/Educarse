import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    titulo: {type:String, required: true}, 
    descripcion: {type: String},
    fecha: {type: Date , required: true},
    usuarioID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    carrera: {type: String, required: true}
}, { timestamps: true});

/*const eventSchema = new mongoose.Schema({
    titulo: String,
    descripcion: String,
    fecha: Date,
    usuarioID: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    carrera: String
    });*/


export default mongoose.model('Event', eventSchema);