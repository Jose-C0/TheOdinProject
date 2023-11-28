function getRandom(min, max) {
  return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
}


// button
const btn_black = document.getElementById("btn-black");
const btn_rgb = document.getElementById("btn-rgb");
const btn_boxesNumber = document.getElementById("btn-boxesNumber");

const textRight = document.getElementById("text-right");

let grid = document.getElementById("grid-container");
let div = document.createElement("div");

// Create 16 * 16 div in grid-container
let numberOfBox = 256;

for (let index = 0; index < numberOfBox; index++) {
  div = document.createElement("div");
  div.className = "box";
  grid.appendChild(div);
}

// Agregar el evento 'mouseover' a cada elemento .box
let boxes = grid.querySelectorAll(".box");
SetEventMouseover(numberOfBox);

function SetEventMouseover(numberOfBox) {
  let idRgbActive = false;
  textRight.textContent = "Number of boxes: " + numberOfBox;

  boxes.forEach(function (box) {
    let alpha = 0.15;
    box.addEventListener("mouseover", function () {
      // Code to be executed when the mouse hovers over the .box element
      let r = getRandom(0, 255);
      let g = getRandom(0, 255);
      let b = getRandom(0, 255);

      // If one of the buttons is pressed, the color in the box is returned.
      idRgbActive === false
        ? (box.style.backgroundColor = `rgb(0,0,0 ,${alpha})`)
        : (box.style.backgroundColor = `rgb(${r}, ${g}, ${b}, ${alpha})`);

      btn_black.onclick = () => {
        idRgbActive = false;
      };

      btn_rgb.onclick = () => {
        idRgbActive = true;
      };

      if (alpha <= 1) alpha += 0.1;
    });

    // Add 'mouseout' event to restore the original color when the mouse is removed
    box.addEventListener("mouseout", function () {
      // Restore background color
      setTimeout(() => {
        box.style.backgroundColor = "";
      }, 1000);
    });
  });
}

// CHANGE NUMBER OF BOXES
btn_boxesNumber.onclick = () => {
  let numberOfBox = Number(
    window.prompt("Insert the number of boxes you want", "256")
  );

  if (numberOfBox) {
    boxes.forEach((item) => item.remove()); // Remmove all box
    for (let index = 0; index < numberOfBox; index++) {
      // Create boxes
      div = document.createElement("div");
      div.className = "box";
      grid.appendChild(div);
    }

    boxes = grid.querySelectorAll(".box");

    grid.style.gridTemplateColumns = `repeat(${Math.ceil(
      Math.sqrt(numberOfBox)
    )}, 1fr)`;

    SetEventMouseover(numberOfBox);
  }
};
