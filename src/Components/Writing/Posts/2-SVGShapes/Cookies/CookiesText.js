import React from "react";


const CookiesText = () => {
  return (
    <>
      The SVG path (omitted here as it takes up a lot of space) for our cookies can be defined in a 
      variable <code class="code">cookiePath</code>, which we call later. If the length of the whole path 
      bothers you, you can put it in a separate file and import it. All we need to do after that
      is <span className="post__highlighted-text">append a path for each data point and set its d attribute to this path.</span> The
      only thing that is tricky with this approach is that the path string is usually very complicated and therefore 
      directly editing parts of it to scale your SVG appropriately is hard. 
      
      I find that using a <span className="post__emph-text">scale transform</span>, playing around with the 
      values until you get the shape to be as big as you need it works well. You'd have to do this again for 
      mobile if you need to shrink your whole graph, but it shouldn't be more than a couple of minutes' worth of manual work. 

      Note that here we're using a force which translates the centre of the shapes, so you need to tack 
      the <span className="post__emph-text">scale transform onto the translate </span> (before) 
      as well, otherwise you will end up over-writing the transform attr. 
    </>
  )
};

export default CookiesText;