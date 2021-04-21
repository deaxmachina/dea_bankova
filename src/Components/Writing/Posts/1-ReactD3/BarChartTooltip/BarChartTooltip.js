import React, { useRef, useEffect, useState } from 'react';
import * as d3 from "d3";

// constants
const width=300;
const height=140;
const margin = {top: 10, right: 10, bottom: 30, left: 10}
const innerWidth = width - margin.left - margin.right;

const BarChartTooltip = () => {
  const [data, setData] = useState([30, 50, 80, 90, 20])
    
  // define your scales
  const xScale = d3.scaleBand()
    .domain(data.map((d, i) => i))
    .range([0, innerWidth])
    .padding(0.05)
  const colourScale = d3.scaleOrdinal()
    .domain(data.map((d, i) => i))
    .range(['#f72585', '#b5179e', '#7209b7', '#560bad', '#480ca8', '#3f37c9','#4895ef'])

  // refs 
  const gRef = useRef();
  const xAxisRef = useRef();
  const tooltipRef = useRef();

  // D3 code
  useEffect(() => {
    if (!data) {return}

    // select group for the bar chart 
    const g = d3.select(gRef.current)
    // select group for the tooltip
    const tooltip = d3.select(tooltipRef.current)

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
        .on("mouseenter", onMouseEnter)
        .on("mouseleave", onMouseLeave)
        .transition().duration(1000)
          .attr("y", d => height - margin.bottom - d)
          .attr("height", d => d)
          .style("fill", (d, i) => colourScale(i))

    // define and call axes 
    const xAxis = g => g
      .attr("transform", `translate(${0}, ${height-margin.bottom})`)
      .call(d3.axisBottom(xScale))
      .call(d => d.select(".domain").remove())
    d3.select(xAxisRef.current).call(xAxis)

    // events for the tooltip
    function onMouseEnter(event, datum) {
      tooltip.style("opacity", 1)
      tooltip.select(".tooltip-info").text(`value: ${datum}`) // insert text
      // position the toolbar 
      const xPosition = xScale(data.indexOf(datum))
      const yPosition =  height - margin.bottom - datum - 30
      tooltip.style("transform", `translate(calc(${xPosition}px), ${yPosition}px)`)
      d3.select(this).style("fill", "#fca311") // set colour to selected bar
    };
    function onMouseLeave(event, datum) {
      tooltip.style("opacity", 0)
      d3.select(this).style('fill', colourScale(data.indexOf(datum)))
    }

  }, [data])

  return (
    <div className="wrapper">
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`} ref={gRef}>
          <g ref={xAxisRef}></g>
        </g>
      </svg>
      <div className="tooltip" ref={tooltipRef}>
        <div className="tooltip-info"></div>
      </div>
    </div>
  )
};

export default BarChartTooltip;