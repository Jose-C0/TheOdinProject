// 2. reverseString: A function that takes a string and returns it reversed.

function reverseString(str) {
  if (typeof str != "string") return "Argument is not a String";
  return typeof str === "string" 
    ? str.split("").reverse().join("") 
    : false;
}
 
module.exports = reverseString;
