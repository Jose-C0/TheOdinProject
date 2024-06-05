// 5. analyzeArray: A function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

function analyzeArray(array) {

  if (!Array.isArray(array)) return "The parameter is not a array";

  const avg = array.reduce((nun1, nun2) => nun1 + nun2, 0) / array.length;
  const min = Math.min(...array);
  const max = Math.max(...array);

  const object = {
    average: avg,
    min: min,
    max: max,
    length: array.length,
  };

  return object;
}

module.exports = analyzeArray;
