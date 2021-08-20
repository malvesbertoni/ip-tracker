/* 
    SearchBar is called by Heading.js
    This component is responsible for displaying the "search bar" in the header.
    Users will use this component to input an ip address.

    ---- I have to store this ip address somewhere or find a way to paste it to display component
*/
import "./SearchBar.css";
import { AiOutlineRight } from "react-icons/ai";
import { useState } from "react";

const SearchBar = () => {
  const [ip, setIp] = useState("");

  /* When the form is submitted, the IP Address will be sent to the IPify API
     The JSON object returned will be stored in the "geolocation" variable
     that should be sent to DisplayInfo.js and DisplayMap.js
  */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=at_8Sqj2O6n0XtwXwgvEV4zwHl191z8G&ipAddress=${ip}`
    );
    const geolocation = await response.json();
    console.log(geolocation);
  };

  return (
    <section className="search-bar">
      {/* Classnames will start with "sb", which is short for "search-bar"*/}
      <form onSubmit={handleSubmit}>
        <div className="sb-wrapper">
          {/* This pattern attribute is to guarantee that the input will be in the IPv4 format */}
          <input
            type="text"
            pattern="^((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$"
            placeholder="Search for any IP address"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
          />
          <button type="submit">
            <AiOutlineRight />
          </button>
        </div>
      </form>
    </section>
  );
};

export default SearchBar;
