import React from "react";
import HeroPage from "../HeroPage/HeroPage";
import PortfolioShowcase from "../PortfolioShowcase/PortfolioShowcase";
import Contact from "../ContactPage/Contact";
import Footer from "../Footer/Footer";
import Arrow from "../../Reusable/Arrow/Arrow";


const FrontPage = ({ windowWidth, windowHeight }) => {
  return (
    <>
      {/*<h1 style={{position: 'fixed', top: '0'}}>{windowWidth}</h1>*/}
      <HeroPage windowWidth={windowWidth} windowHeight={windowHeight}/>
      <PortfolioShowcase windowWidth={windowWidth} windowHeight={windowHeight}/>
      <Contact />
      <Footer colorCustom="#423E42" backgroundColorCustom="#151315" />
      <Arrow />
    </>
  )  
};

export default FrontPage;