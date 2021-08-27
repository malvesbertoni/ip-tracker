/* 
    DisplayInfo is rendered in App.js
    This component is responsible for displaying the inputed ip address information.
*/

import "./DisplayInfo.css";

const DisplayInfo = ({ ip, region, city, postalCode, timezone, isp }) => {
  //console.log("information", information);
  //console.log("ip", ip);

  return (
    <section className="display-info">
      {/* Classnames will start with "di", which is short for "display-info" */}
      <div className="di-wrapper">
        <div className="di-block">
          <h1>IP Address</h1>
          <h2>{ip}</h2>
        </div>
        <div className="di-line" />
        <div className="di-block">
          <h1>Location</h1>
          <h2>
            {city}, {region} {postalCode}
          </h2>
        </div>
        <div className="di-line" />
        <div className="di-block">
          <h1>Timezone</h1>
          <h2>UTC {timezone}</h2>
        </div>
        <div className="di-line" />
        <div className="di-block">
          <h1>ISP</h1>
          <h2>{isp}</h2>
        </div>
      </div>
    </section>
  );
};

export default DisplayInfo;
