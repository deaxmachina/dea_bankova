import React from "react";

const TextBarChartUseEffectDemo = () => {
  return (
    <div>
      <div>
       Have a look at the complete code here <a href="https://codesandbox.io/s/react-barchart-useeffect-demo-d9w0t" target="_blank" className="post__link">[code sandbox]</a>
      </div>
      <br />

      We first note that the following bits are the same as before: 
      defining data in state, our scales definition, and creating our svg and inside group g element 
      in the render function of this React component. 
      The differences are: 
      <ul className="post__list-in-body">
        <li>
          <span className="post__highlighted-text">All of our graph code is now stored in a useEffect.</span> Its 
          array of dependencies includes <code className="code">data</code>, meaning that the code inside will execute, and the component will re-render,
          each time the data changes. In our case this happens on click of a "random" button (see pen for button implementation).
        </li>
        <li>
        <span className="post__highlighted-text">The code inside the useEffect is pure D3 code</span>, but instead of tapping into an element 
          the usual D3 JS way i.e. directly selecting a reference to the element by class or id, 
          we make use of a React reference to the raw DOM element <code className="code">useRef</code>. 
          The general strategy for this is like before: 
          <ul className="post__list-in-body">
            <li>Choose element we want to select - the group element inside the svg here.</li>
            <li>Create a ref to it and assign it to a variable, e.g. <code className="code">const gRef = useRef();</code></li>
            <li>Put that reference in the <code className="code">ref</code> attribute of the element.</li>
          </ul>
        </li>
        <li>
          Note that if you decide to create a single reference, e.g. 
          to the top level group element or the entire svg and then use d3's <code className="code">append</code> inside the <code className="code">useEffect</code> to append to it,
          it will work, but if you update the data, the same element will get appended over and over again, instead of being updated. 
          I either make a new ref for the group elements that I want to use, such as in this case 
          a ref for the bar chart and one for the axis, 
          or <span className="post__emph-text">don't use <code className="code">append</code> but instead use <code className="code">selectAll-data-join</code></span> even
          if appending a single element. 
        </li>
        <li>
        <span className="post__highlighted-text">Note the use of transition</span> <code className="code">transition().duration(1000)</code> , just as you normally would with D3. 
          If you wanted to implement the same using the approach above, you might need to use an external library such as GSAP or 
          define your own transition. In some cases, you might be able to achieve it with CSS instead. This particular example is relatively 
          straightforward but there are cases when it's not. 
        </li>
      </ul>
    </div>
  )
};

export default TextBarChartUseEffectDemo;