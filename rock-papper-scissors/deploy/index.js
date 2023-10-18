const options = [
  { id: 1, name: "Rock" },
  { id: 2, name: "Papper" },
  { id: 3, name: "Scissors" }
];

const rock = options.find(x => x.name == "Rock");
const papper = options.find(x => x.name == "Papper");
const scissors = options.find(x => x.name == "Scissors");

// button
const btn = document.querySelectorAll("#btn-rock, #btn-papper, #btn-scissors");
const btn_rock = document.getElementById("btn-rock");
const btn_papper = document.getElementById("btn-papper");
const btn_scissors = document.getElementById("btn-scissors");
const pc_btn_rock = document.getElementById("pc-btn-rock");
const pc_btn_papper = document.getElementById("pc-btn-papper");
const pc_btn_scissors = document.getElementById("pc-btn-scissors");


// text of page
const textFirst5 = document.getElementById("textFirst5");
const scoreYou = document.getElementById("scoreYou");
const scoreComputer = document.getElementById("scoreComputer");
const score = document.getElementById("score");
const textResultRound = document.getElementById("textResultRound");
const msgModal = document.getElementById("msgModal");
const textOver = document.getElementById("textOver");
const lineBreak = document.createElement("br");

const red = "red";
const white = "#ffffff";

// count of score
let playerwin = 0;
let computerWin = 0;

// Get the modal
let modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
let cont_btn = document.getElementsByClassName("continue")[0];

// When the user clicks on <span> (x) or <button>Continue, close the modal
cont_btn.onclick = function () {
  modal.style.display = "none";
}
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function getRandom(min, max) {
  return parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
}

function getComputerChoice() {
  let numRandom = parseInt(getRandom(options.at(0).id, options.at(-1).id));
  let choiceComputer = options.find(x => x.id == numRandom).id;
  return choiceComputer;
}

function getChangeColorButtonPc(computerChoice) {
  // When computer chocie option, button change color
  if (computerChoice === rock.id) {
    pc_btn_papper.style.backgroundColor = white;
    pc_btn_scissors.style.backgroundColor = white;
    pc_btn_rock.style.backgroundColor = red;
  }
  if (computerChoice === papper.id) {
    pc_btn_scissors.style.backgroundColor = white;
    pc_btn_rock.style.backgroundColor = white;
    pc_btn_papper.style.backgroundColor = red;
  }
  if (computerChoice === scissors.id) {
    pc_btn_papper.style.backgroundColor = white;
    pc_btn_rock.style.backgroundColor = white;
    pc_btn_scissors.style.backgroundColor = red;
  }
}

function playRound(playerSelection, computerSelection) {
  let playerName = options.find(x => x.id === playerSelection).name;
  let computerName = options.find(x => x.id === computerSelection).name;

  // TIE
  if (playerSelection === computerSelection) {
    textOver.textContent = "";
    return "TIE";
  }

  // when player win
  if (playerSelection === rock.id && computerSelection === scissors.id ||
    playerSelection === papper.id && computerSelection === rock.id ||
    playerSelection === scissors.id && computerSelection === papper.id
  ) {
    playerwin++
    textOver.textContent = playerName + " better " + computerName;
    scoreYou.textContent = "Score: " + playerwin;
    return "YOU WIN";
  }

  // when computer win
  if (computerSelection === rock.id && playerSelection === scissors.id ||
    computerSelection === papper.id && playerSelection === rock.id ||
    computerSelection === scissors.id && playerSelection === papper.id
  ) {
    computerWin++
    textOver.textContent = computerName + " better " + playerName;
    scoreComputer.textContent = "Score: " + computerWin;
    return "YOU LOST";
  }
}

function endGame() {
  if (playerwin === 5 || computerWin === 5) // gameOver (the best of 5) 
  {
    playerwin > computerWin ?
      (msgModal.textContent = 'You won!') :
      (msgModal.textContent = 'You lost...');

    score.textContent = "PLAYER- \t" + playerwin + "  COMPUTER-" + computerWin;
    modal.style.display = "block"; // When the round end, open the modal

    // reset values
    computerWin = 0;
    playerwin = 0;
    textFirst5.textContent = "First to score 5 points wins";
    textOver.textContent = "";
    textResultRound.textContent = "";
    scoreComputer.textContent = "Score: ";
    scoreYou.textContent = "Score: ";

    // reset color of all buttons
    const buttonAll = document.querySelectorAll("#btn-rock, #btn-papper, #btn-scissors, #pc-btn-rock, #pc-btn-papper, #pc-btn-scissors"); 
    buttonAll.forEach((button) => {
      button.style.backgroundColor = white;
    });

    console.log("GAME OVER");
  }
}

function game() {
  let playerSelection;
  let roundGameResult;
  let computerChoice;

  btn.forEach((button) => {
    button.addEventListener('click', () => {
      textFirst5.textContent = "";
      computerChoice = getComputerChoice();

      if (button.id === "btn-rock") {
        button.style.backgroundColor = "blue";
        btn_papper.style.backgroundColor = white;
        btn_scissors.style.backgroundColor = white;
        playerSelection = rock.id;
      }
      if (button.id === "btn-papper") {
        button.style.backgroundColor = "blue";
        btn_rock.style.backgroundColor = white;
        btn_scissors.style.backgroundColor = white;
        playerSelection = papper.id;
      }
      if (button.id === "btn-scissors") {
        button.style.backgroundColor = "blue";
        btn_rock.style.backgroundColor = white;
        btn_papper.style.backgroundColor = white;
        playerSelection = scissors.id;
      }

      getChangeColorButtonPc(computerChoice);

      roundGameResult = playRound(playerSelection, computerChoice); // Select Option

      textResultRound.textContent = roundGameResult;

      endGame(); // gameOver (the best of 5) 
    });
  });
}

game();