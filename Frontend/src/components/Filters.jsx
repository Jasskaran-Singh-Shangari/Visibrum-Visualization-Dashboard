import React from "react";

const Filters = ({
  filterOptions,
  filters,
  setFilters,
}) => {
  // Update filter
  const update = (key, value) =>
    setFilters(prev => ({ ...prev, [key]: value }));

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      startYear: "all",
      endYear: "all",
      topic: "all",
      sector: "all",
      region: "all",
      pest: "all",
      source: "all",
      country: "all",
      topN: 5,
    });
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4 bg-base-200 rounded-xl shadow-lg">

      {/* START YEAR */}
      <select
        className="select select-primary"
        value={filters.startYear}
        onChange={(e) => update("startYear", e.target.value)}
      >
        <option value="all">All Start Years</option>
        {filterOptions.years.map(y => <option key={y} value={y}>{y}</option>)}
      </select>

      {/* END YEAR */}
      <select
        className="select select-primary"
        value={filters.endYear}
        onChange={(e) => update("endYear", e.target.value)}
      >
        <option value="all">All End Years</option>
        {filterOptions.years.map(y => <option key={y} value={y}>{y}</option>)}
      </select>

      {/* TOPIC */}
      <select
        className="select select-secondary"
        value={filters.topic}
        onChange={(e) => update("topic", e.target.value)}
      >
        <option value="all">All Topics</option>
        {filterOptions.topics.map(t => <option key={t} value={t}>{t}</option>)}
      </select>

      {/* SECTOR */}
      <select
        className="select select-secondary"
        value={filters.sector}
        onChange={(e) => update("sector", e.target.value)}
      >
        <option value="all">All Sectors</option>
        {filterOptions.sectors.map(s => <option key={s} value={s}>{s}</option>)}
      </select>

      {/* REGION */}
      <select
        className="select select-accent"
        value={filters.region}
        onChange={(e) => update("region", e.target.value)}
      >
        <option value="all">All Regions</option>
        {filterOptions.regions.map(r => <option key={r} value={r}>{r}</option>)}
      </select>

      {/* PESTLE */}
      <select
        className="select select-info"
        value={filters.pest}
        onChange={(e) => update("pest", e.target.value)}
      >
        <option value="all">All Pestles</option>
        {filterOptions.pestles.map(p => <option key={p} value={p}>{p}</option>)}
      </select>

      {/* SOURCE */}
      <select
        className="select select-info"
        value={filters.source}
        onChange={(e) => update("source", e.target.value)}
      >
        <option value="all">All Sources</option>
        {filterOptions.sources.map(s => <option key={s} value={s}>{s}</option>)}
      </select>

      {/* COUNTRY */}
      <select
        className="select select-success"
        value={filters.country}
        onChange={(e) => update("country", e.target.value)}
      >
        <option value="all">All Countries</option>
        {filterOptions.countries.map(c => <option key={c} value={c}>{c}</option>)}
      </select>

      {/* FIRST N FILTER */}
      <select
        className="select select-primary"
        value={filters.topN}
        onChange={(e) => setFilters({ ...filters, topN: Number(e.target.value) })}
      >
        <option value={5}>First 5</option>
        <option value={10}>First 10</option>
        <option value={20}>First 20</option>
        <option value={30}>First 30</option>
        <option value={50}>First 50</option>
      </select>
    </div>
  );
};

export default Filters;
