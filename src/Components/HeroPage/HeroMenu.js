import React from "react";
//import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';


const HeroMenu = () => {
  return (
    <>
      <div id="hero-menu-container">
        <Link to="portfolio"><div className="menu-item">portfolio</div></Link> 
        <Link to="/resources"><div className="menu-item">resources</div></Link>
        <Link to="/about"><div className="menu-item">CV</div></Link>
        <Link to="#contact-page"><div className="menu-item">contact</div></Link>
      </div >
      
      <div className="menu-underline"></div>

      <svg width="0" height="0">
        <filter id='static-noise-hero'>
          <feTurbulence type="fractalNoise" baseFrequency='3' result='noisy' numOctaves="100"/>
          <feComposite operator='in' in='noisy' in2="SourceGraphic" result='monoNoise' />
          <feBlend in='SourceGraphic' in2='monoNoise' mode='multiply' />
        </filter>
      </svg>

    </>
  )
};

export default HeroMenu; 