import React, { useRef, useEffect, useState } from 'react';
import * as d3 from "d3";

// constants
const width=300;
const height=140;
const margin = {top: 10, right: 10, bottom: 30, left: 10}
const innerWidth = width - margin.left - margin.right;

const BarChartUseEffectDemo = () => {
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

    // define and call axes
    const xAxis = g => g
      .attr("transform", `translate(${0}, ${height-margin.bottom})`)
      .call(d3.axisBottom(xScale))
      .call(d => d.select(".domain").remove())
    d3.select(xAxisRef.current).call(xAxis)

  }, [data])

  // function to pass to button on click to generate random data
  const getRandomData = () => {
    const dataLength = Math.floor(Math.random() * Math.floor(6)) + 3;
    return Array.from({length: dataLength}, () => Math.floor(Math.random() * 100) +10);
  }

  return (
    <div className="bar-chart-use-effect-wrapper">
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`} ref={gRef}>
          <g ref={xAxisRef}></g>
        </g>
      </svg>
      <button onClick={() => setData(getRandomData())} className="bar-chart-random-btn"> random </button>
      <br />
    </div>
  )
};

export default BarChartUseEffectDemo;