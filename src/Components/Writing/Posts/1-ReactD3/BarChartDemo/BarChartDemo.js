import React, { useRef, useEffect, useState } from 'react';
import * as d3 from "d3";

// constants
const width=300;
const height=140;
const margin = {top: 10, right: 10, bottom: 30, left: 10}

const BarChartDemo = () => {
  const [data, setData] = useState([30, 50, 80, 90, 20])
    
  // define your scales
  const xScale = d3.scaleBand()
    .domain(data.map((d, i) => i))
    .range([0, width - margin.left - margin.right])
    .padding(0.05)
  const colourScale = d3.scaleOrdinal()
    .domain(data.map((d, i) => i))
    .range(['#f72585', '#b5179e', '#7209b7', '#560bad', '#480ca8', '#3f37c9','#4895ef'])

  // define and call d3 axis using a ref
  const xAxisRef = useRef();
  useEffect(() => {
    const xAxis = g => g
      .attr("transform", `translate(${0}, ${height-margin.bottom})`)
      .call(d3.axisBottom(xScale))
      .call(d => d.select(".domain").remove())
    // select the ref to the axis g element and call axis in there
    d3.select(xAxisRef.current).call(xAxis)
  }, [data])

  // function to pass to button on click to generate random data
  const getRandomData = () => {
    const dataLength = Math.floor(Math.random() * Math.floor(6)) + 3;
    return Array.from({length: dataLength}, () => Math.floor(Math.random() * 100) +10);
  }

  return (
      <div className="bar-chart-demo-wrapper">
        <svg width={width} height={height}>
          <g transform={`translate(${margin.left},${margin.top})`}>
            {data.map((d, i) => (
              <rect
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
        <button onClick={() => setData(getRandomData())} className="bar-chart-random-btn"> random </button>
      </div>
  )
};

export default BarChartDemo;