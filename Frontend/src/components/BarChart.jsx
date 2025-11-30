import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const BarChart = ({ data, xField = "topic", chart, theme }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const width = 800;
    const height = 400;
    const margin = { top: 40, right: 30, bottom: 80, left: 60 };

    const svg = d3
      .select(svgRef.current)
      .attr("width", "100%")
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`);

    svg.selectAll("*").remove();

    const yField = chart.toLowerCase(); 

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d[xField] || ""))
      .range([margin.left, width - margin.right])
      .padding(0.3);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d[yField]) || 10])
      .nice()
      .range([height - margin.bottom, margin.top]);

    // BARS
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar fill-primary")
      .attr("x", (d) => x(d[xField]))
      .attr("width", x.bandwidth())
      .attr("y", height - margin.bottom)
      .attr("height", 0)
      .transition()
      .duration(800)
      .ease(d3.easeCubicOut)
      .attr("y", (d) => y(d[yField]))
      .attr("height", (d) => y(0) - y(d[yField]));

    // X AXIS
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "rotate(30)")
      .style("text-anchor", "start")
      .style("font-size", "10px");

    // Y AXIS
    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));

    // TITLE
    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", margin.top / 2)
      .attr("text-anchor", "middle")
      .attr("class", "font-bold text-lg")
      .text(`${chart.toUpperCase()}`);
  }, [data, xField, chart]);

  return (
    <div className="w-full flex justify-center mt-6">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default BarChart;
