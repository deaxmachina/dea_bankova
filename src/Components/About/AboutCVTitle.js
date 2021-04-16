import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const AboutCVTitle = () => {
  return (
    <div id="about__cv-title">
      <h2 className="medium-text highlight-dark-background">CV at a glance</h2>
      <p className="body-text-normal highlight-dark-background">*hover/tap over each dot for notes</p>
      <p className="body-text-normal highlight-dark-background">or visit 
        <a href="https://www.linkedin.com/in/dbankova/" target="_blank" >
          <FontAwesomeIcon icon={faLinkedin} className="about__linkedin-icon" />
        </a> 
        for details
      </p>
    </div>
  )
};

export default AboutCVTitle; 