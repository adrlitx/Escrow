import React, { useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data }) => {
  useEffect(() => {
    drawBarChart(data);
  }, [data]);

  const drawBarChart = (data) => {
    // Create the D3.js bar chart here
    const drawBarChart = (data) => {
        const width = 500;
        const height = 300;
      
        const svg = d3
          .select('#bar-chart')
          .append('svg')
          .attr('width', width)
          .attr('height', height);
      
        const xScale = d3
          .scaleBand()
          .domain(data.map((d) => d.name))
          .range([0, width])
          .padding(0.2);
      
        const yScale = d3.scaleLinear().domain([0, d3.max(data, (d) => d.value)]).range([height, 0]);
      
        svg
          .selectAll('rect')
          .data(data)
          .enter()
          .append('rect')
          .attr('x', (d) => xScale(d.name))
          .attr('y', (d) => yScale(d.value))
          .attr('width', xScale.bandwidth())
          .attr('height', (d) => height - yScale(d.value))
          .attr('fill', 'steelblue');
      };
      
  };

  return <div id="bar-chart"></div>;
};

export default BarChart;
