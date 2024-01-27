// ========= START: Modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const openModalBtnEdit = document.querySelectorAll(".btn-edit");
const closeModalBtn = document.querySelector(".btn-close");
const body = document.querySelector("body");

// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  body.style.overflow = "auto";
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  body.style.overflow = "hidden";
};
// open modal event
openModalBtn.addEventListener("click", openModal);
// ========= END: Modal

const btnSubmit = document.getElementById("form");
const containerClassLibrary = document.querySelector(".container");

const myLibrary = [];
let countOfBookLibrary = myLibrary.length;

function Book(title, author, pages, wasRead, state) {
  // the constructor...
  this.author = author;
  this.pages = pages;
  this.wasRead = wasRead;
  this.title = title;
  this.state = state;
}

const setDefaultBooks = () => {
  let b1 = new Book(
    "Cien años de soledad",
    "Gabriel García Márquez",
    432,
    true,
    true
  );
  let b2 = new Book(
    "El amor en los tiempos del cólera",
    "Gabriel García Márquez",
    368,
    false,
    true
  );
  let b3 = new Book("Rayuela", "Julio Cortázar", 656, true, true);
  let b4 = new Book(
    "La casa de los espíritus",
    "Isabel Allende",
    432,
    true,
    true
  );

  myLibrary.push(b1, b2, b3, b4);
};

// close modal function
const closeModal2 = function () {
  // close the modal when the close button and overlay is clicked
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  body.style.overflow = "auto";
};

function addBookToLibrary() {
  // Create items in html for view
  myLibrary.map((item) => {
    //  while the element is true, it is created on the screen
    if (item.state) setCardInDom(item);
  });
}

function deleteBookToLibrary(button) {
  var card = button.closest(".card");

  // update de state of myLibrary
  let indexOfBook = Number(card.className.replace("card bookNumber-", ""));

  // while the element is true, it is created on the screen
  myLibrary[indexOfBook].state = false;

  card.parentNode.removeChild(card);
}

function editBookToLibrary(button) {
  const card = button.closest(".card");

  // update de state of myLibrary
  let indexOfBook = Number(card.className.replace("card bookNumber-", ""));

  console.table(myLibrary[indexOfBook]);

   openModal(); 

  // myLibrary[indexOfBook].author = false;
  // myLibrary[indexOfBook].pages = false;
  // myLibrary[indexOfBook].wasRead = false;
  // myLibrary[indexOfBook].title = false;
  // myLibrary[indexOfBook].state = false;
}

function setCardInDom(item) {
  let setDiv = document.createElement("div");
  setDiv.className = "card bookNumber-" + countOfBookLibrary++;
  setDiv.innerHTML = `
        <h2 class="title">${item.title}</h2>
        <div class="info-card">
          <p>Author: ${item.author}</p>
          <p>Pages: ${item.pages}</p>
          <p>Was Read: ${item.wasRead}</p>
        </div>
        <div class="options-card">
          <button onclick="editBookToLibrary(this)" class="btn-edit" type="button">Edit</button>
          <button onclick="deleteBookToLibrary(this)" class="btn-delete" type="button">Delete</button>
        </div>

     `;

  return containerClassLibrary.appendChild(setDiv);
}

function addBookToArray(e) {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.target));

  let wasReadStatus = data.wasRead === "on" ? "true" : "false";

  let b = new Book(data.title, data.author, data.pages, wasReadStatus, false);

  // add new item in array
  myLibrary.push(b);

  setCardInDom(myLibrary.at(-1));

  closeModal2();
}

btnSubmit.addEventListener("submit", addBookToArray);

setDefaultBooks();
addBookToLibrary();
