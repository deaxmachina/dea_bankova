import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneLight, hopscotch } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import BarChartTooltip from "./BarChartTooltip";
import TextBarChartTooltip from "./TextBarChartTooltip";
import "./BarChartTooltip.css";


const CodeBarChartTooltip = () => {
  const codeStringFirst = `useEffect(() => {
  // select group for the tooltip
  const tooltip = d3.select(tooltipRef.current)

  // events for the tooltip
  function onMouseEnter(event, datum) {
    // directly insert text into existing div using D3 
    tooltip.select(".tooltip-info").text(\`value: \${datum}\`) 
    };
  }, [data])
return (
  <div className="wrapper">
    <div className="tooltip" ref={tooltipRef}>
      {/* Your svg element goes here */}
      <div className="tooltip-info"></div>
    </div>
  </div>
)
`

const codeStringSecond = `// store the data for tooltip in state 
const [tooltipData, setTooltipData] = useState(null); 
useEffect(() => {
  // select group for the tooltip
  const tooltip = d3.select(tooltipRef.current)

  // events for the tooltip
  function onMouseEnter(event, datum) {
    // update state for tooltip data 
    setTooltipData(datum)
  };
}, [data])

return (
  <div className="wrapper">
    <div className="tooltip" ref={tooltipRef}>
      {/* Your svg element goes here */}
      <div className="tooltip-info">{tooltipData}</div>
    </div>
  </div>
)`

  return (
    <div className="post-template__single-col-wrapper">
    <BarChartTooltip />
    <TextBarChartTooltip />
    </div>
  );
};

export default CodeBarChartTooltip;