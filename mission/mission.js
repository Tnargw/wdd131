const selectTheme = document.querySelector("#select-theme");
const body = document.body;
const logo = document.querySelector(".logo");

// Changes the pages theme based on the value being "light" or "dark"
function changeTheme() {
    // Add the dark class and change the logo
    if (selectTheme.value == "dark") {
        body.classList.add("dark");
        logo.src = "byui-logo_white.png"
    }
    // Remove the dark class and revert the logo
    else if (selectTheme.value == "light") {
        body.classList.remove("dark");
        logo.src = "byui-logo_blue.webp"
    }
}

selectTheme.addEventListener("change", changeTheme);
