import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";


const Footer = ({ colorCustom, backgroundColorCustom }) => {
  return (
    <div className="footer" style={{ color: colorCustom, backgroundColor: backgroundColorCustom }}>
      <div className="footer__container">

        <div className="footer__social-container">
          <div className="footer__social">
            <a href="mailto:hello@deabankova.com" >
              <FontAwesomeIcon icon={faEnvelope} className="footer__social-icon-s" />
            </a>
          </div>
          <div className="footer__social">
            <a href="https://twitter.com/DeaBankova" target="_blank">
              <FontAwesomeIcon icon={faTwitter} className="footer__social-icon-s" />
            </a>
          </div>
          <div className="footer__social">
            <a href="https://www.linkedin.com/in/dbankova/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} className="footer__social-icon-s" />
            </a>
          </div>
          <div className="footer__social">
            <a href="https://github.com/deaxmachina" target="_blank">
              <FontAwesomeIcon icon={faGithub} className="footer__social-icon-s" />
            </a>
          </div>
          <div className="footer__social">
            <Link to="/" > 
              <FontAwesomeIcon icon={faHome} className="footer__social-icon-s" /> 
            </Link>    
          </div>
        </div>
        <div className="footer__text"> 
          <p id="footer__name">&#169; 2023 Dea Bankova </p>
        </div> 

      </div> 
    </div>
  )
};

export default Footer;