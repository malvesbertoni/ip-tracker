/*
  This component is a pre-requisite of React-Leaflet's API.
  It sets up the information needed to render the icon marker in the map.
  This component is used in DisplayMap.js
*/

import L from "leaflet";

export default L.icon({
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
  iconUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png",
});
