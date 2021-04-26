import React from "react";

const TextBarChartDemo = () => {
  return (
    <div>
      <div>
       Have a look at the complete code here <a href="https://codesandbox.io/s/react-bar-chart-demo-bnht8" target="_blank" className="post__link">[code sandbox]</a>
      </div>
      <br />
      <ul className="post__list-in-body">
        <li>
        <span className="post__highlighted-text"> Use React to render the rectangles</span> that make up the bar chart inside 
          the render function by looping over the data and rendering one element for each bar. 
        </li>
        <li>
          <span className="post__highlighted-text"> Use state to manage the data</span>, meaning that data is stored in state initially,
          and then on every subsequent update. See this in practice with the 'random' button. React will re-render everything depending on the data 
          each time that it changes. This includes the rects in the render function, and the axis code stored in the useEffect. 
        </li>
        <li>
          <span className="post__highlighted-text">Store the code for the axis in a useEffect side effect.</span> Before we can do this, we create a ref with a <code className="code">useRef</code> hook, which is a way to tap into the raw DOM element using React. 
          By setting <code className="code">const xAxisRef = useRef()</code> and passing this ref to a g element, 
           we can then tap into this g element inside the <code className="code">useEffect()</code> by invoking the <code className="code">current</code> method, i.e. <code className="code">xAxisRef.current</code>
        </li>
        <li>
          <span className="post__highlighted-text">Define scales - xScale and colourScale inside the component directly</span> if they depend on the data, and the data 
          will change or is otherwise stored in state. If your data is static and you don't need to store it in state, you can also put the code 
          for the scales or other data-dependent code outside of your component. This way, the scales computation will not run each time 
          the component loads. Note that another way to optimise code like so is to use a <code className="code">useMemo</code> hook and wrap the scales code inside of it. 
          If you're interested, have a look at the documentation for <code className="code">useMemo</code>.
        </li>
      </ul>
    </div>
  )
};

export default TextBarChartDemo;