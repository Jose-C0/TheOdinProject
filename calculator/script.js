const display = document.getElementById("display");

// Obtener el id #calculator que contiene todos los elementos de la calculador
const btnListener = document.getElementById("calculator").childNodes;

const childNodesCalculator = []; // Inicializo un array para almacenar todos los nodo hijos de btnListener
for (var i of btnListener) {
  // En este for almaceno todos los id que tiene la calculadora
  if (typeof i.id != "undefined") childNodesCalculator.push(i.id);
}

// Inicializo un array para almacenar todos los id de los botones
let listOperators = [];
listOperators = childNodesCalculator.filter((x) => x.includes("btn"));

let num1 = 0;
let num2 = 0;
let operator = "";

btnListener.forEach((button) => {
  button.addEventListener("click", () => {
    if (childNodesCalculator.includes(button.id)) {
      display.textContent += button.value;
      num1 += button.value;

      if (listOperators.includes(button.id) && button.id != "btn-del" && button.id != "btn-del") {
        display.textContent += " "+ button.is;
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
  return a / b;
}
function operate(operator, a, b) {
  //Toma un operador y 2 numeros y luego llama a una de las funciones anteriores en los numeros (Add, Subtract, Multiply, Divide),
}
