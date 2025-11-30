import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Filters from "../components/Filters";
import { MockData } from "../Data/MockData";
import { getFilterOptions, cleanData } from "../utils";
import PieChart from "./PieChart";

const Pie = ({filtering=true}) => {
  const cleaned = cleanData(MockData);
  const filterOptions = getFilterOptions(cleaned);

  const [filters, setFilters] = useState({
    startYear: "",
    endYear: "",
    topic: "",
    sector: "",
    region: "",
    pest: "",
    source: "",
    swot: "",
    country: "",
    city: "",
    topN: 5,
  });

  const [filteredData, setFilteredData] = useState(cleaned);

  useEffect(() => {
    let result = [...cleaned];

    if (filters.startYear) {
      result = result.filter((d) => Number(d.start_year) === Number(filters.startYear));
    }
    if (filters.endYear) {
      result = result.filter((d) => Number(d.end_year) === Number(filters.endYear));
    }
    if (filters.topic && filters.topic !== "all")
      result = result.filter((d) => d.topic === filters.topic);

    if (filters.sector && filters.sector !== "all")
      result = result.filter((d) => d.sector === filters.sector);

    if (filters.region && filters.region !== "all")
      result = result.filter((d) => d.region === filters.region);

    if (filters.pest && filters.pest !== "all")
      result = result.filter((d) => d.pestle === filters.pest);

    if (filters.source && filters.source !== "all")
      result = result.filter((d) => d.source === filters.source);

    if (filters.swot && filters.swot !== "all")
      result = result.filter((d) => d.swot === filters.swot);

    if (filters.country && filters.country !== "all")
      result = result.filter((d) => d.country === filters.country);

    if (filters.city && filters.city !== "all")
      result = result.filter((d) => d.city === filters.city);

    // Top N highest intensity
    result = result
      .sort((a, b) => b.intensity - a.intensity)
      .slice(0, filters.topN);

    setFilteredData(result);
  }, [filters]);

  return (
    <div className="p-4">
      <Header title="PIE CHART" subtitle="Filter & View Insights" />

      {/* Filters */}
      {filtering ? <Filters
        filterOptions={filterOptions}
        filters={filters}
        setFilters={setFilters}
      />: <div></div>}

      {/* Pie Chart */}
      <PieChart
        data={filteredData}
        labelField="topic"
        valueField="intensity"
        theme="Topics"
      />
    </div>
  );
};

export default Pie;
