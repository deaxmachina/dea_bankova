import React from "react";

const TextBrushDemo = () => {
  return (
    <div>
    <ul className="post__list-in-body">
      <li>
        <span className="post__highlighted-text">Create on orchestrating component</span> <code className="code">BrushDemo</code>, 
        which is responsible for managing data and state and 
        passing these into the respecitve props of components. 
      </li>
      <li>
      <span className="post__highlighted-text">Create one component for the circle which we want to display bigger on top upon brushing</span> <code className="code">DisplayComponent</code> . 
        Create one component, <code className="code">BrushableComponent</code> for the graph that can be brushed. 
        Note that we put the brush code itself in this component as well, but if you want to make your code even more 
        modular and neat, you can isolate the brush into its own component as well. 
      </li>
      <li>
        We use state <code className="code">const [selectedIndex, setSelectedIndex] = useState(0)</code> to <span className="post__highlighted-text">manage keep track of which element has been brushed</span> in
        the <code>BrushableComponent</code>, so that we can pass this information to <code>DisplayComponent</code>
        which can in turn update the selected circle. 
        For <code className="code">BrushableComponent</code>, we pass the setter <code className="code">setSelectedIndex</code> as a prop because we want to pass 
        the index of the selected circle in this component through the use of d3-brush. 
        For <code className="code">DisplayComponent</code>, we pass the actual value <code className="code">selectedIndex</code> as a prop, so as to display the 
        corretly selected circle after the brush has been triggered (ended). 
      </li>
      <li>We also <span className="post__highlighted-text">pass other props to both components as needed,</span> for example in this case, colour scales.</li>
    </ul>
    </div>
  )
};

export default TextBrushDemo;