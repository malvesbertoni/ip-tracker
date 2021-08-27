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
  const [information, setInformation] = useState({});
  const [input, setInput] = useState(""); // "input" refers to the user input @SearchBar.js

  // Makes a request to the IPify API using IPifyAPI.service.js and stores the result in "information"
  const fetchIPify = async () => {
    const response = await ipify(input);

    setInformation(response);

    return response;
  };

  // Whenever the user input changes, calls the fetchIPify function
  useEffect(() => {
    fetchIPify();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return (
    <section className="homepage-wrapper">
      <Heading />
      <SearchBar userInput={(ip) => setInput(ip)} />
      <DisplayInfo
        ip={information.ip}
        region={information.location.region}
        city={information.location.city}
        postalCode={information.location.postalCode}
        timezone={information.location.timezone}
        isp={information.isp}
      />
      <DisplayMap />
    </section>
  );
};

export default Homepage;
