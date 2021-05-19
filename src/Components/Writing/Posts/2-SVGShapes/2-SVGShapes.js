import React, { useState, useLayoutEffect } from 'react';
import PostTemplate from "../PostTemplate/PostTemplate";
import Arrow from "../../../../Reusable/Arrow/Arrow";
import Introduction from "./Introduction/Introduction";
import Cookies from "./Cookies/Cookies";
import Cats from "./Cats/Cats";
import Section1Start from "./Sections/Section1Start";
import Section2Start from "./Sections/Section2Start";
import Section2End from "./Sections/Section2End";
import "./SVGShapes.css";

// For responsive graphs
function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}


const PostSVGShapes = () => {

  const [windowWidth, windowHeight] = useWindowSize();

  return (
    <PostTemplate id="svg-shapes">
      <Introduction />
      <Section1Start />
      <Cookies windowWidth={windowWidth}/>
      <Section2Start />
      <Cats windowWidth={windowWidth}/>
      <Section2End />
      <Arrow linkto="/writing/svg-shapes"/>
    </PostTemplate>  
  )
};

export default PostSVGShapes;