import React from "react";
import "./PortfolioFull.css";
import Glow from "../../Reusable/glow";
import PortfolioFullProjects from "./PortfolioFullProjects";
import PortfolioFullIndividualViz from "./PortfolioFullIndividualViz";
import HomeLink from "../../Reusable/HomeLink";

const PortfolioFull = ({ windowWidth }) => {
  return (
    <div id="portfolio-container-background">
      <section id="portfolio-container">
        <Glow />
        <HomeLink />
        <PortfolioFullProjects windowWidth={windowWidth}/>
        <PortfolioFullIndividualViz windowWidth={windowWidth} />
      </section>
    </div>

  )
};

export default PortfolioFull;