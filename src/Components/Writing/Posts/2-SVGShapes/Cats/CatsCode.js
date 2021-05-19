import CodeBlockLight from "../Reusable/CodeBlockLight";

const CatsCode = () => {
  const codeString = `const catPaths = [
    {
      path: \`m176 488h-8c-75.1 0-136-78.8-136-176 0-56 56-200 56-224 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-26.5 21.5-48 48-48s48 21.5 48 48c0 24-56 168-56 224 0 70.7 39.4 128 88 128z\`,
      fill: "#464c4f"
    },
    {
      path: \`m424 488 ...\`,
      fill: "#606669"
    },
    {
      path: \`m392 112h48s0 32-24 32-24-32-24-32z\`,
      fill: "#f78a25"
    }, 
    {
      path: \`m296 112h48s0 32-24 32-24-32-24-32z\`,
      fill: "#f78a25"
    },
    {
      path: \`m429.3 440-5.3 48h-96l-8-48z\`,
      fill: "#757c80"
    },
    ...
  ]
  
const svg = d3.select("#wrapper")
  .attr("width", width)
  .attr("height", height)

const catsG = svg.append("g")
  .attr("transform", \`translate(\${width/2}, \${height/2})\`)
    
const cats  = catsG
  .selectAll(".cat-path-g")
  .data(data)
  .join("g")
    .classed('cat-path-g', true)

cats.selectAll('.cat-path')
  .data(d.catPaths)
  .join("path")
    .classed("cat-path", true)
    .attr("d", d => d.path)
    .attr("fill", d => d.fill)
    .attr("opacity", 0.8)

const simulation = d3.forceSimulation(data)
    .on("tick", () => {
      cats.attr("transform", d => \`scale(\${0.07})translate(\${d.x}, \${d.y})\`)
    })
    .force("collide", d3.forceCollide().radius(150))`

  return (
    <CodeBlockLight codeString={codeString}/>
  );
};

export default CatsCode;