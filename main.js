const hamburgerBtn = document.querySelector(".menu-icon");
const closeMenuBtn = document.querySelector(".close-menu-icon");
const mobileNavContainer = document.querySelector(".mobile-nav-container");
const arrows = document.querySelectorAll(".arrow");
const expandLinkBtns = document.querySelectorAll(".nav-link-button");
const featuresSubMenu = document.querySelectorAll(".sub-list");
const links = document.querySelectorAll(".nav-link");

// open and close btn
function toggleNav() {
  mobileNavContainer.classList.toggle("opacity0");
}
hamburgerBtn.addEventListener("click", toggleNav);
closeMenuBtn.addEventListener("click", toggleNav);

// expand menu btn
function handleExpandNav(expandLink) {
  expandLink.childNodes[1].classList.toggle("flipped-arrow");
  if (expandLink.name === "feature") {
    featuresSubMenu[0].classList.toggle("hide-sub-list");
    featuresSubMenu[1].classList.add("hide-sub-list");
    document.addEventListener("click", (e) => {});
  }
  if (expandLink.name === "company") {
    featuresSubMenu[1].classList.toggle("hide-sub-list");
    featuresSubMenu[0].classList.add("hide-sub-list");
  }
}
expandLinkBtns.forEach((el) =>
  el.addEventListener("click", () => {
    handleExpandNav(el);
  })
);

// close menu
links.forEach((link) => {
  link.addEventListener("click", () => {
    toggleNav();
  });
});

document.querySelector("main").addEventListener("click", () => {
  featuresSubMenu.forEach((feature) => feature.classList.add("hide-sub-list"));
});
