//import SyntaxHighlighter from 'react-syntax-highlighter';
import CodeBlockLight from "../Resusable/CodeBlockLight";
import BrushDemo from "./BrushDemo";
import TextBrushDemo from "./TextBrushDemo";
import "./BrushDemo.css";


const CodeBrushDemo = () => {
  const codeStringFirst = `const BrushableComponent = ({ 
    data, circlesScale, colorScale, setSelectedIndex 
  }) => {
  
    const circlesRef = useRef();
    const brushRef = useRef();
  
    useEffect(() => {
      const circlesG = d3.select(circlesRef.current)
  
      /// Circles graph ///
      const circlesGraphBackground = circlesG
        .selectAll(".background-rect")
        .data([0])
        .join("rect")
        .classed("background-rect", true)
          .attr("width", width)
          .attr("y", 100)
          .attr("height", 100)
          .attr("fill", "#eee")
  
      const circlesGraph = circlesG
        .selectAll(".circle")
        .data(data)
        .join("circle")
          .classed("circle", true)
          .attr("r", d => d.value)
          .attr("cx", d => circlesScale(d.name))
          .attr("cy", 150)
          .style("fill", d => colorScale(d.value))
          .style("stroke", d => colorScale(d.value))
          .style("stroke-width", 3)
          .style("fill-opacity", 0.8)
  
      /// Brush ///
        const defaultExtent = [[0, 100], [30, 200]]
        const brush = d3.brush()
          .extent([[0, 100], [width, 200]])
          .on('brush end', (event) => {
          const selectedElementIndex = Math.floor((
            event.selection[0][0] / circlesScale.step()
            ));
          setSelectedIndex(selectedElementIndex)
        });
        d3.select(brushRef.current)
          .call(brush)
          .call(brush.move, defaultExtent)
    }, [])
  
    return (
      <>
        <g ref={circlesRef}></g>
        <g ref={brushRef}></g>
      </>
    )
  }
`

const codeStringSecond = `const DisplayComponent = ({ 
  data, colorScale, selectedIndex 
}) => {

  const bigCircleRef = useRef();

  useEffect(() => {
    const bigCircleG = d3.select(bigCircleRef.current)

    /// Big Circle graph //
    const bigCircle = bigCircleG
      .selectAll(".big-circle")
      .data([0])
      .join("circle")
      .classed("big-circle", true)
        .attr("r", 40)
        .attr("cx", width/2)
        .attr("cy", 50)
        .style("fill", d => colorScale(data[selectedIndex].value))
        .style("stroke", d => colorScale(data[selectedIndex].value))
        .style("stroke-width", 3)
        .style("fill-opacity", 0.8)
  }, [data, selectedIndex])

  return (
    <g ref={bigCircleRef}></g>
  )
}
`

const codeStringThird = `const BrushDemo = () => {
  const [data, setData] = useState(dummyData) 
  const [selectedIndex, setSelectedIndex] = useState(0); 

  if (!data) {return}

  // Scales 
  const circlesScale = d3.scaleBand()
    .domain(data.map(d => d.name))
    .range([10, width-10])
    .padding(0.2)
  const colorScale = chroma.scale(['#f72585', '#4895ef']
    .map(color => chroma(color).saturate(0)))
    .domain([1, 30]) 

  return (
    <>
      <div className="wrapper">
        <svg width={width} height={height}>
          <g>
            <DisplayComponent 
              data={data} 
              colorScale={colorScale} 
              selectedIndex={selectedIndex}
            />
            <BrushableComponent 
              data={data} 
              circlesScale={circlesScale} 
              colorScale={colorScale} 
              setSelectedIndex={setSelectedIndex}
            />
          </g>
        </svg>
      </div>

    </>
  )
};`

  return (
    <div>

      <div className="post-template__single-col-wrapper">
        <p className="post-template__single-col-para">
        Similar to the the d3-force example above, d3-brush is one of those parts of the D3 API, which 
        is hard to use imperatively with React only. However, it is perfectly possible to write code for the rest of your 
        visualistion the React way, and then only make a reference for the brush inside a group element, which 
        you then access in the <code className="code">useEffect</code> through <code className="code">useRef</code>. 
        Below, we consider an example written entriely in the useEffect 
        way. This time, however, as the code is slighly more complex than the previous examples, we'll take it as an opportunity 
        to use React components to split the different parts of the visualisations. Our strategy is as follows: 
        </p>
       </div>

    <div className="post-template__two-col-container">
      <div className="post-template__two-col-left">
        <CodeBlockLight codeString={codeStringThird}/>
      </div>
      <div className="post-template__two-col-right">
        <BrushDemo />
        <br></br>
        <br></br>
        <TextBrushDemo />
      </div>
    </div>



    </div>

  );
};

export default CodeBrushDemo;