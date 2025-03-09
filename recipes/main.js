// main.js

// Hide and Show the recipe description
const description = document.querySelector('.recipe-description');
function handleResize() {
    if (window.innerWidth >= 600) {
        description.classList.remove('hide');
    } else {
        description.classList.add('hide');
    }
}

window.addEventListener("resize", handleResize);

// Runs immediately when the page loads
window.addEventListener("load", handleResize);