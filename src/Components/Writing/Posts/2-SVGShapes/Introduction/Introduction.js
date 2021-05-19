import React from "react";


const Introduction = () => {
  return (
    <>
      <div className="post-template__title-text large-text">
        Using SVG shapes to enhance your D3 visualisations
      </div>
      <p className="post-template__date">May 2021</p>
      <div className="post-template__single-col-wrapper">
        <p className="post-template__single-col-para">

        <div className="spiral-img"></div>
        I recently completed 
        a <a href="https://lifetimeofwords.netlify.app/" className="post__link" target="_blank">personal mini-project</a> to
        learn scrollytelling with GSAP. 
        I chose a fun topic, and since I aimed to make the visualisation itself fun to look at, I decided that instead of using 
        standard shapes like circles and rectangles to represent my datapoints, I should use SVG shapes with some meaning. 
        The project was about measuring the number of words we say in terms of Harry Potter books, so
        I picked a book-shaped SVG to arrange in a spiral (which itself is supposed to resemble the rings of a 
        tree, reinforcing the ‘book vibes’). 
        (The image above is of one of the 
        iterations - the little squares are actually SVG book shapes 📖). 
        <br/><br/>
        It was surprisingly easy to achieve that, and I didn’t even need to write any complicated SVG paths myself. 
        All I had to do was <span className="post__emph-text">find an svg shape that I liked on flaticon and import this into my code</span>. 
        This is perfect if you’re not an SVG guru but would like to add some fun, context or personality to your D3 visualisation. 
        You can 
        use <a href="https://fontawesome.com/" className="post__link" target="_blank">Font Awesome</a>, <a href="https://www.flaticon.com/" className="post__link" target="_blank">flaticon</a>, or 
        any other appropriate SVG shapes that you find. Just make sure to give attribution if you’re using free SVG shapes. 
        Let’s have a look at how you can do this with the use of a couple of simple examples.  
        </p>
      </div>
    </>
  )
};

export default Introduction;