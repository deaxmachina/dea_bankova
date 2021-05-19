import CodeBlockLight from "../Reusable/CodeBlockLight";

const CookiesCode = () => {
  const codeString = `const cookiePath = \`M501.791,236.285c-32.933-11.827-53.189-45.342-50.644-71.807c0-4.351-2.607-8.394-5.903-11.25c-3.296-2.842-8.408-4.072-12.686-3.384c-50.186,7.363-96.14-29.352-100.693-80.962c-0.41-4.658-2.959-8.848-6.914-11.353...\`
  
const svg = d3.select("#wrapper")
  .attr("width", width)
  .attr("height", height)

// center the whole viz as we'll add collide force on it
const cookiesG = svg.append("g")
  .attr("transform", \`translate(\${width/2}, \${height/2})\`)
  
// for each cookie join a path with d attr equal to the SVG path we copied
const cookies  = cookiesG
  .selectAll(".cookie-path")
  .data(data)
  .join("path")
    .classed('cookie-path', true)
    .attr("d", cookiePath)
    .attr("fill", d => d.colour)

// add force to create a shape with the cookies; scale the cookies as needed to fit your desired width/height
const simulation = d3.forceSimulation(data)
  .on("tick", () => {
    cookies.attr("transform", d => \`scale(\${0.05})translate(\${d.x}, \${d.y})\`)
  })
  .force("collide", d3.forceCollide().radius(250))`

  return (
    <CodeBlockLight codeString={codeString}/>
  );
};

export default CookiesCode;