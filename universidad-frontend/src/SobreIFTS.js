import './SobreIFTS.css';
import { useNavigate } from 'react-router-dom';


function SobreIFTS() {
 const navigate = useNavigate();
   
  return (
    <div className="institucional-info">
      <h2>¿Quiénes somos?</h2>
      <p>Somos un instituto de formación técnica superior comprometido con la educación pública y profesional.</p>

      <h2>¿Dónde encontrarnos?</h2>
      <p>IFTS 9.</p>
      <p>IFTS 12.</p>
      <p>IFTS 4.</p>


      <h2>¿Por qué elegirnos?</h2>
      <p>Ofrecemos carreras técnicas con articulación universitaria, docentes capacitados y formación práctica.</p>
    </div>
  );
}

export default SobreIFTS;

