import { Routes, Route, useLocation } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Materias from './Materias';
import OpcionesAElegir from './OpcionesAElegir';
import Instituciones from './Instituciones';
import Calendario from './Calendario';
import React from 'react';

function App() {
  const location = useLocation();
  const mostrarCalendario = location.pathname !== '/' && location.pathname !== '/instituciones';
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <Route path="/materias" element={<Materias />} />
        <Route path="/opcionesaelegir" element={<OpcionesAElegir />} />
        <Route path="/instituciones" element={<Instituciones />} />
      </Routes>

      {mostrarCalendario && <Calendario />}
    </>
  );
}
export default App;
