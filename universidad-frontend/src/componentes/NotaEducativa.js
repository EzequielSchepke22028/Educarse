import React, { useState } from "react";
import "./NotaEducativa.css";

export default function NotaEducativa() {
  const [titulo, setTitulo] = useState("");
  const [contenido, setContenido] = useState("");

  const aplicarFormato = (comando) => {
    document.execCommand(comando, false, null);
  };

  const guardarNota = () => {
    console.log("Guardando Apuntes:", { titulo, contenido });
    // Acá podés conectar con MongoDB usando Axios o fetch
  };

  return (
    <section className="bloc-notas">
      <header className="bloc-header">
        <input
          type="text"
          placeholder="Bloc de Notas"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

      </header>



      <div
        className="editor-contenido"
        contentEditable
        onInput={(e) => setContenido(e.currentTarget.innerHTML)}
        suppressContentEditableWarning={true}
      >
        Escribe tus apuntes personales aquí...
      </div>


      <div className="formato">
        <button onClick={() => aplicarFormato("bold")}>B</button>
        <button onClick={() => aplicarFormato("italic")}>I</button>
        <button onClick={() => aplicarFormato("underline")}>U</button>
        <button onClick={() => aplicarFormato("strikeThrough")}>S</button>
      </div>


          <div className="acciones">
          <button onClick={guardarNota}>Guardar</button>
          <button>Compartir</button>
          <button onClick={() => window.print()}>Imprimir</button>
        </div>

    </section>
  );
}