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
      <HomeLink color="#ebebeb" />  
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
      {/* this div that wraps the footer is just temp while there is only one post, so that 
      the footer can be pushed to the bottom of the page; height of the page is also set to min 100vh;
      remove this style when more posts appear
       */}
      <div style={{position: 'absolute', bottom: 0, left: 0, width: '100%'}}>
        <Footer colorCustom="#423E42" backgroundColorCustom="#151315" />
      </div>
      
    </section>
    </>

  )
};

export default Writing;