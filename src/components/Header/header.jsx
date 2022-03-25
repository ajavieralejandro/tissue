import React from 'react';
import './style.scss';
import Fade from 'react-reveal/Fade';


const Header = () => {
    return(
        <section className="header-container">
            <Fade top> 
         
            <h1 id='header-text'>Tissue</h1>
            <p id='quote'>“Installation is meditation”</p>
            </Fade>

        </section>
    )
}

export default Header;