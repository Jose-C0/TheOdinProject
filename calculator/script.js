const display = document.querySelector("#resultado-display");
const ans_display = document.querySelector("#ans-display");

// Get the id #calculator containing all the elements of the calculator
const btnListener = document.getElementById("calculator").childNodes;

const childNodesCalculator = []; // Initialize an array to store all child nodes of btnListener

for (var i of btnListener) {
  // In this for I store all the ids that the calculator has.
  if (i.id) {
    childNodesCalculator.push(i.id);
  }
}

//console.log(childNodesCalculator);
// I initialize an array to store all the button id's.
let listOperators = [...childNodesCalculator.filter((x) => x.includes("op"))];
//console.log(listOperators);

let listNumbers = [...childNodesCalculator.filter((x) => x.includes("num"))];
//console.log(listNumbers);

let num1 = 0;
let num2 = 0;
let operator;
let str = "";
let ans = 0;
ans_display.textContent += ans;

function setAc() {
  num1 = 0;
  num2 = 0;
  operator;
  str = 0;
  display.textContent = "";
  if (score != "💀 there was an error!")
    ans_display.textContent = "Ans = " + ans;
}

const objOfOperator = [];
for (let i of btnListener) {
  if (i.id) {
    let obj = { id: i.id, value: i.value };
    objOfOperator.push(obj);
  }
}
const listValuesOperators = [];
objOfOperator.forEach((item) => {
  if (item.id.includes("op")) {
    listValuesOperators.push(item.value);
  }
});

function setKeyDown(event) {
  // Show text on dis
  if (event.key === "Escape") setAc(); //Al presionar el boton AC se renicia display y todas las variables

  const regex = /^[0-9]$/;
  if (
    (regex.test(event.key) && event.key != "Enter") ||
    ["+", "-", "/", "*", "."].includes(event.key)
  ) {
    str += event.key;
    display.textContent = str;
  }

  if (event.key === "Backspace" || event.key === "Delete") {
    // Here we delete from display the last number to show it on screen and save it.
    str = display.textContent.split("").slice(0, -1).join("");
    display.textContent = "";
    display.textContent += str;
  }

  if (event.key === "Enter") {
    let newStr = convertStringToNumbers(str.split(""));
    let score = finalScore(newStr);

    display.textContent = "";
    ans = score;

    display.textContent = ans;
    ans_display.textContent = str + " =";
    str = ans;
  }
}

window.addEventListener("keydown", setKeyDown);

btnListener.forEach((button) => {
  button.addEventListener("click", () => {
    if (childNodesCalculator.includes(button.id)) {
      // Show text on display
      if (button.id === "btn-ac") setAc(); //Al presionar el boton AC se renicia display y todas las variables
      if (button.value != "=") str += button.value;
      display.textContent = str;

      if (button.id === "btn-ans") {
        str += ans;

        display.textContent = str;
      }

      if (button.id === "btn-del") {
        // Here we delete from display the last number to show it on screen and save it.
        str = display.textContent.split("").slice(0, -1).join("");
        display.textContent = "";
        display.textContent += str;
      }

      if (button.id === "btn-equal") {
        let newStr = convertStringToNumbers(str.split(""));
        let score = finalScore(newStr);

        display.textContent = "";
        ans = score;

        display.textContent = ans;
        ans_display.textContent = str + " =";
        str = ans;
      }
    }
  });
});

function Add(a, b) {
  return a + b;
}
function Subtract(a, b) {
  return a - b;
}
function Multiply(a, b) {
  return a * b;
}
function Divide(a, b) {
  let r;
  try {
    if (b === 0) console.log("HAY ALGO MALO");
    r = a / b;
    if (r === Infinity) {
      r = "💀 there was an error!";
    }
  } catch (error) {
    console.log("hay algo malo - ", error);
  } finally {
    return r;
  }
}

function convertStringToNumbers(str) {
  let newArray = [];
  let otherStr = [];
  let num = "";

  for (let index = 0; index < str.length; index++) {
    // This for return a array of number and string operators but whitout scintific notation Example: [10, "+", 50, "+", "1e^x2"]
    if (listValuesOperators.includes(str[index])) {
      if (num.includes("e^x")) newArray.push(num);
      else newArray.push(Number(num));

      newArray.push(str[index]);
      num = "";
      continue;
    }

    num += str[index];

    if (index === str.length - 1) {
      if (num.includes("e^x")) newArray.push(num);
      else newArray.push(Number(num));
    }
  }

  for (const iterator of newArray) {
    // This for return a array whit scintific notation converted in number Example: [10, "+", 50, "+", 100]
    if (
      typeof iterator === "string" &&
      !listValuesOperators.includes(iterator)
    ) {
      let stringSplit = iterator.split("");
      let posAfterX = stringSplit.indexOf("x") + 1;
      let posBeforeE = stringSplit.indexOf("e") - 1;
      let exponent = Number(
        stringSplit.slice(posAfterX, stringSplit.length).join("")
      );
      let coefficient = Number(stringSplit.slice(0, posBeforeE + 1).join(""));

      for (let index = 0; index < exponent; index++) {
        coefficient += "0";
      }
      otherStr.push(Number(coefficient));
      continue;
    }
    otherStr.push(iterator);
  }

  return otherStr;
}

function operation(positionOp, operand, string) {
  let result = 0;

  n1 = string[positionOp - 1];
  n2 = string[positionOp + 1];

  if (operand === "*") result = Multiply(n1, n2);
  if (operand === "/") result = Divide(n1, n2);
  if (operand === "+") result = Add(n1, n2);
  if (operand === "-") result = Subtract(n1, n2);

  return result;
}

function finalScore(string) {
  let r = 0;
  let posMultiply = string.indexOf("*");
  let posDivide = string.indexOf("/");
  let posAdd = string.indexOf("+");
  let posSubtract = string.indexOf("-");

  for (let index = 0; index < string.length + 1; index++) {
    posMultiply = string.indexOf("*");
    posDivide = string.indexOf("/");
    posAdd = string.indexOf("+");
    posSubtract = string.indexOf("-");

    if (posMultiply != -1) {
      r = operation(posMultiply, "*", string);
      string.splice(posMultiply - 1, 3, r);
      continue;
    }

    if (posDivide != -1) {
      r = operation(posDivide, "/", string);
      string.splice(posDivide - 1, 3, r);

      if (r === "💀 there was an error!") {
        return r;
      }
      continue;
    }

    if (posAdd != -1) {
      r = operation(posAdd, "+", string);
      string.splice(posAdd - 1, 3, r);
      continue;
    }
    if (posSubtract != -1) {
      r = operation(posSubtract, "-", string);
      string.splice(posSubtract - 1, 3, r);
      continue;
    }
  }

  return r;
}
