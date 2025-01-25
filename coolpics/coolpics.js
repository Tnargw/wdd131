const menuButton = document.querySelector(".menu-button");
const menuItems = document.querySelector(".menu-options");

menuButton.addEventListener("click", () => {
    console.log("Menu button clicked");
    menuItems.classList.toggle("show");
});