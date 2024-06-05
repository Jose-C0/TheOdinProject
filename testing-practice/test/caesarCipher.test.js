const caesarCipher = require("../src/caesarCipher.js");
 
// 4. A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”
test("4.1. The shift is not a number", () => {
  const s = "shift";
  const value = caesarCipher(1, s);
  expect(value).toBe("The shift is not a number");
});

test("4.2. The text is not a string", () => {
  const text = 50;
  const value = caesarCipher(text, 4);
  expect(value).toBe("The text is not a string");
});

test("4.3. caesarCipher('xyz', 3) should return 'abc'.", () => {
  const text = "xyz";
  const shift = 3;
  const value = caesarCipher(text, shift);
  expect(value).toBe("abc");
});

test("4.4. Upper case: caesarCipher('ABC', 3) should return 'DEF'", () => {
  const value = caesarCipher("ABC", 3);
  expect(value).toBe("DEF");
});

test("4.5. Down case: caesarCipher('abc', 3) should return 'def'", () => {
  const value = caesarCipher("abc", 3);
  expect(value).toBe("def");
});

test("4.6. Preservation. The shifted lettercase should follow the original lettercase: caesarCipher('HeLLo', 3) should return 'KhOOr'", () => {
  const value = caesarCipher("HeLLo", 3);
  expect(value).toBe("KhOOr");
});

test("4.7. Punctuation. Punctuations, spaces, and other non-alphabetical characters should remain unchanged: caesarCipher('Hello, World!', 3) should return 'Khoor, Zruog!'", () => {
  const value = caesarCipher("Hello, World!", 3);
  expect(value).toBe("Khoor, Zruog!");
});