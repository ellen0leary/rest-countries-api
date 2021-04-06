
import './header.css'
import React from 'react'
import "./../globals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Header = () => {
    return (
        <section>
            <p><b>Where in the world?</b>
            <button><FontAwesomeIcon icon={["fas", "cloud-moon"]} />Dark Mode</button></p>
            
            <hr />
        </section>
    )
}

export default Header;