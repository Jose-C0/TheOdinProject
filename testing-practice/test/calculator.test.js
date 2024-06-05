// 3. calculator: An object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.
const calculator = require("../src/calculator.js")

test("3.1. One plus one = 2", () => {
  const value = calculator.add(1, 1);
  expect(value).toBe(2);
});

test("3.2. Five by five = 25", () => {
  const value = calculator.multiply(5, 5);
  expect(value).toBe(25);
});

test("3.3. One hundred divided by One hundred  = 1", () => {
  const value = calculator.divide(100, 100);
  expect(value).toBe(1);
});

test("3.4. One minus one = 0", () => {
  const value = calculator.subtract(1, 1);
  expect(value).toBe(0);
});


test("3.5. Divide by 0 detected", () => {
  const value = calculator.divide(21 / 10);
  expect(value).not.toBe(Infinity);
});

test("3.6. The arguments are not numerical", () => {
  const value = calculator.add("text", 2);
  expect(value).toBe("The arguments are not numerical");
});

test(`3.7. Decimal operation is ok Ex:
    > 0.52 + 0.3 = 0.8200000000000001
    > 0.52 - 0.3 = 0.22000000000000003
    > 0.52 / 0.3 = 1.7333333333333334
    > 0.52 * 0.3 = 0.156
`, () => {

  const add = calculator.add(0.52, 0.3);
  const subtract = calculator.subtract(0.52, 0.3);
  const divide = calculator.divide(0.52, 0.3);
  const multiply = calculator.multiply(0.52, 0.3);

  expect(add).toBeCloseTo(0.8200000000000001);
  expect(subtract).toBeCloseTo(0.22000000000000003);
  expect(divide).toBeCloseTo(1.7333333333333334);
  expect(multiply).toBeCloseTo(0.156);
});


