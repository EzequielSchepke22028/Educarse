# Educarse

Sistema web educativo modular desarrollado con arquitectura de microservicios. Permite gestionar usuarios, perfiles académicos, notas, eventos, recordatorios y materias.

---

## 🧩 Estructura del Proyecto


  Educarse/ ├── frontend/ # Interfaz de usuario en React ├── backend/ │ ├── auth-service/ # Autenticación y registro de usuarios │ ├── notes-service/ # Gestión de notas por usuario │ ├── events-service/ # Eventos y recordatorios │ ├── profiles-service/ # Perfiles académicos │ └── materias-service/ # Materias por carrera y usuario └── README.md # Documentación del proyecto  

  --- ## 🛠️ Tecnologías Utilizadas - **Frontend**: React, Axios, Styled Components - **Backend**: Node.js, Express, MongoDB, Mongoose - **Autenticación**: JWT, bcrypt - **Base de datos**: MongoDB Atlas - **Control de versiones**: Git + GitHub 

 --- ## 🚀 Instalación y Ejecución Local 
 
 ### 1. Clonar el repositorio ```bash git clone https://github.com/tuusuario/Educarse.git cd Educarse  

2. Instalar dependencias



Shell
cd frontend
npm install

cd ../backend/auth-service
npm install
# Repetir para cada microservicio
Mostrar más líneas
3. Configurar .env en cada microservicio



Plain Text
env no es totalmente compatible. El resaltado de sintaxis se basa en Plain Text.

PORT=5001
MONGO_URI=mongodb+srv://<usuario>:<contraseña>@cluster.mongodb.net/educarse
JWT_SECRET=tu_clave_secreta
``
Mostrar más líneas
4. Ejecutar microservicios



Shell
npm run dev
Mostrar más líneas
5. Ejecutar frontend



Shell
cd frontend
npm start
Mostrar más líneas
🔗 Funcionalidades
/login → Autenticación
/perfiles → Gestión de perfiles académicos
/notas → Notas por usuario
/eventos → Eventos y recordatorios
/materias → Administración de materias
/ → Dashboard general
