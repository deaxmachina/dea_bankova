import React from "react";

const TextForceDemo = () => {
  return (
    <div>
      <div>
       Have a look at the complete code here <a href="https://codesandbox.io/s/react-d3force-demo-wqhci" target="_blank" className="post__link">[code sandbox]</a>.
       <br />
       Below I assume that you know what a d3-force graph is and how to implement one, but if that's not the case, here is one of the resources 
       I used when I was first learning about these: <a href="https://observablehq.com/@d3/force-directed-graph" target="_blank" className="post__link">Observable notebook</a> by
       Mike Bostock. Note that you can also search for 'force' in Observable and you will get many wonderful resources. This of course applies to any other graph type. 
      </div>
      <br />
      <ul className="post__list-in-body">
        <li>
          <span className="post__highlighted-text">Store the graph nodes</span> as you would for any other data in a React  
          state <code className="code">const [nodes, setNodes] = useState(null);</code>
        </li>
        <li>
          <span className="post__highlighted-text">Get D3 and React to talk to each other</span> via useRef and useEffect. 
          Define a reference to the group element containing your D3 graph like
          so <code className="code">const gRef = useRef();</code> and don't forget to include the ref as an attr of the element 
          itself <code className="code">&lt;g ref=&#123;gRef&#125;&gt;&lt;/g&gt;</code> and then select the group element 
          inside <code className="code">useEffect</code> like so <code className="code">const g = d3.select(gRef.current)</code>
        </li>
        <li>
          <span className="post__highlighted-text">Write all D3 code to define your d3-force graph inside the useEffect</span> and 
           make sure to include all the data, i.e. in this case the nodes, in the array of dependencies 
          of the <code className="code">useEffect</code> at the end. This will make sure the code is ran and the DOM updated 
          each time the data changes, such as with the use of the random button in here. 
        </li>
      </ul>
    </div>
  )
};

export default TextForceDemo;