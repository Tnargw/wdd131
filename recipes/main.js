// main.js
import recipes from './recipes.mjs';



// Returns a random integer from 0 to num-1
function random(number) {
    return Math.floor(Math.random() * number);
}


// Selects a random entry from the array of recipes
function getRandomRecipe(list) {
    return list[random(list.length)];
}


// Template functions

// Generates the HTML for a recipe card
function recipeTemplate(recipe) {
    return `
    <section class="recipe-card"> 
        <img class="recipe-image" src="${recipe.image}" alt="Image of ${recipe.name}" />
        <div class="recipe-content">
            <ul class="recipe-tags">
                ${tagTemplate(recipe.tags)}
            </ul>
            <h2 class="recipe-name">${recipe.name}</h2>
            <span class="rating" role="img" aria-label="Rating: ${recipe.rating} out of 5 stars">
                ${ratingTemplate(recipe.rating)}
            </span>
            <p class="recipe-description">
                ${recipe.description}
            </p>
        </div>
    </section>`;
}


// Generates the HTML for the list of tags
function tagTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}


// Generates the HTML for the star rating
function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `\t<span aria-hidden="true" class="icon-star">⭐</span>\n`;
        } else {
            html += `\t<span aria-hidden="true" class="icon-star-empty">☆</span>\n`;
        }
    }
    html += `</span>`;
    return html;
}



// Renders the provided recipes inside
function renderRecipes(recipeList) {
    const outputElement = document.querySelector('.recipe-container');
    if (outputElement) {
        outputElement.innerHTML = recipeList.map(recipeTemplate).join('');
        handleResize();
    }
}


// Shows/hides descriptions based on screen size

function handleResize() {
    document.querySelectorAll(".recipe-description").forEach(description => {
        description.classList.toggle('hide', window.innerWidth < 600);
    });
}


// Event Handlers

// Runs on page load and displays a random recipe
function init() {
    const recipe = getRandomRecipe(recipes);
    renderRecipes([recipe]);
}

// Handles search input and filters the recipes
function searchHandler(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    renderRecipes(filterRecipes(query));
}


// Filters recipes based on user input
function filterRecipes(query) {
    return recipes
        .filter(recipe => 
            recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
            recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query))
        )
        .sort((a, b) => a.name.localeCompare(b.name));
}

// Event listeners
document.getElementById('search-form').addEventListener('submit', searchHandler);
window.addEventListener("resize", handleResize);
window.addEventListener("load", init);
