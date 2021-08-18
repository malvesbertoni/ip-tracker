/* 
    SearchBar is called by Heading.js
    This component is responsible for displaying the "search bar" in the header.
    Users will use this component to input an ip address.

    ---- I have to store this ip address somewhere or find a way to paste it to display component
*/
import "./SearchBar.css"
import { AiOutlineRight } from "react-icons/ai";

const SearchBar = () => {
    return (
        <section className="search-bar">
            {/* Classnames will start with "sb", which is short for "search-bar"*/}
            <div className="sb-wrapper">
                <input type="text" required placeholder="Search for any IP address or domain"/>
                <button><AiOutlineRight /></button>
            </div>
        </section>
    )
}

export default SearchBar;