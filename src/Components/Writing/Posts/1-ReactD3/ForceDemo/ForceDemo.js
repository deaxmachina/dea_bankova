import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import _ from "lodash";
import * as chroma from "chroma-js";

// helper function to get int between min and max
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}


const ForceDemo = () => {

  /// refs ///
  const svgRef = useRef();
  const gRef = useRef();

  /// data ///
  const [nodes, setNodes] = useState(null);

  // dimensions 
  const width = 320;
  const height = 320;
  const minRadius = 5;
  const maxRadius = 10;
  const n = 200; // initial number of circles 

  // helper function - get random data
  const getRandomData = () => {
    const nodes = Array.from({length: _.random(30, 200)}, (j, i) => ({
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
  const colorScale = chroma.scale(['#f72585', '#4895ef']).domain([minRadius, maxRadius]) 

  /// D3 Code ///
  useEffect(() => {
    if (!nodes) { return }

    const g = d3.select(gRef.current).attr("transform", `translate(${width/2}, ${height/2})`)

    // add a circle surrouding the whole force graph 
    const circle = g.append("circle")
        .attr("r", width/2)
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
    function tick() { node.attr("cx", d => d.x).attr("cy", d => d.y); }
    const simulation = d3.forceSimulation(nodes)
      .on("tick", tick)
      .force("collide", d3.forceCollide().radius(d => d.r + 1))
      .force('radial', d3.forceRadial(1))

  }, [nodes]);

  return (
    <div className="force-demo-wrapper"> 

      <svg ref={svgRef} width={width} height={height}>
        <g ref={gRef}></g>
      </svg>
      <button onClick={getRandomData} className="force-demo-random-btn">random</button>
    <br />
      
    </div>
  )
};

export default ForceDemo;