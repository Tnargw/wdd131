/* Required "const" querySelectors*/
const menuButton = document.querySelector(".menu-button");
const menuItems = document.querySelector(".menu-options");

menuButton.addEventListener("click", () => {
    menuItems.classList.toggle("show");
});