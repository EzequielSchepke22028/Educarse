import React, { useState } from "react";
import NotaEducativa from "./NotaEducativa"; // Importá el bloc
import "./Sidebar.css";

function Sidebar() {
  const [materiasAbierto, setMateriasAbierto] = useState(false);
  const [carpetasAbierto, setCarpetasAbierto] = useState(false);
  const [eventosAbierto, setEventosAbierto] = useState(false);

  return (
    <div className="sidebar-contenido">
      <ul>
        <li onClick={() => setMateriasAbierto(!materiasAbierto)}>
          {materiasAbierto ? "🔽" : "▶️"} Mis Materias 📚
        </li>
        {materiasAbierto && (
          <ul className="submenu">
            <li>Álgebra</li>
            <li>Historia</li>
            <li>Biología</li>
          </ul>
        )}

        <li onClick={() => setCarpetasAbierto(!carpetasAbierto)}>
          {carpetasAbierto ? "🔽" : "▶️"} Carpetas 🗂️
        </li>
        {carpetasAbierto && (
          <ul className="submenu">
            <li>Ejercicios</li>
            <li>Apuntes</li>
            <li>Exámenes</li>
          </ul>
        )}

        <li onClick={() => setEventosAbierto(!eventosAbierto)}>
          {eventosAbierto ? "🔽" : "▶️"} Próximos eventos 📅
        </li>
        {eventosAbierto && (
          <ul className="submenu">
            <li>Entrega de TP</li>
            <li>Clase especial</li>
            <li>Examen parcial</li>
          </ul>
        )}
      </ul>

      <NotaEducativa /> {/* Bloc de notas integrado directamente */}
    </div>
  );
}

export default Sidebar;