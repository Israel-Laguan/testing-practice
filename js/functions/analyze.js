const analyze = array => (array.length > 0 ? {
  average: array.reduce((total, current) => total + current) / array.length,
  min: Math.min(...array),
  max: Math.max(...array),
  length: array.length,
} : {
  average: null,
  min: null,
  max: null,
  length: 0,
});

export default analyze;
