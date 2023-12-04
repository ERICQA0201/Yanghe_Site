// side_column variables
const side_column = document.querySelector("[data-side_column]");
const side_columnBtn = document.querySelector("[data-side_column-btn]");

// side_column toggle functionality for mobile
side_columnBtn.addEventListener("click", function () { elementToggleFunc(side_column); });

const elementToggleFunc = function (elem) { elem.classList.toggle("activate"); }


//------------------------------------navigation part------------------------------------------------
// page navigation variables
const navigation_elements = document.querySelectorAll("[data-nav-link]");
const Different_pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigation_elements.length; i++) {
  navigation_elements[i].addEventListener("click", function () {

    for (let i = 0; i < Different_pages.length; i++) {
      if (this.innerHTML.toLowerCase() === Different_pages[i].dataset.page) {
        Different_pages[i].classList.add("activate");
        navigation_elements[i].classList.add("activate");
        window.scrollTo(0, 0);
      } else {
        Different_pages[i].classList.remove("activate");
        navigation_elements[i].classList.remove("activate");
      }
    }

  });
}

//-------------------------------------filter part---------------------------------------------

// custom select variables
const select = document.querySelector("[data-select]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");


// filter variables
const fiter_elements = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < fiter_elements.length; i++) {

    if (selectedValue === "all" || selectedValue === fiter_elements[i].dataset.category) {
      fiter_elements[i].classList.add("activate");
    } else {
      fiter_elements[i].classList.remove("activate");
    }

  }

}

// select filter for only the destop view
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("activate");
    this.classList.add("activate");
    lastClickedBtn = this;

  });

}