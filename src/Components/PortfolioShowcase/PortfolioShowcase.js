import React from 'react';
import PortfolioShowcasePanelLeft from "./PortfolioShowcasePanelLeft";
import PortfolioShowcasePanelRight from "./PortfolioShowcasePanelRight";
import PortfolioShowcaseTitle from "./PortfolioShowcaseTitle";
import PortfolioShowcaseSeeMoreSeeMore from "./PortfolioShowcaseSeeMore";
import projectsMetadata from "../../data/projectsMetadata";
import "./PortfolioShowcase.css";

// get the subset of projects in the showcase 
// const showcaseIDs = ['kanji-radicals', 'i-dont-like-you', 'anime-timeline', 'japanese-earthquakes', 'iwate-archive', 'co2-emissions', 'olympics-museum']
// const projectsMetadataShowcase = projectsMetadata.filter(project => showcaseIDs.includes(project.id))

const [infinity] = projectsMetadata.filter(project => project.id === 'infinity')
const [quantumCryptography] = projectsMetadata.filter(project => project.id === 'quantum-cryptography')
const [kanjiRadicals] = projectsMetadata.filter(project => project.id === 'kanji-radicals')
const [iDontLikeYou] = projectsMetadata.filter(project => project.id === 'i-dont-like-you')
const [animeTimeline] = projectsMetadata.filter(project => project.id === 'anime-timeline')
const [co2Emissions] = projectsMetadata.filter(project => project.id === 'co2-emissions')



const PortfolioShowcase = ({ windowWidth, windowHeight }) => {
  return (
    <section id="portfolio-showcase-section">
      <PortfolioShowcaseTitle />
      <PortfolioShowcasePanelLeft 
        project={infinity}
        windowWidth={windowWidth}
      />
      <PortfolioShowcasePanelRight 
        project={quantumCryptography}
        windowWidth={windowWidth}
      />
      <PortfolioShowcasePanelLeft 
        project={kanjiRadicals}
        windowWidth={windowWidth}
      />
      <PortfolioShowcasePanelRight 
        project={animeTimeline}
        windowWidth={windowWidth}
      />
      <PortfolioShowcaseSeeMoreSeeMore />
    </section>
  )
};

export default PortfolioShowcase;