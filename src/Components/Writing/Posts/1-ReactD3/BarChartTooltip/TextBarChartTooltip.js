import React from "react";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierDuneLight, hopscotch } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const codeStringFirst = `useEffect(() => {
  tooltip.select(".tooltip-info")
  .html(
    <div><span>name: </span> \${datum.name}</div>
    <div><span>value: </span> \${datum.value}</div>
  }, [])
)`

const codeStringSecond = `const [tooltipData, setTooltipData] = useState()
useEffect(() => {
  tooltip.select(".tooltip-info")
  setTooltipData(datum)
}, [])
render (
  <div>
    <div><span>name: </span>{tooltipData.name}</div>
    <div><span>value: </span>{tooltipData.value}</div>
  </div>
)`

const TextBarChartTooltip = () => {
  return (
    <div className="article-body">
        To finish off this bar chart, let's have a look at two different ways you might go about implementing a tooltip on hover. 
        This is a simple example, so it doesn't make much of a difference which way you use, but if you are constructing a more elaborate 
        tooltip with multiple lines and styles, constructing this with state can simplify your code. 
        Compare the D3 way on the left. Here we add the text directly into an existing div element using 
        <code></code>. Image you had several values you wanted to place 
        inside the tooltip, and you wanted each of them on a new line. You might need to construct something like this 
        <SyntaxHighlighter className="inline-code" language="javascript" style={hopscotch} showLineNumbers={false} wrapLines={true}>
          {codeStringFirst}
        </SyntaxHighlighter>
        While with the React approach, you can construct the html skeleton of your tooltip directly as you would in the render method, 
        and then populate it with the content of variables stored in state. We've done this here: <code></code>
        In the example above, that would look like this: 
        <SyntaxHighlighter className="inline-code" language="javascript" style={hopscotch} showLineNumbers={false} wrapLines={true}>
          {codeStringSecond}
        </SyntaxHighlighter>
        where we've created beforehand a <code>const [tooltipData, setTooltipData] = useState()</code> state to contain our tooltip data.

      Have a look at a side by side comparison of the two methods below. You can view the full examples [here] and [here]

    </div>
  )
};

export default TextBarChartTooltip;