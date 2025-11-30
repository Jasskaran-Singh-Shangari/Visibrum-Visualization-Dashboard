// src/components/LineChart.jsx
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const LineChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    const width = 700;
    const height = 400;
    const margin = { top: 40, right: 30, bottom: 50, left: 60 };

    svg.attr("width", width).attr("height", height);

    // Group data by start_year and calculate total intensity
    const grouped = d3.rollup(
      data,
      v => d3.sum(v, d => d.intensity),
      d => d.start_year
    );

    const years = [...grouped.keys()].sort((a, b) => a - b);
    const values = years.map(year => ({ year, value: grouped.get(year) }));

    // Scales
    const x = d3.scaleLinear()
      .domain(d3.extent(years))
      .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear()
      .domain([0, d3.max(values, d => d.value)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // Line generator
    const line = d3.line()
      .x(d => x(d.year))
      .y(d => y(d.value))
      .curve(d3.curveMonotoneX);

    // Draw axes
    svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    // Draw line
    svg.append("path")
      .datum(values)
      .attr("fill", "none")
      .attr("stroke", "#4f46e5")
      .attr("stroke-width", 2.5)
      .attr("d", line);

    // Circles at data points
    svg.selectAll("circle")
      .data(values)
      .enter()
      .append("circle")
      .attr("cx", d => x(d.year))
      .attr("cy", d => y(d.value))
      .attr("r", 4)
      .attr("fill", "#4f46e5");

  }, [data]);

  return (
    <div className="w-full flex justify-center">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default LineChart;
