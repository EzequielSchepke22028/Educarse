import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import NavbarInstitucional from './NavbarInstitucional'; // ✅ menú institucional global

import Login from './Login';
import Donde from './Donde';
import SobreIFTS from './SobreIFTS';
import OfertaAcademica from './OfertaAcademica';
import Convenio from './Convenio';
import Register from './Register';
import Materias from './Materias';
import OpcionesAElegir from './OpcionesAElegir';
import Formulario from './Formulario';
import Instituciones from './Instituciones';
import Calendario from './Calendario';
import Chatbot from './Chatbot';
import Institucionalinicio from './Institucional-Inicio';

function App() {
  const location = useLocation();

  // Rutas donde NO se muestra el calendario
  const ocultarCalendarioEn = [
    '/',
    '/instituciones',
    '/login',
    '/Formulario',
    '/Donde',
    '/SobreIFTS',
    '/OfertaAcademica',
  ];

  const showCalendar = !ocultarCalendarioEn.includes(location.pathname);
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
      </Routes>

      {showCalendar && <Calendario />}
      {showChatbot && <Chatbot />}
    </>
  );
}

export default App;