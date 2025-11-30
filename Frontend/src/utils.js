export const cleanData = (data) => {
  const extractYear = (value) => {
    if (value === "" || value === null || value === undefined) {
      return null;
    }
    const num = Number(value);

    return isNaN(num) ? null : num;
  };

  return data.map(d => ({
    intensity: Number(d.intensity) || 0,
    likelihood: Number(d.likelihood) || 0,
    relevance: Number(d.relevance) || 0,

    start_year: extractYear(d.start_year),
    end_year: extractYear(d.end_year),

    country: d.country || "Unknown",
    region: d.region || "Unknown",
    topic: d.topic || "Unknown",
    source: d.source || "Unknown",
    pestle: d.pestle || "Unknown",
    sector: d.sector || "Unknown"
  }));
};

export const getFilterOptions = (data = []) => {
  if (!Array.isArray(data)) {
    return {
      startYear: [],
      endYear: [],
      years: [],
      topics: [],
      sectors: [],
      regions: [],
      pestles: [],
      sources: [],
      swots: [],
      countries: [],
      cities: []
    };
  }

  const cleanUnique = (arr) =>
    [...new Set(arr.filter(v => v !== "" && v !== null && v !== undefined))];

  const startYears = cleanUnique(
    data.map(d => Number(d.start_year)).filter(n => !isNaN(n))
  ).sort((a, b) => a - b);

  const endYears = cleanUnique(
    data.map(d => Number(d.end_year)).filter(n => !isNaN(n))
  ).sort((a, b) => a - b);

  return {
    years: cleanUnique([...startYears, ...endYears]).sort((a, b) => a - b),

    startYear: startYears,
    endYear: endYears,

    topics: cleanUnique(data.map(d => d.topic || "Unknown")),
    sectors: cleanUnique(data.map(d => d.sector || "Unknown")),
    regions: cleanUnique(data.map(d => d.region || "Unknown")),
    pestles: cleanUnique(data.map(d => d.pestle || "Unknown")),
    sources: cleanUnique(data.map(d => d.source || "Unknown")),
    swots: cleanUnique(data.map(d => d.swot || "Unknown")),
    countries: cleanUnique(data.map(d => d.country || "Unknown")),
    cities: cleanUnique(data.map(d => d.city || "Unknown")),
  };
};
