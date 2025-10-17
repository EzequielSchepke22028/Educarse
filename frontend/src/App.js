import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Calendario from './pages/Calendario';
import Recordatorios from './pages/Recordatorios';
import Notas from './pages/Notas';
import NotaFinal from './pages/notaFinal';
import NotaParcial from './pages/notaParcial';
import PrivateRoute from './componentes/PrivateRoute';
import Perfiles from './pages/Perfiles';
import CerrarSesion from './pages/CerrarSesion';
import Materias from './pages/Materias'; //Llama a materias.jsx para que se vea en el frontend
import Dashboard from './pages/Dashboard';

import NavbarInstitucional from './NavbarInstitucional'; // ✅ menú institucional global
import Login from './Login'; // Componente de Login     // Componente Exequiel Anaya proyecto viejo import Login from './pages/Login';
import Donde from './Donde';
import SobreIFTS from './SobreIFTS';
import OfertaAcademica from './OfertaAcademica';
import Informatica from './pages/Informatica';
import Administracion from './pages/Administracion';
import Economia from './pages/Economia';
import Idiomas from './pages/Idiomas';
import Derecho from './pages/Derecho';
import Convenio from './Convenio';
import Register from './Register';
//import Materias from './Materias';
import OpcionesAElegir from './OpcionesAElegir';
import Formulario from './Formulario';
import Instituciones from './Instituciones';
import Chatbot from './Chatbot';
import Institucionalinicio from './Institucional-Inicio';

function App() {
  const location = useLocation();



  const showChatbot = location.pathname !== '/';
  

  return (
    <>
      <NavbarInstitucional /> {/* ✅ aparece siempre arriba */}

      <Routes>
        <Route path="/" element={<Institucionalinicio />} />
        <Route path="/Formulario" element={<Formulario />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/materias" element={<Materias />} />
        <Route path="/opcionesaelegir" element={<OpcionesAElegir />} />
        <Route path="/instituciones" element={<Instituciones />} />
        <Route path="/Donde" element={<Donde />} />
        <Route path="/SobreIFTS" element={<SobreIFTS />} />
        <Route path="/OfertaAcademica" element={<OfertaAcademica />} />
        <Route path="/Convenio" element={<Convenio />} />
        <Route path="/Informatica" element={<Informatica />} />
        <Route path="/Administracion" element={<Administracion />} />
        <Route path="/Economia" element={<Economia />} />
        <Route path="Idiomas" element={<Idiomas />} />
        <Route path="/Derecho" element={<Derecho />} />

        <Route path="/calendario" element={<Calendario />}></Route>
        <Route path="/registro" element={<Register />}></Route>
        <Route path="/recordatorios" element={<Recordatorios />}></Route>
        <Route path="/notas" element={<Notas />}></Route>
        <Route path="/notas-finales" element={<NotaFinal />}></Route>
        <Route path="/notas-parciales" element={<NotaParcial />}></Route> 
        <Route path="/cerrar-sesion" element={<CerrarSesion />}></Route>
        <Route path="/materias" element={<Materias />}></Route> 
        {/*<Route path="/dashboard" element={<Dashboard />}></Route>*/}

        {/*<Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>*/}
        {/*COMENTO LOS DASHBOARDS PARA QUE NO PISEN EL INDEX AL ABRIRLO */}
        {/* <PrivateRoute path="/materias" element={<PrivateRoute><Materias />}></PrivateRoute> Ruta privada de materias  */}
        {/* Rutas públicas <Route path="/perfiles" element={<Perfiles />}></Route> */}
        {/* Rutas privadas. ACA DEJO LA RUTA PRIVADA YA QUE CONVIENE MAS PARA evitar conflictos y garantizar control de acceso.*/}
        <Route path="/perfiles"element={<PrivateRoute><Perfiles /></PrivateRoute>}/>

      </Routes>

      {showChatbot && <Chatbot />}
    </>
  );
}

export default App;