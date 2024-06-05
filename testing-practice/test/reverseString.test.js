const reverseString = require("../src/reverseString.js");
 
// 2. reverseString: A function that takes a string and returns it reversed.

test("2.1. Reverse String", () => {
  const stgInitial = "string";
  const strReverse = reverseString(stgInitial);
  expect(strReverse).toMatch(stgInitial.split("").reverse().join(""));
});

test("2.2. Argument is not a String", () => {
  const value = reverseString(32);
  expect(value).toBe("Argument is not a String");
});
