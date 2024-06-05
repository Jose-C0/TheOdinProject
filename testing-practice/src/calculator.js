// 3. calculator: An object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.
function invalidArgument(a, b){
  if (typeof a != "number" || typeof b != "number"){
    return false;
  } 
  return true;
}

const add = (a, b) => {
  if (invalidArgument(a,b)) return a + b; 
  else return "The arguments are not numerical";
}

const subtract = (a, b) => {
  if (invalidArgument(a, b)) return a - b;
  else return "The arguments are not numerical";
};
const divide = (a, b) => {
  if (invalidArgument(a,b)) return a / b; 
  else return "The arguments are not numerical";
}
const multiply = (a, b) => {
  if (invalidArgument(a, b)) return a * b;
  else return "The arguments are not numerical";
}  

const calculator = {
  add,
  subtract,
  divide,
  multiply
}
 
module.exports = calculator;
