
import './header.css'
import React from 'react'
import "./../globals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {getCountries} from '../api/index'


const Header = () => {
    getCountries()
    return (
        <section>
            <p><b>Where in the world?</b>
            <button><FontAwesomeIcon icon={["fas", "cloud-moon"]} />Dark Mode</button></p>
            
            <hr />
        </section>
    )
}

export default Header;