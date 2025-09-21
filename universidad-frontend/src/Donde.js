import './Donde.css';
import { useNavigate } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function Donde() {
  const navigate = useNavigate();

  const containerStyle = {
    width: '35%',
    height: '300px'
  };

  const IFTS9 = {
    lat: -34.60018734764201,
    lng: -58.39140856292023
  };

  const IFTS12 = {
    lat: -34.65875177209274,
    lng: -58.500241289902895
  };

  const IFTS4 = {
    lat: -34.6123853934262,
    lng: -58.37531846106902
     
  };

  return (
    <div className="IFTS-info">


      <h2>¿Dónde encontrarnos?</h2>
      <p>IFTS 9.</p>
      <p2>Desde 1983, formando técnicos de nivel superior con las competencias necesarias para responder a las demandas sociales y productivas.
        Como Mision:
        Formar técnicos con capacidades adecuadas a las demandas sociales y productivas.
        Vision:
        Consolidarnos como la mejor oferta educativa de calidad en la zona.

        Objetivos:
        Articulación entre formación técnica y mundo laboral.
        Articulación con universidades.
        Promover la capacitación continua.
      </p2>

      <LoadScript googleMapsApiKey="AIzaSyD2p4-lJASptfkK3DeRDmQkru2Oe_5t210">
        <GoogleMap mapContainerStyle={containerStyle} center={IFTS9} zoom={15}>
          <Marker position={IFTS9} icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' }} />
        </GoogleMap>
      </LoadScript>

      <p>IFTS 12.</p>

      <LoadScript googleMapsApiKey="AIzaSyD2p4-lJASptfkK3DeRDmQkru2Oe_5t210">
        <GoogleMap mapContainerStyle={containerStyle} center={IFTS4} zoom={15}>
          <Marker position={IFTS4} icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' }} />
        </GoogleMap>
      </LoadScript>

      <p>IFTS 4.</p>

      <LoadScript googleMapsApiKey="AIzaSyD2p4-lJASptfkK3DeRDmQkru2Oe_5t210">
        <GoogleMap mapContainerStyle={containerStyle} center={IFTS12} zoom={15}>
          <Marker position={IFTS12} icon={{ url: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png' }} />
        </GoogleMap>
      </LoadScript>


    </div>
  );
}

export default Donde;