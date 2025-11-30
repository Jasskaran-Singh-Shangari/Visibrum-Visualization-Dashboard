import React, { useState, useMemo } from "react";
import { ResponsiveLine } from "@nivo/line";
import { MockData } from "../Data/MockData"
import Header from "../components/Header";

const metricColors = {
  intensity: "primary",
  likelihood: "secondary",
  relevance: "accent",
};

const colorMap = {
  primary: "#3b82f6",
  secondary: "#8b5cf6",
  accent: "#f43f5e",
};

// Clean data function
const cleanData = (data) =>
  data
    .map((d) => ({
      start_year: d.start_year ? Number(d.start_year) : null,
      end_year: d.end_year ? Number(d.end_year) : null,
      intensity: d.intensity ? Number(d.intensity) : 0,
      likelihood: d.likelihood ? Number(d.likelihood) : 0,
      relevance: d.relevance ? Number(d.relevance) : 0,
    }))
    .filter((d) => d.start_year || d.end_year); // keep only items with at least one year

const StartYearLine = ({filtering = true}) => {
  const [selectedYear, setSelectedYear] = useState("All");

  const cleanedData = useMemo(() => cleanData(MockData), [MockData]);

  // Get all unique years for x-axis and dropdown
  const years = useMemo(() => {
    const allYears = cleanedData.flatMap((d) => [d.start_year, d.end_year]).filter(Boolean);
    return ["All", ...Array.from(new Set(allYears))];
  }, [cleanedData]);

  const nivoData = useMemo(() => {
    const metrics = ["intensity", "likelihood", "relevance"];
    return metrics.map((metric) => ({
      id: metric.charAt(0).toUpperCase() + metric.slice(1),
      color: metricColors[metric],
      data: cleanedData
        .flatMap((d) => {
          const points = [];
          if (d.start_year) points.push({ x: d.start_year, y: d[metric] });
          if (d.end_year) points.push({ x: d.end_year, y: d[metric] });
          return points;
        })
        .filter((d) => (selectedYear === "All" ? true : d.x === selectedYear))
        .sort((a, b) => a.x - b.x),
    }));
  }, [cleanedData, selectedYear]);

  return (
    <div className="p-4 bg-base-100 rounded-lg shadow-lg">
      <Header title="START YEAR LINE CHART"subtitle="Explore insights" />
      {/* {filtering ? <div className="flex gap-4 mb-4">
        <select
          className="select select-bordered w-32"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div> : <div></div>} */}

      <div style={{ height: "400px" }}>
        <ResponsiveLine
          data={nivoData}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{ type: "linear", min: 0, max: "auto" }}
          axisBottom={{
            orient: "bottom",
            legend: "Year",
            legendOffset: 36,
            legendPosition: "middle",
          }}
          axisLeft={{
            orient: "left",
            legend: "Value",
            legendOffset: -40,
            legendPosition: "middle",
          }}
          colors={({ color }) => colorMap[color] || "#000"}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabelYOffset={-12}
          useMesh={true}
          enableSlices="x"
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 4,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
};

export default StartYearLine;
