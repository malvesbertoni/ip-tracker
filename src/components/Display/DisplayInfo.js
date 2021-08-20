/* 
    DisplayInfo is rendered in App.js
    This component is responsible for displaying the inputed ip address information.
*/

import "./DisplayInfo.css";

const DisplayInfo = () => {
  return (
    <section className="display-info">
      {/* Classnames will start with "di", which is short for "display-info" */}
      <div className="di-wrapper">
        <div className="di-block">
          <h1>IP Address</h1>
          <h2>192.212.174.101</h2>
        </div>
        <div className="di-line" />
        <div className="di-block">
          <h1>Location</h1>
          <h2>Brooklyn, NY 10001</h2>
        </div>
        <div className="di-line" />
        <div className="di-block">
          <h1>Timezone</h1>
          <h2>UTC-05:00</h2>
        </div>
        <div className="di-line" />
        <div className="di-block">
          <h1>ISP</h1>
          <h2>SpaceX Starlink</h2>
        </div>
      </div>
    </section>
  );
};

export default DisplayInfo;
