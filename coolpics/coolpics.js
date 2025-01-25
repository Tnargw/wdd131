/* Required "const" querySelectors*/
const menuButton = document.querySelector(".menu-button");
const menuItems = document.querySelector(".menu-options");

/* EventListener for button click */
menuButton.addEventListener("click", () => {
    menuItems.classList.toggle("show");
});