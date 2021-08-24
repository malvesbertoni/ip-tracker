/* 
  This component is rendered on App.js and it's a container 
   for all components that should be displayed on the Homepage.

  It renders the Heading.js, SearchBar.js, DisplayInfo.js and DisplayMap.js

  This component uses the "Lifting state up" pattern with the "SearchBar" component
   to pass information from the ownee (SearchBar) to the owner (this container).
  
  Once a user inputs an IP Address in the "SearchBar" component, a request is made
   to the IPify API, using the IPifyAPI.service.js

  The data fetched from IPify API's will be used to make a new request to Leaflet's API,
   using the LeaftletAPI.service.js, and this data returned
   will be used in the "DisplayInfo" and "DisplayMap" components.
*/

import Heading from "../components/Heading/Heading";
import SearchBar from "../components/Heading/SearchBar";
import DisplayInfo from "../components/Display/DisplayInfo";
import DisplayMap from "../components/Display/DisplayMap";

import { useState, useEffect } from "react";
import { ipify } from "../services/IPifyAPI.service";

const Homepage = () => {
  const [input, setInput] = useState("");
  // Whenever the user input changes, a new request to IPify API
  // will be made using the GeoAPI.service.js
  useEffect(() => {
    console.log(ipify(input));
  }, [input]);

  return (
    <section className="homepage-wrapper">
      <Heading />
      <SearchBar userInput={(ip) => setInput(ip)} />
      <DisplayInfo />
      <DisplayMap />
    </section>
  );
};

export default Homepage;
