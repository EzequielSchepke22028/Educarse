    //Aquí definís los campos: failedAttempts, isBlocked

    const mongoose = require("mongoose");//- Carga la librería mongoose, que te permite definir esquemas y modelos para interactuar con MongoDB de forma estructurada.

    //Esto define la estructura que tendrá cada documento de usuario en la base de datos. Desglosemos cada campo:
    const userSchema = new mongoose.Schema({
    username: String,
    passwordHash: String,
    failedAttempts: { type: Number, default: 0 },
    isBlocked: { type: Boolean, default: false },
    });

    module.exports = mongoose.model("Users", userSchema);//Y al exportarlo con module.exports, lo podés usar en otros archivos de tu proyecto


