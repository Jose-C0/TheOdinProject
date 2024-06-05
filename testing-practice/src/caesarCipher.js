// 4. A caesarCipher function that takes a string and a shift
// factor and returns it with each character “shifted”

function caesarCipher(text, shift) {
  if (typeof shift != "number") return "The shift is not a number";
  if (typeof text != "string") return "The text is not a string";

  let result = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i];

    if (!!char.search(/[a-zA-Z]/)) {
      // Detect all non-alphabet characters to be stored in result
      result += char;
      continue;
    }
    if (char.toUpperCase(text[i]) === char) {
      let ch = String.fromCharCode(
        ((char.charCodeAt(0) + shift - 65) % 26) + 65
      );
      result += ch;
    } else {
      let ch = String.fromCharCode(
        ((char.charCodeAt(0) + shift - 97) % 26) + 97
      );
      result += ch;
    }
  }
  return result;
}
// console.log(caesarCipher("ABC, *", 3), " > should return 'DEF'");
// console.log(caesarCipher("abcde", 1), " respet upper");

//  console.log("Original; aB,L  /* xyz ", "\n cipher: ",caesarCipher("aB,L  /* xyz", 2) );
// console.log(caesarCipher("xyz", 3), " > should return 'abc'");

// Driver code
// let text = "ATTACKATONCE";
// let s = 4;
// console.log("Text : " + text);
// console.log("Shift : " + s);
// console.log("Cipher: " + encrypt(text, s));
module.exports = caesarCipher;
