import React, { useState } from "react";
import "./TablaDeNotas.css";

function TablaDeNotas() {
  const [materias, setMaterias] = useState([
    // 📘 1º Año
    { id: 101, anio: 1, correlativas: "-", nombre: "Matemática", nota: "", estado: "" },
    { id: 102, anio: 1, correlativas: "-", nombre: "Lógica", nota: "", estado: "" },
    { id: 103, anio: 1, correlativas: "-", nombre: "Introducción a la Programación", nota: "", estado: "" },
    { id: 104, anio: 1, correlativas: "-", nombre: "Arquitectura de Computadoras", nota: "", estado: "" },
    { id: 105, anio: 1, correlativas: "-", nombre: "Inglés Técnico I", nota: "", estado: "" },
    { id: 106, anio: 1, correlativas: "-", nombre: "Práctica Profesionalizante I", nota: "", estado: "" },

    // 📗 2º Año
    { id: 201, anio: 2, correlativas: "101, 103", nombre: "Programación I", nota: "", estado: "" },
    { id: 202, anio: 2, correlativas: "101", nombre: "Estadística", nota: "", estado: "" },
    { id: 203, anio: 2, correlativas: "104", nombre: "Sistemas Operativos", nota: "", estado: "" },
    { id: 204, anio: 2, correlativas: "102", nombre: "Bases de Datos", nota: "", estado: "" },
    { id: 205, anio: 2, correlativas: "105", nombre: "Inglés Técnico II", nota: "", estado: "" },
    { id: 206, anio: 2, correlativas: "106", nombre: "Práctica Profesionalizante II", nota: "", estado: "" },

    // 📙 3º Año
    { id: 301, anio: 3, correlativas: "201", nombre: "Programación II", nota: "", estado: "" },
    { id: 302, anio: 3, correlativas: "204", nombre: "Análisis de Sistemas", nota: "", estado: "" },
    { id: 303, anio: 3, correlativas: "203", nombre: "Redes y Comunicaciones", nota: "", estado: "" },
    { id: 304, anio: 3, correlativas: "202", nombre: "Gestión de Proyectos", nota: "", estado: "" },
    { id: 305, anio: 3, correlativas: "205", nombre: "Inglés Técnico III", nota: "", estado: "" },
    { id: 306, anio: 3, correlativas: "206", nombre: "Práctica Profesionalizante III", nota: "", estado: "" },
  ]);

  const manejarCambio = (index, campo, valor) => {
    const nuevasMaterias = [...materias];
    nuevasMaterias[index][campo] = valor;
    setMaterias(nuevasMaterias);
  };

  const renderTablaPorAnio = (anio, color, titulo) => (
    <section className="tabla-materias">
      <h3>{`${color} ${titulo}`}</h3>
      <table>
        <thead>
          <tr>
            <th>N°</th>
            <th>Correlativa/s</th>
            <th>Materia</th>
            <th>Nota</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {materias
            .filter((materia) => materia.anio === anio)
            .map((materia, index) => (
              <tr key={materia.id}>
                <td>{materia.id}</td>
                <td>
                  <input
                    type="text"
                    value={materia.correlativas}
                    onChange={(e) => manejarCambio(index, "correlativas", e.target.value)}
                  />
                </td>
                <td className="columna-grisada">{materia.nombre}</td>
                <td>
                  <input
                    type="text"
                    value={materia.nota}
                    onChange={(e) => manejarCambio(index, "nota", e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={materia.estado}
                    onChange={(e) => manejarCambio(index, "estado", e.target.value)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );

  return (
    <div>
      {renderTablaPorAnio(1, "📘", "1º Año Analisis de Sistemas - IFTS 4")}
      {renderTablaPorAnio(2, "📗", "2º Año Analisis de Sistemas - IFTS 4")}
      {renderTablaPorAnio(3, "📙", "3º Año Analisis de Sistemas - IFTS 4")}
    </div>
  );
}

export default TablaDeNotas;