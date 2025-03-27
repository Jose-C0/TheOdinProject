const checkboxSelector = document.querySelector('.selectall');
const check = document.querySelectorAll('.check');
const btnDelete = document.getElementById('btn-alluser-delete');
const itemsSelected = document.querySelector('.itemsSelected');

const list = [];
let countMarked = 0;

check.forEach((check) => {
  list.push({ id: check.id, isMarked: check.checked });
});

checkboxSelector.addEventListener('change', (e) => {
  // This loop is for activating or deactivating all chekboxes, then make change in some styles of html
  if (e.target.checked) {
    check.forEach((item) => {
      item.checked = true;
      list.find((x) => x.id === item.id).isMarked = true;
      countMarked = list.length;
    });
    isCheckboxMarked();
  } else {
    check.forEach((item) => {
      item.checked = false;
      list.find((x) => x.id === item.id).isMarked = false;
      countMarked = 0;
    });
    isCheckboxMarked();
  }
});

check.forEach((check) => {
  // This loop is to detect the checkbox that are selected. Then make change in some styles of html (Ex: button delete)
  check.addEventListener('change', (e) => {
    if (e.target.checked) {
      list.find((x) => x.id === e.target.id).isMarked = true;
      countMarked += 1;
      isCheckboxMarked();
    }
    if (!e.target.checked) {
      list.find((x) => x.id === e.target.id).isMarked = false;
      countMarked -= 1;
      isCheckboxMarked();
    }
  });
});

function isCheckboxMarked () {
  // This function is used for make changes of styles of HTML
  if (list.map((x) => x.isMarked).includes(true)) {
    btnDelete.style.background = '#596d48';
    btnDelete.style.pointerEvents = 'all';
    itemsSelected.innerText = countMarked;
  }
  if (list.map((x) => x.isMarked).every((value) => value === false)) {
    btnDelete.style.background = '#596d4824';
    btnDelete.style.pointerEvents = 'none';
    itemsSelected.innerText = countMarked;
  }
}
