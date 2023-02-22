const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".res-container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
