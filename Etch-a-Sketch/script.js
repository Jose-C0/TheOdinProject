function getRandom(min, max) {
  return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
}

let grid = document.getElementById("grid-container");
let div = document.createElement("div");

// button
const btn_black = document.getElementById("btn-black");
const btn_rgb = document.getElementById("btn-rgb");
const btn_boxesNumber = document.getElementById("btn-boxesNumber");

// Create 16 * 16 div in grid-container
// TODO:4.	Añade un botón en la parte superior de la pantalla que enviará al
// usuario una ventana emergente preguntando por el número de cuadrados por lado
// para la nueva cuadrícula.
for (let index = 0; index < 256; index++) {
  div = document.createElement("div");
  div.className = "box";
  grid.appendChild(div);
}
let longBox = 16;
let widthBox = 16;

let boxes = grid.querySelectorAll(".box");
// Agregar el evento 'mouseover' a cada elemento .box

let idRgbActive = false;
boxes.forEach(function (box) {
  box.addEventListener("mouseover", function () {
    // Código que se ejecutará cuando el mouse pase por encima del elemento .box
    // TODO:4.	Añade un botón en la parte superior de la pantalla que enviará al
    btn_boxesNumber.onclick = () => {
      let aNumber = Number(
        window.prompt(
          "Insert the number of boxes you want (min: 16 max: 100)",
          "16"
        )
      );

      for (let index = 0; index < 256; index++) {
        grid.removeChild(div);
      }

      for (let index = 0; index < aNumber; index++) {
        div = document.createElement("div");
        div.className = "box";
        grid.appendChild(div);
      }
    };
    let r = getRandom(0, 255);
    let g = getRandom(0, 255);
    let b = getRandom(0, 255);

    // Si uno de los botones es presionado se retorna el color en el cuadro
    idRgbActive === false
      ? (box.style.backgroundColor = "black")
      : (box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`);

    btn_black.onclick = () => {
      idRgbActive = false;
    };

    btn_rgb.onclick = () => {
      idRgbActive = true;
    };
  });

  // Agregar el evento 'mouseout' para restaurar el color original al quitar el mouse
  box.addEventListener("mouseout", function () {
    // Restaura el color de fondo
    setTimeout(() => {
      box.style.backgroundColor = "";
    }, 1000);
  });
});
