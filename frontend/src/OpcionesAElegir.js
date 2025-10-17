import React from "react";
import Sidebar from "./componentes/Sidebar";
import NotaEducativa from "./componentes/NotaEducativa";
import TablaDeNotas from "./componentes/TablaDeNotas";
import CalendarioWidget from "./componentes/CalendarioWidget";
import "./OpcionesAElegir.css";

export default function OpcionesAElegir() {
  return (
<div className="educativa-layout">
  <aside className="sidebar">
    <Sidebar /> {/* Ya incluye el bloc */}
  </aside>

  <main className="contenido">
    <TablaDeNotas />
  </main>

  <CalendarioWidget />
</div>


  );
}
