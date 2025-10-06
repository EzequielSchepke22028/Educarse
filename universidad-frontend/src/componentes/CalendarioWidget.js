import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "./CalendarioWidget.css";

export default function CalendarioWidget() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
  const [eventos, setEventos] = useState({}); // objeto con eventos por fecha
  const [nuevoEvento, setNuevoEvento] = useState("");

  const agregarEvento = () => {
    const fechaClave = fechaSeleccionada.toDateString();
    const eventosActuales = eventos[fechaClave] || [];
    const actualizados = {
      ...eventos,
      [fechaClave]: [...eventosActuales, nuevoEvento],
    };
    setEventos(actualizados);
    setNuevoEvento("");
  };

  return (
    <aside className="calendario">
      <h4>Calendario</h4>
      <Calendar
        onChange={setFechaSeleccionada}
        value={fechaSeleccionada}
      />

      <div className="evento-form">
        <p><strong>{fechaSeleccionada.toDateString()}</strong></p>
        <input
          type="text"
          value={nuevoEvento}
          onChange={(e) => setNuevoEvento(e.target.value)}
          placeholder="Agregar recordatorio"
        />
        <button onClick={agregarEvento}>Agregar</button>
      </div>

      <ul className="lista-eventos">
        {(eventos[fechaSeleccionada.toDateString()] || []).map((ev, i) => (
          <li key={i}>📝 {ev}</li>
        ))}
      </ul>
    </aside>
  );
}