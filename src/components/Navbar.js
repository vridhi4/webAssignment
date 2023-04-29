import React from 'react';
import {useRef} from "react";

import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/navbar.css"


function Navbar() {

    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }


    return (
        <header>
            <h3>logo</h3>
            <nav ref={navRef}>
                <a href='/#'>Home</a>
                <a href='/#'>About</a>
                <a href='/#'>Contact</a>
                <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>

            <buttons className='nav-btn' onClick={showNavbar}>
                <FaBars/>
            </buttons>
        </header>
    );
}

export default Navbar;