import React from "react";
import CodeBlockLight from "../Resusable/CodeBlockLight";

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
    <p className="post-template__single-col-para">
        To finish off this bar chart, let's have a look 
        at <span className="post__emph-text">two different ways you might go about implementing a tooltip on hover</span>. 
        This is a simple example, so it doesn't make much of a difference which way you use, but if you are constructing a more elaborate 
        tooltip with multiple lines of information and styles, constructing this with state to store your tooltip data in can simplify your process. 
        <br />
        <br />
        <span className="post__highlighted-text">Let's have a look at the D3 way first.</span> The tooltip would need to be placed inside a <code className="code">useEffect</code>. We 
        then select, say, a div evement, which here has a class of <code className="code">tooltip-info</code> and use its <code>html</code> method 
        do <span className="post__emph-text">directly inject html inside the div</span>. This example is simple because we only have 2 lines 
        of html, i.e. only the name and value for each data point. 
        <CodeBlockLight codeString={codeStringFirst}/>
        <br />
        <span className="post__highlighted-text">While with the React approach</span>, you can <span className="post__emph-text">construct the html skeleton of your tooltip directly in the render method</span>, 
        and then populate it with the content of variables stored in state. We've done this here: 
        <CodeBlockLight codeString={codeStringSecond}/>
        where we've created beforehand a <code className='code'>const [tooltipData, setTooltipData] = useState()</code> state to contain our tooltip data.
        and all that D3 needs to do (and note that you don't even have to do this with D3) is to update state so that the tooltip data gets updated. 
        It is arguably a cleaner way to do this. 
        <br />
        <br />

     I lost the full implementation of the two options that I had prepared. I'm sorry! However, you can still checkout the 
     full implementation of the above bar chart with tooltip over here <a href="https://codesandbox.io/s/ecstatic-sea-rbb5n?file=/src/App.js" className="post__link" target="_blank">[code sandbox]</a>. It uses the D3 way, and can very easily we changed to 
     use the React state way. Maybe see if you can modify it to achive that? 

    </p>
  )
};

export default TextBarChartTooltip;