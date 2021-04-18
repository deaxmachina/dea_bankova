import React from "react";
import aboutString from "./data/aboutText";
import Glow from "../../Reusable/glow";


const AboutTextBox = () => {
  return (
    <>
      <Glow />
      <div className="title-container" id="about__about-title-container">
        <div className="title-text large-text highlight-dark-background" id="about__about-title-text">About</div>
      </div>
      <div id="about__about-text" className="body-text-normal" >
        <div>{aboutString}</div>
      </div>
    </>
  )
};

export default AboutTextBox;
