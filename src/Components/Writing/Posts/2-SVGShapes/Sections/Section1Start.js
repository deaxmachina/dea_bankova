import React from "react";

const Section1Start = () => {
  return (
    <div className="post-template__single-col-wrapper">

      <div className="post-template__title-container">
        <div className="post-template__section-title-text">
           Simple SVGs
        </div>
      </div>

        <p className="post-template__single-col-para">
          Let's start by looking at a simple example, namely one where the SVG shape you've found or created consists of only one path. 
          We'll take 
          a <a href="https://www.flaticon.com/free-icon/cookie_629516" className="post__link" target="_blank">cookie shape</a> from 
          flaticon. This works the same way no matter where you got the SVG from, but I will describe this particular scenario in detail.
          <br /><br />
          <span className="post__highlighted-text">Step 1: Obtain the SVG</span> - The screenshot below is only relevant to flaticon. 
          To download an SVG from flaticon, simply click on the "svg" button and then select which type of download you want. 
          <div className="cookie-path-img"></div>
          <br />

          <span className="post__highlighted-text">Step 2: Open the SVG in a browser</span> - This is the easiest way to get the html code 
          behind the SVG. If you open the SVG in Chrome, you can click on "View Page Source"
          <div className="cookie-browser-img"></div>
          <br />

          <span className="post__highlighted-text">Step 3: Inspect and port the code for the SVG</span> - Once you've opened the page source, you should 
          see something like this: 
          <div className="cookie-source-img"></div>
          <br />

          There is a single svg tag wrapping the whole thing, and inside we have many nested group elements. 
          Don't worry about the nesting. This happens when you draw an SVG with a program like Adobe Illustrator and export it. 
          You don't actually need all of them. It seems like we have one single element drawn on the page, which is a very long path element. 
          Thus, we need at most one group element to wrap it. If you're not sure, simply copy the whole code including the svg tag into 
          an html file and play with deleting or modifying bits to see what happens. 
          Here, <span className="post__emph-text">we simply need the path - or rather, just the path's d attribute</span>. We 
          will store it in a variable and use D3 to draw as many cookies as we like, by appending multiple paths, all with
          this d attribute. 
          <div></div>

          <br/><br/>
          Let's have a look at the code. 
        </p>
    </div>
  )
};

export default Section1Start;