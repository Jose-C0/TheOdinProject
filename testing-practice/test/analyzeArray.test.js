const analyzeArray = require("../src/analyzeArray.js");
// 5. analyzeArray: A function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.
const object = {
  average: 4,
  min: 1,
  max: 8,
  length: 6,
};

test("5.1. analyzeArray should return", () => {
  const value = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(value).toEqual(object);
});

test("5.2. The shift is not a number", () => {
  const value = analyzeArray("Text");
  expect(value).toBe("The parameter is not a array");
});

