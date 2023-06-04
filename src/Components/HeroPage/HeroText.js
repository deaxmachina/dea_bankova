import React from "react";

const HeroText = () => {
  return (
    <div id="hero-text-container" >
      <p className="greeting highlight-dark-background">Hi, I'm</p>
      <h1 className="name highlight-dark-background">Dea Bankova</h1>
      <br/>
      <p className="personal-description highlight-dark-background">
        I write code, design and 
        build <span class='hero-highlight'>data visualisations</span> and data-driven stories, and 
        occasionally play with generative art. 
        Currently Graphics Journalist at <span class='bold'>Reuters</span>. 
        Previously data visualisation at <span class='bold'>U Tokyo</span> and machine learning 
        at <span class='bold'>Microsoft</span> & start-up.
      </p>
    </div>
  )
};

export default HeroText; 