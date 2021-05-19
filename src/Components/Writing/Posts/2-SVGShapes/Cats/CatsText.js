import React from "react";


const CatsText = () => {
  return (
    <div>
      <div>
       Have a look at the complete code here <a href="https://codesandbox.io/s/react-bar-chart-demo-bnht8" target="_blank" className="post__link">[code sandbox]</a>
      </div>
      <br />
      <ul className="post__list-in-body">
        <li>
        <span className="post__highlighted-text">Split the SVG path into manageable chunks</span> - Here 
        we only have ~10 constituent paths that make up the cat shape. Note that simple SVGs you find on the internet 
        won't always be made up of paths only, but you can apply the same principle to circles, squares, etc. 
        You first find the parts and isolate them. Then you can put them in a variable in a way that makes sense to you. 
        Here I put them in an array 
        where <span className="post__emph-text">each part (path) is an object with the path's d-attribute and the fill</span>. The 
        benefit of this 
        is that if we wanted to, we could also easily change the colours that make up the cat. Give it red eyes, pink eyes, green eyes, rainbow fur.. 
        </li>
        <li>
          <span className="post__highlighted-text">Add one group for each cat</span>. Note that our <code className="code">data</code> variable here is just a simple 
          array of numbers, with length = number of cats. We now have as many groups as we have elements (cats), and are ready to 'fill' the groups with the 
          elements we need to construct each cat - i.e. the <code className="code">catPaths</code>. 
        </li>
        <li>
          <span className="post__highlighted-text">Create the shapes for each cat.</span>. The final step is to add all the cat-drawing information that we stored in 
          the <code className="code">catPaths</code> array inside each of the cat groups. We do this by adding a path for each element in the array, setting 
          its d attribute to the corresponding path (<code className="code">attr("d", d =&gt; d.path)</code>), and its fill to the 
          fill (<code className="code">attr("fill", d =&gt; d.fill)</code>). And that's it! We can now position our cats in space in any way we like. 
          Here we have used another force layout for simplicity. 
        </li>
      </ul>
    </div>
  )
};

export default CatsText;