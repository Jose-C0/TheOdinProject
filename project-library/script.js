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

let addNewBook = document.getElementById("addNewBook");

addNewBook.addEventListener("click", () => {

  let b1 = new Book("El Arte De La Guerra", "Maquiavvelo", 60, true, true);

  myLibrary.push(b1);

  setCardInDom(myLibrary.at(-1));
});

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

let containerClassLibrary = document.querySelector(".container");

function setCardInDom (item) {

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
          <button class="btn-edit" type="button">Edit</button>
          <button onclick="deleteBookToLibrary(this)" class="btn-delete" type="button">Delete</button>
        </div>

     `;

  return containerClassLibrary.appendChild(setDiv);
};



setDefaultBooks();

addBookToLibrary();


// TODO: 6. Añade un botón en la pantalla de cada libro para cambiar su estado de lectura.
// Para facilitar esto usted querrá crear la función que cambia el estado de lectura de un
// libro en su instancia de prototipo de Libro.
