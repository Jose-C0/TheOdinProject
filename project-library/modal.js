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

// openModalBtnEdit.forEach((button) => {
//   button.addEventListener("click", openModal);
 
// });
