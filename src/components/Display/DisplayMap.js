/* 
    DisplayMap is rendered in App.js
    This component is responsible for displaying the inputed ip address map location.
    To render the map, this component uses the React-Leaflet API.
    
    This component receives props from its owner (Homepage.container.js)
      to dinamically render the map location.
*/

import "./DisplayMap.css";
import icon from "../MapMarker/MapMarker";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker } from "react-leaflet";

const DisplayMap = ({ latitude, longitude }) => {
  const position = [latitude, longitude];

  function SetViewOnUpdate() {
    const map = useMap();
    map.setView([latitude, longitude], map.getZoom());

    return null;
  }

  return (
    <section className="display-map">
      {latitude && longitude ? (
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <SetViewOnUpdate />
          <Marker position={position} icon={icon}></Marker>
        </MapContainer>
      ) : (
        <h1>Loading map...</h1>
      )}
    </section>
  );
};

export default DisplayMap;
