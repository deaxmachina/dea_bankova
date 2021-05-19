import React from 'react';
import PostTemplate from "../PostTemplate/PostTemplate";
import Arrow from "../../../../Reusable/Arrow/Arrow";
import Introduction from "./Introduction/Introduction";
import Cookies from "./Cookies/Cookies";
import Scatter from "./Scatter/Scatter";


const PostSVGShapes = () => {
  return (
    <PostTemplate id="svg-shapes">
      <Introduction />
      <Cookies />
      <Scatter />
      <Arrow linkto="/writing/svg-shapes"/>
    </PostTemplate>  
  )
};

export default PostSVGShapes;