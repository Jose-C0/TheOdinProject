let arrayColors = ["#7c75ca", "#d88f39", "#5e8f4d", "#ca7599", "#4692d9", "#5e8f4d" ];
const cardBackground = document.querySelectorAll(".img-card");

let countColors = 0;

for (const entry of cardBackground.entries()) {
    // console.log(entry);
    entry[1].style.backgroundColor = arrayColors[countColors];
    countColors ++; 
}