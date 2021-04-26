//import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneLight, hopscotch } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark as dark, prism, xonokai } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./ForceDemo.css";

import ForceDemo from "./ForceDemo";
import TextForceDemo from "./TextForceDemo";


const CodeForceDemo = () => {
  const codeString = `const ForceDemo = () => {
    const gRef = useRef();
  
    const [nodes, setNodes] = useState(null);
  
    // helper function - get random data
    const getRandomData = () => {
      const nodes = Array.from({length: _.random(30, 200)}, 
      (j, i) => ({
        id: Math.random(),
        r: getRandomInt(minRadius, maxRadius+1),
        color: "maroon"
      }));
      setNodes([...nodes])
    }
  
    // data load 
    useEffect(() => {
      setNodes(getRandomData)
    }, []);
  
    // colour scale 
    const colorScale = chroma.scale(['#f72585', '#4895ef'])
      .domain([minRadius, maxRadius]) 
  
    /// D3 Code ///
    useEffect(() => {
      if (!nodes) { return }
  
      const g = d3.select(gRef.current)
      // add a circle surrouding the whole force graph 
      const circle = g.append("circle")
          .attr("r", 150)
          .attr("fill", "#eee")
  
      // add all the cirlces as nodes 
      const node = g  
        .selectAll(".circle")
        .data(nodes, d => d)
        .join("circle")
        .classed("circle", true)
          .attr("r", d => d.r) 
          .attr("fill", d => colorScale(d.r))
          .attr("stroke", d => colorScale(d.r))
          .attr("stroke-opacity", 0.35)
          .attr("stroke-width", 3)
  
      // add the force simulation
      function tick() { 
        node.attr("cx", d => d.x).attr("cy", d => d.y); 
      }
      const simulation = d3.forceSimulation(nodes)
        .on("tick", tick)
        .force("collide", d3.forceCollide().radius(d => d.r + 1))
        .force('radial', d3.forceRadial(1))
  
    }, [nodes]);
  
    return (
      <div className="wrapper"> 
        <svg width={width} height={height}>
          <g ref={gRef}></g>
        </svg>
      </div>
    )
  };`

  return (
    <div>

      <div className="post-template__two-col-container" style={{marginBottom: "10px"}}>
        <div className="post-template__two-col-left">
          <ForceDemo />
        </div>
        <div className="post-template__two-col-right" style={{marginTop: "30px"}}>
            I wanted to give a simple example using <a href="https://github.com/d3/d3-force" target="_blank" className="post__link">d3-force</a> with React, 
            as it is something I don't often see mentioned in tutorials, but a part of D3 that I love to (over)use. 
            Unlike D3 transitions, animations and axes, d3-force 
            s one of those integral parts of D3 that I have not seen implemented in pure React in a straightforwad way
            thusfar. However, you can find libraries such as <a href="https://github.com/uber/react-vis-force" target="_blank" className="post__link">this one</a> by Uber which 
            would allow you in limited cases to construct a d3-force graph using the declarative React way via the use of a ready-made graph component. 
            Let's have a look at <span className="post__emph-text">a simple way to port a d3-force graph inside a React component</span>. 
            The flow is actually the same as with the bar chart,
            which means that once you get the hang of this method, you can port any existing code into React this way.
        </div>
      </div>

    <div className="post-template__two-col-container">
      <div className="post-template__two-col-left">
        <SyntaxHighlighter 
          customStyle={{fontSize: '14px', background: '#eee', height: '500px'}}
          language="jsx"
          style={prism} 
          showLineNumbers={false} 
          wrapLines={true}
          lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
      <div className="post-template__two-col-right">
        <TextForceDemo />
      </div>
    </div>
    </div>


  );
};



export default CodeForceDemo;