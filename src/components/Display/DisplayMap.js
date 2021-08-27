/* 
    DisplayMap is rendered in App.js
    This component is responsible for displaying the inputed ip address map location.
*/

import "./DisplayMap.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

const DisplayMap = ({ latitude, longitude }) => {
  return (
    <section className="display-map">
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}></Marker>
      </MapContainer>
    </section>
  );
};

export default DisplayMap;
