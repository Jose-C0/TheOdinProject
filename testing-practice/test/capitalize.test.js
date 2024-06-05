const capitalize = require("../src/capitalize.js");

// 1. capitalize: A function that takes a string and
//    returns it with the first character capitalized.
test("1. First character is capitalized", () => {
  const value = capitalize("testString");
  expect(capitalize("TestString")[0]).toMatch(/[A-Z]/);
});
