import React from "react";
import { useState } from 'react'
import "./PortfolioFull.css";
import Glow from "../../Reusable/glow";
import SideProjects from './SideProjects'
import Work from "./Work";
// import AllProjects from "./AllProjects";
import AllProjects from "./AllProjectsWithText";
import ObservableLink from "./Observable";
import HomeLink from "../../Reusable/HomeLink/HomeLink";
import Footer from "../Footer/Footer";
import projectsMetadata from "../../data/projectsMetadata";

const PortfolioFull = ({ windowWidth }) => {
  const [selectedProject, setSelectedProject] = useState(null)
  return (
    <div id="portfolio-container-background">
      <section id="portfolio-container">
        <Glow />
        <HomeLink />
        <AllProjects 
          projectsMetadata={projectsMetadata} 
          sectionTitle='Portfolio' 
          sectionSubtitle=''
          windowWidth={windowWidth} 
          selectedProject={selectedProject} 
          setSelectedProject={setSelectedProject}
        />

        <ObservableLink windowWidth={windowWidth}/>
      </section>
      <Footer colorCustom="#EBEBEB" backgroundColorCustom="#CCCCCC" />
    </div>

  )
};

export default PortfolioFull;