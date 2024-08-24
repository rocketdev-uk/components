// add classes for mobile navigation toggling
var rocketbody = document.querySelector("body");
const rocketnavbarMenu = document.querySelector("#navigation");
const rockethamburgerMenu = document.querySelector("#navigation .toggle");

rockethamburgerMenu.addEventListener("click", function () {
  rockethamburgerMenu.classList.toggle("active");
  rocketnavbarMenu.classList.toggle("active");
  rocketbody.classList.toggle("open");
  // run the function to check the aria-expanded value
  ariaExpanded();
});

// checks the value of aria expanded on the ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
  const rocketUL = document.querySelector("#expanded");
  const rocketExpanded = rocketUL.getAttribute("aria-expanded");

  if (rocketExpanded === "false") {
    rocketUL.setAttribute("aria-expanded", "true");
  } else {
    rocketUL.setAttribute("aria-expanded", "false");
  }
}

// This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll
// animations with the navbar

document.addEventListener("scroll", (e) => {
  const scroll = document.documentElement.scrollTop;
  if (scroll >= 100) {
    document.querySelector("body").classList.add("scroll");
  } else {
    document.querySelector("body").classList.remove("scroll");
  }
});

// mobile nav toggle code
const dropDowns = Array.from(
  document.querySelectorAll("#navigation .dropdown"),
);
for (const item of dropDowns) {
  const onClick = () => {
    item.classList.toggle("active");
  };
  item.addEventListener("click", onClick);
}
