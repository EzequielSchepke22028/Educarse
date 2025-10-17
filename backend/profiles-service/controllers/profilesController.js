import Profile from '../models/Profile.js';

// Crear un nuevo perfil

export const crearPerfil = async (req, res) => {
  try {
    const { nombre, carrera, usuariosId } = req.body;
    const perfilExistente = await Profile.findOne({ nombre, carrera, usuariosId });
    if (perfilExistente) {
      return res.status(400).json({ error: 'Ya existe un perfil con esos datos' });
    }
    const nuevoPerfil = new Profile({ nombre, carrera, usuariosId });
    await nuevoPerfil.save();
    res.status(201).json(nuevoPerfil);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/*export const crearPerfil = async (req, res) => {
  try {
    const nuevoPerfil = new Profile(req.body);
    await nuevoPerfil.save();
    res.status(201).json(nuevoPerfil);
  } catch (err) {
    res.status(500).json({ error: Err.message });
  }
};*/

// Obtener perfil por carrera

export const obtenerPerfilesPorCarrera = async (req, res) => {
  try {
    const { carrera } = req.params;
    const {nombre} = req.query;

    const filtro = { carrera };
    if (nombre) {
        filtro.nombre = new RegExp(nombre, 'i'); //búsqueda parcial
    }

    const perfiles = await Profile.find(filtro);
    res.json(perfiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



/*export const obtenerPerfilesPorCarrera = async (req, res) => {
  try {
    const { carrera } = req.params;
    const perfiles = await Profile.find({ carrera });
    res.json(perfiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
    const perfiles = await Profile.find({ carrera });
    res.json(perfiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};*/

export const duplicarPerfiles = async (req, res) => {
  try {
    const { carreraOrigen, carreraDestino } = req.body;
    const perfilesOrigen = await Profile.find({ carrera: carreraOrigen });

    const duplicados = perfiles.map(p => ({
        nombre: p.nombre,
        carrera: carreraDestino,
        materias: p.materias,
        usuariosId: p.usuariosId
    }));

    await Profile.insertMany(duplicados);
    res.status(201).json({ message: 'Perfiles duplicados exitosamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Actualizar perfil por ID 
export const actualizarPerfil = async (req, res) => {
  try {
    const { id } = req.params;
    const perfilActualizado = await Profile.findByIdAndUpdate(id, req.body, { new: true });
    if (!perfilActualizado) {
      return res.status(404).json({ error: 'Perfil no encontrado' });
    }       
    res.json(perfilActualizado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }         
};

// Eliminar perfil por ID
export const eliminarPerfil = async (req, res) => {
  try {
    const { id } = req.params;
    const perfilEliminado = await Profile.findByIdAndDelete(id);
    if (!perfilEliminado) {
      return res.status(404).json({ error: 'Perfil no encontrado' });
    }
    res.json({ message: 'Perfil eliminado exitosamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Eliminar perfiles por carrera
export const eliminarPerfilesPorCarrera = async (req, res) => {
  try {
    const { carrera } = req.params;
    const resultados = await Profile.deleteMany({ carrera });
    res.json({ message: 'Perfiles eliminados exitosamente', resultados });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener todos los perfiles
export const obtenerTodosLosPerfiles = async (req, res) => {
  try {
    const perfiles = await Profile.find();
    res.json(perfiles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Agregar materia a un perfil
export const agregarMateria = async (req, res) => {
  try {
    const { id } = req.params;
    const { materia } = req.body;

    const perfil = await Profile.findById(id);
    if (!perfil) {
      return res.status(404).json({ error: 'Perfil no encontrado' });
    }

    perfil.materias.push(materia);
    await perfil.save();
    res.status(200).json(perfil); //res.json(perfil);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
// Eliminar materia de un perfil
export const eliminarMateria = async (req, res) => {
  try {
    const { id } = req.params;
    const { materia } = req.body;

    const perfil = await Profile.findById(id);
    if (!perfil) {
      return res.status(404).json({ error: 'Perfil no encontrado' });
    }

    // Eliminar materia del array
    perfil.materias = perfil.materias.filter(m => m !== materia);
    await perfil.save();

    res.status(200).json(perfil);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
