import './SobreIFTS.css';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';


function SobreIFTS() {
  const navigate = useNavigate();

  const containerStyle = {
    width: '40%',
    height: '300px'
  };

  const center = {
    lat: -34.60018734764201,
    lng: -58.39140856292023
  };

  return (
    <div className="institucional-info">
      <h2>¿Quiénes somos?</h2>
      <p>
        Somos un instituto de formación técnica superior comprometido con la educación pública y profesional.
      </p>

      <h2>¿Dónde encontrarnos?</h2>
      <p>IFTS 9.</p>

      <LoadScript googleMapsApiKey="AIzaSyD2p4-lJASptfkK3DeRDmQkru2Oe_5t210">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
        />
      </LoadScript>

      <p>IFTS 12.</p>
      <p>IFTS 4.</p>

      <h2>¿Por qué elegirnos?</h2>
      <p>
        Ofrecemos carreras técnicas con articulación universitaria, docentes capacitados y formación práctica.
      </p>
    </div>
  );
}

export default SobreIFTS;