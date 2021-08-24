/* 
    SearchBar is rendered in the Homepage.container.js
    This component is responsible for displaying the "search bar" in the header.
    Users use this component to input an ip address.

    This component uses the "Lifting state up" React pattern in order to pass the fetched data
     to its owner, where the very same data will be used by the Leaflet API in other components.
    The data inputed in this component will be used directly by the GeoAPI.service.js
*/

import "./SearchBar.css";
import { AiOutlineRight } from "react-icons/ai";
import { useState } from "react";

const SearchBar = ({ userInput }) => {
  const [ip, setIp] = useState("");

  return (
    <section className="search-bar">
      {/* Classnames will start with "sb", which is short for "search-bar"*/}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          userInput(ip);
        }}
      >
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
