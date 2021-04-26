import React from 'react';
import PostTemplate from "../PostTemplate/PostTemplate";
import { Header, Summary } from "./Summary/Sumarry";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import TableOfContents from "./TableOfContent/TableOfContent";
import Arrow from "../../../../Reusable/Arrow/Arrow";


const PostReactD3 = () => {
  return (
    <PostTemplate id="react-d3-tutorial">
      <Header />
      <Summary />
      <TableOfContents />
      <Section1 />
      <Section2 />
      <Arrow linkto="/writing/d3-react-start"/>
    </PostTemplate>  
  )
};

export default PostReactD3;