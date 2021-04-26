import React from "react";
import "./Writing.css";
import HomeLink from "../../../Reusable/HomeLink/HomeLink";
import WritingTopText from "./WritingTopText";
import WritingsContainer from "./WritingsContainer";
import BlogPreview from "./BlogPreview";
import Footer from "../../Footer/Footer";
import blogData from "../data/blogData";


const Writing = ({ windowWidth, windowHeight }) => {
  return (
    <>
    <section id="writing__page-container" >
      {/*<h1 style={{position: 'fixed', top: '0'}}>{windowWidth}</h1>*/}
      <HomeLink color="#B8B8B8" />  
      <div id="writing__content-container">          
        <WritingTopText />
        <WritingsContainer>
          {
            blogData.map(individualPost => (
              <BlogPreview post={individualPost}/>
            ))
          }
        </WritingsContainer>
      </div>
      <Footer colorCustom="#423E42" backgroundColorCustom="#151315" />
    </section>
    </>

  )
};

export default Writing;