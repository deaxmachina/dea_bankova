import React from "react";
import HeroPage from "../HeroPage/HeroPage";
import PortfolioShowcase from "../PortfolioShowcase/PortfolioShowcase";
import Contact from "../ContactPage/Contact";
import Footer from "../Footer/Footer";
import Arrow from "../../Reusable/Arrow/Arrow";


const FrontPage = ({ windowWidth, windowHeight }) => {
  return (
    <>
      <HeroPage windowWidth={windowWidth} windowHeight={windowHeight}/>
      {/* <PortfolioShowcase windowWidth={windowWidth} windowHeight={windowHeight}/> */}
      <Contact />
      <Footer colorCustom="#423E42" backgroundColorCustom="#141115" />
      <Arrow linkto="/"/>
    </>
  )  
};

export default FrontPage;