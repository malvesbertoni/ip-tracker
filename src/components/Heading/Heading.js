/* 
    Heading is rendered in App.js
    This component is responsible for displaying the whole "blue section" header of the app.
    Calls the SearchBar.js component.
*/

import "./Heading.css"
import SearchBar from "./SearchBar";
import bgImage from "../../pattern-bg.png"

const Heading = () => {
    return (
        <section className="heading" style={{backgroundImage: `url(${bgImage})`}}>
            <div className="heading-wrapper">
                <h1>IP Address Tracker</h1>
                <SearchBar />
            </div>
        </section>
    )
}

export default Heading;