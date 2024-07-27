import React from "react";
import "./PortfolioPopup.css";
import TDBProject from "./TDBProject/TDBProject"

// at what point should the image swich to the smaller one? 
const minToChangeImage = 650; 

// What is used for most projects, unless they have a custom portfolio 
const PortfolioPopupStandard = ({ project, windowWidth, setSelectedProject }) => {
  return (
    <>
    <div className='popup-portfolio__wrapper' id='popup'>
      <button className='btn-close' onClick={() => setSelectedProject(null)}>✖️</button>
      <div className="popup-portfolio__text body-text-normal" >
        <div className="popup-portfolio__title-text large-text"><span>{project.title}</span></div>
        <div className="popup-portfolio__view-btn-container noSelect">
          <a href={project.websiteUrl} target="_blank" className="popup-portfolio__view-btn body-text-normal noSelect" style={{backgroundColor: project.backgroundColour, borderColor: project.backgroundColour}}>view</a>
        </div>

        <p className="popup-portfolio__responsible-for-container">
          <span className="popup-portfolio__bold-text">👩🏼‍💻 Responsible for: </span>
          <span>{project.responsibleFor}</span>
        </p>
        <p className="popup-portfolio__tools-container">
          <span className="popup-portfolio__bold-text">🔧 Tools: </span>
          <span>{project.toolsArray.join(', ')}</span>  
        </p>
        {
          project.awards && 
          <>
            <span className="popup-portfolio__bold-text">🏆 Awards: </span>
            {
              project.awardsArray.map(d => (
                <a className="award_link" href={d.url} target="_blank">{d.award}, </a>
              ))
            }
            <br />
          </>  
        }
        <br />
        <p className="popup-portfolio__client-container">
          <span>{project.client}</span>
        </p>
        <br />
        <p className="popup-portfolio__project-description-container">
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