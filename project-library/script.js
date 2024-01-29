const form = document.getElementById("form");

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const openModalBtnEdit = document.querySelectorAll(".btn-edit");
const closeModalBtn = document.querySelector(".btn-close");
const body = document.querySelector("body");

const containerClassLibrary = document.querySelector(".container");

const myLibrary = [];
let countOfBookLibrary = myLibrary.length;

let isBookEdit = false;
let indexOfBook;
let element_DOM_to_edit;

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

  // update the state of myLibrary
  indexOfBook = Number(card.className.replace("card bookNumber-", ""));

  const formFields = document.querySelectorAll(
    "#title, #author, #pages, #wasRead"
  );

  for (x of formFields) {
    if (x.id === "title") x.value = myLibrary[indexOfBook].title;
    if (x.id === "author") x.value = myLibrary[indexOfBook].author;
    if (x.id === "pages") x.value = myLibrary[indexOfBook].pages;
    if (x.id === "wasRead") x.checked = myLibrary[indexOfBook].wasRead;
  }

  isBookEdit = true;
  element_DOM_to_edit = card;

  openModalEdit();
}

const setBookInfoToEdit = (element_DOM_to_edit, info) => {
  return (element_DOM_to_edit.innerHTML = `
  <h2 class="title">${info.title}</h2>
  <div class="info-card">
    <p><span class="info-card-span">Author: </span> ${info.author}</p>
    <p><span class="info-card-span">Pages: </span> ${info.pages}</p>
    <p><span class="info-card-span">Was Read: </span> ${info.wasRead}</p>
  </div>
  <div class="options-card">
    <button onclick="editBookToLibrary(this)" class="btn-edit" type="button">Edit</button>
    <button onclick="deleteBookToLibrary(this)" class="btn-delete" type="button">Delete</button>
  </div>
`);
};

function setCardInDom(item) {
  let setDiv = document.createElement("div");
  setDiv.className = "card bookNumber-" + countOfBookLibrary++;
  setDiv.innerHTML = `
        <h2 class="title">${item.title}</h2>
        <div class="info-card">
          <p><span class="info-card-span">Author: </span>${item.author}</p>
          <p><span class="info-card-span">Pages: </span>${item.pages}</p>
          <p><span class="info-card-span">Was Read: </span> ${item.wasRead}</p>
        </div>
        <div class="options-card">
          <button onclick="editBookToLibrary(this)" class="btn-edit" type="button">Edit</button>
          <button onclick="deleteBookToLibrary(this)" class="btn-delete" type="button">Delete</button>
        </div>

     `;

  return containerClassLibrary.appendChild(setDiv);
}

function processBookForm(e) {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.target));

  let wasReadStatus = data.wasRead === "on" ? true : false;

  let b = new Book(data.title, data.author, data.pages, wasReadStatus, false);

  if (isBookEdit) {
    // edit item in array and add in the DOM

    myLibrary[indexOfBook].author = b.author;
    myLibrary[indexOfBook].pages = b.pages;
    myLibrary[indexOfBook].wasRead = wasReadStatus;
    myLibrary[indexOfBook].title = b.title;

    setBookInfoToEdit(element_DOM_to_edit, b);
    isBookEdit = false;
  } else {
    // add new item in array and add in the DOM

    myLibrary.push(b);

    setCardInDom(myLibrary.at(-1));
  }

  closeModal();
}

// ========= START: Modal

// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
  body.style.overflow = "auto";
  document.getElementById("form").reset();
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
  document.getElementById("submit").style.display = "inline-block";
  document.getElementById("btn-edit-submit").style.display = "none";
  body.style.overflow = "hidden";
};

const openModalEdit = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  document.getElementById("submit").style.display = "none";
  document.getElementById("btn-edit-submit").style.display = "inline-block";
  body.style.overflow = "hidden";
};

// open modal event
openModalBtn.addEventListener("click", openModal);
// ========= END: Modal

form.addEventListener("submit", processBookForm);

setDefaultBooks();
addBookToLibrary();
