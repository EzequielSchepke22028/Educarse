import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import "./CalendarioWidget.css";

export default function CalendarioWidget() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(new Date());
  const [eventos, setEventos] = useState({});
  const [nuevoEvento, setNuevoEvento] = useState("");

  const [videos, setVideos] = useState([]);
  const [nuevoVideoTitulo, setNuevoVideoTitulo] = useState("");
  const [nuevoVideoURL, setNuevoVideoURL] = useState("");

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

  const extraerVideoID = (url) => {
    const match = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&]+)/);
    return match ? match[1] : null;
  };

  const agregarVideo = () => {
    const id = extraerVideoID(nuevoVideoURL);
    if (id && nuevoVideoTitulo.trim()) {
      setVideos([...videos, { id, titulo: nuevoVideoTitulo }]);
      setNuevoVideoTitulo("");
      setNuevoVideoURL("");
    }
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

      {/* Sección dinámica de videos */}
      <section className="videos-interes">
        <h4>🎥 Videos de YouTube de interés</h4>

        <div className="formulario-video">
          <input
            type="text"
            value={nuevoVideoTitulo}
            onChange={(e) => setNuevoVideoTitulo(e.target.value)}
            placeholder="Título del video"
          />
          <input
            type="text"
            value={nuevoVideoURL}
            onChange={(e) => setNuevoVideoURL(e.target.value)}
            placeholder="URL de YouTube"
          />
          <button onClick={agregarVideo}>Agregar video</button>
        </div>

        <div className="lista-videos">
          {videos.map((video, index) => (
            <div key={index} className="video-item">
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={`Miniatura de ${video.titulo}`}
                  className="video-thumb"
                />
                <p>{video.titulo}</p>
              </a>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}