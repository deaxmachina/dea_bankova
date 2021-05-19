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
        I recently completed a personal mini-project to learn scrollytelling with GSAP. I chose a fun topic, 
        and since Iaimed to make the visualisation piece itself fun to look at, I decided that instead of using 
        boring standard shapes like circles and rectangles to represent my datapoints, I should use SVG shapes. 
        Since the project was about measuring the number of words we say in terms of Harry Potter books, 
        I picked book-shaped SVG to arrange in a spiral (which itself is supposed to resemble the rings of a 
        tree, reinforcing the ‘book vibes’). 
        <br/><br/>
        It was surprisingly easy to achieve that, and I didn’t even need to write any complicated SVG paths myself. All I had to do was find an svg shape that I liked on fontawesome and import this into my code. This is perfect if you’re not an svg guru but would like to add some fun or context or personality to your D3 visualisation. 
        You can use fontawesome, flaticon or any other appropriate SVG shapes that you find. Just make sure to give attribution if you’re using free SVG shapes . 
        Let’s have a look at how you can do this with the use of a couple of simple examples.  
        </p>
      </div>
    </>
  )
};

export default Introduction;