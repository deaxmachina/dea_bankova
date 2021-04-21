import React from "react";

const TextBrushDemo = () => {
  return (
    <div className="demo-text">
      <div className="pen-link">Have a look at the complete code here [pen link]. </div>
    <ul>
      <li>
        <span className="highlight">Create on orchestrating component</span>
         (here <code>BrushDemo</code>), which is responsible for managing data and state and 
        passing these into the respecitve props of components. 
      </li>
      <li>
        Create one component, <code>DisplayComponent</code> for the circle which we want to display bigger on top upon brushing. 
        Create one component, <code>BrushableComponent</code> for the graph that can be brushed. 
        Note that we put the brush code itself in this component as well, but if you want to make your code even more 
        modular and neat, you can isolate the brush into its own component as well. 
      </li>
      <li>
        We use state <code>const [selectedIndex, setSelectedIndex] = useState(0)</code> to manage keep track of which element 
        has been brushed in the <code>BrushableComponent</code>, so that we can pass this information to <code>DisplayComponent</code>
        which can in turn update the selected circle. 
        For <code>BrushableComponent</code>, we pass the setter <code>setSelectedIndex</code> as a prop because we want to pass 
        the index of the selected circle in this component through the use of d3-brush. 
        For <code>DisplayComponent</code>, we pass the actual value <code>selectedIndex</code> as a prop, so as to display the 
        corretly selected circle after the brush has been triggered (ended). 
      </li>
      <li>We also pass other props to both components as needed, for example in this case, colour scales.</li>
    </ul>
    The code for the two components is somewhat lengthy, so I decided to post of all it to [here] and share that way. 
    </div>

  )
};

export default TextBrushDemo;