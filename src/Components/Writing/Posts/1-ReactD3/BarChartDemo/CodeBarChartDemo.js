import BarChartDemo from "./BarChartDemo";
import TextBarChartDemo from "./TextBarChartDemo";
import CodeBlockLight from "../Resusable/CodeBlockLight";
import "./BarChartDemo.css";


const CodeBarChartDemo = () => {
  const codeString = `const BarChartDemo = () => {
  const [data, setData] = useState([30, 50, 80, 90, 20])
      
  // define your scales
  const xScale = d3.scaleBand()
    .domain(data.map((d, i) => i))
    .range([0, width - margin.left - margin.right])
    .padding(0.05)
  const colourScale = d3.scaleOrdinal()
    .domain(data.map((d, i) => i))
    .range([
      '#f72585', '#b5179e', '#7209b7', 
    '#560bad', '#480ca8', '#3f37c9','#4895ef'
  ])
  
  // define and call d3 axis using a ref
  const xAxisRef = useRef();
  useEffect(() => {
    const xAxis = g => g
      .attr("transform", \`translate(\${0}, \${height-margin.bottom})\`)
      .call(d3.axisBottom(xScale))
      .call(d => d.select(".domain").remove())
    // select the ref to the axis g element and call axis in there
    d3.select(xAxisRef.current).call(xAxis)
  }, [data])
  
  return (
    <div className="wrapper">
      <svg width={width} height={height}>
        <g transform={\`translate(\${margin.left},\${margin.top})\`}>
          {data.map((d, i) => (
            <rect
              key={i}
              x={xScale(i)}
              y={height - margin.bottom - d}
              width={xScale.bandwidth()}
              height={d}
              fill={colourScale(i)}
            />
          ))}
          <g ref={xAxisRef}></g>
        </g>
      </svg>
    </div>
    )
  };
`

  return (
    <div className="post-template__two-col-container">
      <div className="post-template__two-col-left">
        <CodeBlockLight codeString={codeString}/>
      </div>
      <div className="post-template__two-col-right">
        <BarChartDemo />
        <br />
        <TextBarChartDemo />
      </div>
    </div>
  );
};

export default CodeBarChartDemo;


