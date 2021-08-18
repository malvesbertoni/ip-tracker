/* 
    DisplayInfo is rendered in App.js
    This component is responsible for displaying the inputed ip address information.
*/

import "./DisplayInfo.css"

const DisplayInfo = () => {
    return (
        <section className="display-info">
            {/* Classnames will start with "di", which is short for "display-info" */}
            <div className="di-wrapper"></div>
        </section>
    )
}

export default DisplayInfo;