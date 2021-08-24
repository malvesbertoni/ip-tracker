/* 
    Heading is rendered in the Homepage.container.js
    This component is responsible for displaying the whole "blue section" header of the app.
*/

import "./Heading.css";
import bgImage from "../../pattern-bg.png";

const Heading = () => {
  return (
    <section className="heading" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="heading-wrapper">
        <h1>IP Address Tracker</h1>
      </div>
    </section>
  );
};

export default Heading;
