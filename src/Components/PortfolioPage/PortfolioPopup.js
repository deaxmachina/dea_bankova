import React from "react";
import "./PortfolioPopup.css";
import TDBProject from "./TDBProject/TDBProject"

// at what point should the image swich to the smaller one? 
const minToChangeImage = 650; 

// What is used for most projects, unless they have a custom portfolio 
const PortfolioPopupStandard = ({ project, windowWidth, setSelectedProject }) => {
  return (
    <>
    <div className='portfolio-portfolio__wrapper' id='popup'>
      <button className='btn-close' onClick={() => setSelectedProject(null)}>X</button>
      <div className="portfolio-portfolio__text body-text-normal" >
        <div className="portfolio-portfolio__title-text large-text"><span>{project.title}</span></div>
        <div className="portfolio-portfolio__view-btn-container noSelect">
          <a href={project.websiteUrl} target="_blank" className="portfolio-portfolio__view-btn body-text-normal noSelect" style={{backgroundColor: project.backgroundColour, borderColor: project.backgroundColour}}>view</a>
        </div>

        <p className="portfolio-portfolio__responsible-for-container">
          <span className="portfolio-portfolio__bold-text">Responsible for: </span>
          <span>{project.responsibleFor}</span>
        </p>
        <p className="portfolio-portfolio__tools-container">
          <span className="portfolio-portfolio__bold-text">Tools: </span>
          <span>{project.tools}</span>  
        </p>
        <p className="portfolio-portfolio__client-container">
          <span>{project.client}</span>
        </p>
        <br />
        <p className="portfolio-portfolio__project-description-container">
          {project.description}
        </p>
      </div>
    </div>
    </>
  )
}

const PortfolioPopup = ({ project, windowWidth, setSelectedProject }) => {
  return (
    <>
    { 
      project.standardLayout 
      ? <PortfolioPopupStandard project={project} windowWidth={windowWidth} setSelectedProject={setSelectedProject}/>
      : project.id === 'tdb-companies-graph' 
      ? <TDBProject project={project} windowWidth={windowWidth} />
      : null 
     }
  </>
    
  )
};

export default PortfolioPopup;