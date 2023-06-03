import React from "react";
import { Link } from "react-router-dom";
import PortpolioPopup from "../PortfolioPage/PortfolioPopup";
import Video from './Video'

// at what point should the image swich to the smaller one? 
const minToChangeImage = 450; 

const SideProjects = ({ projectsMetadata, sectionTitle, sectionSubtitle, windowWidth, selectedProject, setSelectedProject }) => {

  return (
    <>
      <div style={ selectedProject ? { opacity: 0.1, pointerEvents: 'none' } : {}}>
        <div className="title-container" id="portfolio__projects-container-styles">
          <div className="title-text large-text" id="portfolio__projects-text-styles">
            {sectionTitle}
          </div>
          
        </div>
        <div class='section-subtitle'>{sectionSubtitle}</div>
        <div className="clarifying-message">click on each image for details</div>
        <div className="portfolio-grid">
          {
            projectsMetadata.map(project => ( 
              <div className='portfolio-grid-entry-wrapper'>
                <div 
                  key={project.id} 
                  className="portfolio-grid-entry" 
                  style={{backgroundImage: windowWidth > minToChangeImage? `url(${project.smallImgUrl})` : `url(${project.imgUrl})`}}
                  >

                  {project.videoUrl ? <Video videoUrl={project.videoUrl} /> : ''}

                  <button className="portfolio-grid-btn full-project noSelect" >
                    <span className="portfolio-grid-project-title body-text-large">{project.title}</span>
                    <br/>
                    {
                      project.id === 'tdb-companies-graph' ? 
                      <Link to={`/portfolio/${project.id}`} ><span className="border-button full-project-btn noSelect">about</span> </Link>
                      : project.hasPage ? 
                      <span 
                        className="border-button full-project-btn noSelect" 
                        onClick={() => setSelectedProject(project)}>
                          about
                      </span> 
                      : 
                      <a href={project.websiteUrl} target="_blank" className="noSelect">
                        <span className="border-button full-project-btn noSelect">view</span>
                      </a>
                    }                
                  </button>
                </div>            
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

export default SideProjects;