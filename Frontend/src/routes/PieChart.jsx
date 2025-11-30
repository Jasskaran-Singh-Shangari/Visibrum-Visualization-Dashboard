import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const PieChart = ({ data, labelField = "topic", valueField = "intensity", theme }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const width = 400;
    const height = 400;
    const radius = Math.min(width, height) / 2;

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`);

    svg.selectAll("*").remove();

    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const pie = d3
      .pie()
      .value((d) => d[valueField])
      .sort(null);

    const arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(radius - 10);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const arcs = g.selectAll("arc").data(pie(data)).enter();

    arcs
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => color(d.data[labelField]))
      .transition()
      .duration(800)
      .attrTween("d", function (d) {
        const i = d3.interpolate(d.startAngle, d.endAngle);
        return function (t) {
          d.endAngle = i(t);
          return arc(d);
        };
      });

    arcs
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .style("font-size", "10px")
      .text((d) => d.data[labelField]);

    svg
      .append("text")
      .attr("x", width / 2)
      .attr("y", 20)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
    //   .text(theme || "Pie Chart");
  }, [data, labelField, valueField]);

  return (
    <div className="flex justify-center mt-6">
      <svg ref={svgRef}></svg>
    </div>
  );
};

export default PieChart;
