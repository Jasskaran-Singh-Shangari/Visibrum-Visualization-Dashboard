import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Filters from "../components/Filters";
import { MockData } from "../Data/MockData";
import { getFilterOptions, cleanData } from "../utils";
import BarChart from "../components/BarChart";

const IntensityBar = ({filtering=true}) => {
  const cleaned = cleanData(MockData);
  const filterOptions = getFilterOptions(cleaned);

  const [selectedXAxis, setSelectedXAxis] = useState("topic");

  const [filters, setFilters] = useState({
    startYear: "",
    endYear: "",
    topic: "",
    sector: "",
    region: "",
    pestle: "",
    source: "",
    swot: "",
    country: "",
    city: "",
    topN: 5,
  });

  const [filteredData, setFilteredData] = useState(cleaned);

useEffect(() => {
  const filterToXAxis = {
    country: "country",
    city: "city",
    topic: "topic",
    sector: "sector",
    region: "region",
    pestle: "pestle",
    source: "source",
    swot: "swot",
    startYear: "start_year",  // FIX
    endYear: "end_year"       // FIX
  };

  for (let key in filterToXAxis) {
    const value = filters[key];
    if (value) {
      setSelectedXAxis(filterToXAxis[key]);
      return;
    }
  }

  setSelectedXAxis("topic");
}, [filters]);

  useEffect(() => {
    let result = [...cleaned];

    if (filters.startYear) {
      result = result.filter((d) => Number(d.start_year) === Number(filters.startYear));
    }

    if (filters.endYear) {
      result = result.filter((d) => Number(d.end_year) === Number(filters.endYear));
    }

    if (filters.topic && filters.topic !== "all") {
      result = result.filter((d) => d.topic === filters.topic);
    }

    if (filters.sector && filters.sector !== "all") {
      result = result.filter((d) => d.sector === filters.sector);
    }

    if (filters.region && filters.region !== "all") {
      result = result.filter((d) => d.region === filters.region);
    }

    if (filters.pestle && filters.pestle !== "all") {
      result = result.filter((d) => d.pestle === filters.pestle);
    }

    if (filters.source && filters.source !== "all") {
      result = result.filter((d) => d.source === filters.source);
    }

    if (filters.swot)
      result = result.filter((d) => d.swot === filters.swot);

    if (filters.country && filters.country !== "all") {
      result = result.filter((d) => d.country === filters.country);
    }

    // if (filters.city)
    //   result = result.filter((d) => d.city === filters.city);

    result = result
      .sort((a, b) => b.intensity - a.intensity)
      .slice(0, filters.topN);

    setFilteredData(result);
  }, [filters]);

  return (
    <div className="p-4">
      <Header title="INTENSITY BAR CHART" subtitle="Filter & explore insights" />
      {filtering ? <Filters
        filterOptions={filterOptions}
        filters={filters}
        setFilters={setFilters}
      />: <div></div>}
      

      <BarChart data={filteredData} xField={selectedXAxis} theme="Intensity" chart="intensity" />
    </div>
  );
};

export default IntensityBar;
