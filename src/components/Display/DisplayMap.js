/* 
    DisplayMap is rendered in App.js
    This component is responsible for displaying the inputed ip address map location.
*/

import "./DisplayMap.css";

const DisplayMap = () => {
    return (
        <section className="display-map">
            {/* Classnames will start with "dm", which is short for "display-map" */}
            <div className="dm-wrapper"></div>
        </section>
    )
}

export default DisplayMap;