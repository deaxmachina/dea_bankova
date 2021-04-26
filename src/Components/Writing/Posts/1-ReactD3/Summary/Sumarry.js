import React from "react";

const Header = () => {
  return (
    <>
      <div className="post-template__title-text large-text">Getting started with D3.js in React</div>
      <p className="post-template__date">Apr 2021</p>
    </>
  )
}

const Summary = () => {
  return (
    <>
      <div className="post-template__single-col-wrapper">
        <p className="post-template__single-col-para">
            I recently completed a 100 Days of Code challenge with React and D3 (
            <a className="post__link" href="https://github.com/deaxmachina/100daysD3" target="_blank">code</a> / <a className="post__link" href="https://100daysd3.netlify.app/" target="_blank">website</a> 
            ), and I wanted to <span className="post__emph-text">share my thoughts on the two main approaches for combining these frameworks</span>.
            I will go in depth into a couple of examples, focusing specifically on the approach which I have tended to prefer, which uses the useEffect 
            and useRef React hooks to access the DOM. 
            <br />
            <br />
            This post assumes some basic knowledge of both D3 and React, but is not geared towards experts. If you 
            are new to D3, I highly recommend Curran Kelleher’s <a className="post__link" href="https://curran.github.io/dataviz-course-2018/" target="_blank">Dataviz 2018 course</a> or 
            Shirley Wu’s Frontend Master’s <a className="post__link" href="https://frontendmasters.com/courses/d3/" target="_blank">Introduction to D3 course</a>
            <br />  
            <br />
            I use <span className="post__emph-text">React version 17 (17.0.1)</span> and <span className="post__emph-text">D3 version 6 (6.6.0).</span> The React parts use functional components, 
            and the D3 ones the <a className="post__link" href="https://observablehq.com/@d3/selection-join" target="_blank">new-ish join API</a>. 
            I also make use of two very popular libraries chroma-js (v2.1.1) and lodash (v4.17.21).
        </p>
      </div>
    </>
  )
};

export { Header, Summary }