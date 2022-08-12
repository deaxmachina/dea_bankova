import React from "react";
import { Link } from "react-router-dom";
import PortpolioPopup from "../PortfolioPage/PortfolioPopup";

const minToChangeImage = 450; 

const Work = ({ projectsMetadata, sectionTitle, sectionSubtitle, windowWidth, selectedProject, setSelectedProject  }) => {

  return (
    <>
    <div style={ selectedProject ? { opacity: 0.1, pointerEvents: 'none' } : {}}>
      <div className="title-container" id="portfolio__standalone-container-styles">
        <div className="title-text large-text" id="portfolio__standalone-text-styles">{sectionTitle}</div>
      </div>
      <div class='section-subtitle'>{sectionSubtitle}</div>

      <div className="portfolio-grid">
        {
          projectsMetadata.map(project => (          
            <div 
              key={project.id} 
              className="portfolio-grid-entry" 
              style={{backgroundImage: windowWidth > minToChangeImage? `url(${project.smallImgUrl})` : `url(${project.imgUrl})`}}
            >
              <button className="portfolio-grid-btn individual-viz noSelect">
                <span className="portfolio-grid-project-title body-text-large">{project.title}</span>
                <br/>
                {
                  project.id === 'tdb-companies-graph' ? 
                    <Link to={`/portfolio/${project.id}`} ><span className="border-button full-project-btn noSelect">about</span> </Link>
                  : project.hasPage ? 
                    <span 
                      className="border-button individual-viz-btn noSelect" 
                      onClick={() => setSelectedProject(project)}>
                        about
                    </span> 
                    : 
                    <a href={project.websiteUrl} target="_blank" className="noSelect">
                      <span className="border-button individual-viz-btn noSelect">view</span>
                    </a>
                  }  
              </button>   
            </div>
          ))
        }
      </div>
    </div>
    {
      selectedProject && 
      <div className='popup-wrapper'>
        <PortpolioPopup project={selectedProject} windowWidth={windowWidth} setSelectedProject={setSelectedProject} />
      </div>
    }
    </>
  )
};

export default Work;

