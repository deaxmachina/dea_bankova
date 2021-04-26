import CodeBlockLight from "../Resusable/CodeBlockLight";
import BarChartUseEffectDemo from "./BarChartUseEffectDemo";
import TextBarChartUseEffectDemo from "./TextBarChartUseEffectDemo";
import "./BarChartUseEffectDemo.css";


const CodeBarChartUseEffectDemo = () => {
  const codeString = `const BarChartUseEffectDemo = () => {
    // --- same as above --- 
    const [data, setData] = useState([30, 50, 80, 90, 20]) 
      
    // define your scales --- omitted; same as above ---
  
    // refs 
    const gRef = useRef();
    const xAxisRef = useRef();
  
    // D3 code
    useEffect(() => {
      if (!data) {return}

      // select group for the bar chart 
      const g = d3.select(gRef.current)
      // attach the bars 
      const bars = g.selectAll(".bar")
        .data(data)
        .join("rect")
        .classed("bar", true)
        .attr("x", (d, i) => xScale(i))
        .attr("width", xScale.bandwidth())
        .attr("y", d => height - margin.bottom)
        .attr("height", 0)
        .style("fill", "#fff")
        .transition().duration(1000)
          .attr("y", d => height - margin.bottom - d)
          .attr("height", d => d)
          .style("fill", (d, i) => colourScale(i))
  
      // define and call axes --- omitted; same as above ---
  
    }, [data])

    return (
      <div className="wrapper">
        <svg width={width} height={height}>
          <g 
            transform={\`translate(\${margin.left},\${margin.top})\`} 
            ref={gRef}
          >
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
        <BarChartUseEffectDemo />
        <TextBarChartUseEffectDemo />
      </div>
    </div>
  );
};




export default CodeBarChartUseEffectDemo;