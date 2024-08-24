// mobile nav toggle
const dropDowns = Array.from(
  document.querySelectorAll("#navigation .dropdown"),
);
for (const item of dropDowns) {
  const onClick = () => {
    item.classList.toggle("active");
  };
  item.addEventListener("click", onClick);
}

// mobile nav retract on page click
var rocketBody = document.querySelector("body");
const rocketNavBarMenu = document.querySelector("#navigation");
const rocketHamburgerMenu = document.querySelector("#navigation .toggle");

rocketHamburgerMenu.addEventListener("click", function () {
  rocketHamburgerMenu.classList.toggle("active");
  rocketNavBarMenu.classList.toggle("active");
  rocketBody.classList.toggle("open");
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
