import React from "react";

const Section2Start = () => {
  return (
    <div className="post-template__single-col-wrapper">

      <div className="post-template__title-container">
        <div className="post-template__section-title-text">
           Complex SVGs
        </div>
      </div>

        <p className="post-template__single-col-para">
          If you want to import a more complex SVG shape, i.e. one that is not made of a single path or other basic shape, all you need 
          to do is to identify the parts that make up the shape, split them, store them in a nice way (an array that we can loop over with D3), 
          and finally append them all inside a group so they stay together. 
          If you want to use a very complex SVG shape, with maybe dozens or hundreds of parts, this approach won't scale well, but for any 
          simple shape you'd like to import from somewhere like flaticon, it is actually quite straightforward! 
          <br/><br/>
          Let's have a look at an example. Since I love cats 🐈‍⬛, I decided to pick a medium-complexity cat path from flaticon, namely 
          this <a href="https://www.flaticon.com/free-icon/black-cat_3504465" className="post__link" target="_blank">beautiful creature</a> by <a className="post__link" target="_blank"  href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a>. Our
          approach is the same as before. 
          First, download the SVG, then open in your browser (here Chrome), and click on <span className="post__emph-text">"View Page Source"</span>. 
          What you see should look something like this:

          <div className="cat-path-img"></div>
          
          This is not very pretty. But if you import it into your JavaScript code and do 
          a <span className="post__emph-text">search in your code editor for "path"</span>, you 
          can start isolating the constituent paths that make up the shape. I first put them all on new lines 
          to make sure I don't miss something, as these path string tend to be long and messy. Then all you need to do 
          is <span className="post__emph-text">put these in an array and use them to re-draw the cat </span>in 
          the appropriate scale with D3.

          <br/><br/>
          Let's have a look at the code. 
        </p>
    </div>
  )
};

export default Section2Start;