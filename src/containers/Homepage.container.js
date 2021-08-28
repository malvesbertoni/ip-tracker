/* 
  This component is rendered on App.js and it's a container 
   for all components that should be displayed on the Homepage.

  It renders the Heading.js, SearchBar.js, DisplayInfo.js and DisplayMap.js

  This component uses the "Lifting state up" pattern with the "SearchBar" component
   to pass information from the ownee (SearchBar) to the owner (this container).
  
  Once a user inputs an IP Address in the "SearchBar" component, a request is made
   to the IpWhoIs API, using the WhoisAPI.service.js

  The data fetched from IpWhoIs API's will be used to display data in 
  "DisplayInfo" and "DisplayMap" components.
*/

import Heading from "../components/Heading/Heading";
import SearchBar from "../components/Heading/SearchBar";
import DisplayInfo from "../components/Display/DisplayInfo";
import DisplayMap from "../components/Display/DisplayMap";

import { useState, useEffect } from "react";
import { whois } from "../services/WhoisAPI.service";

const Homepage = () => {
  const [information, setInformation] = useState({});
  const [input, setInput] = useState(""); // "input" refers to the user input @SearchBar.js

  // Makes a request to the IpWhoIs API using WhoisAPI.service.js and stores the result in "information"
  const fetchIPify = async () => {
    const response = await whois(input);
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
        region={information.region}
        city={information.city}
        timezone={information.timezone}
        isp={information.isp}
      />
      {console.log("latitude", information.latitude)}
      <DisplayMap
        latitude={information.latitude}
        longitude={information.longitude}
      />
    </section>
  );
};

export default Homepage;
