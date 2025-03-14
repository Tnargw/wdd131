// main.js
import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    return list[random(list.length)];
}

function recipeTemplate(recipe) {
    return `<section class="recipe-card"> 
        <img class="recipe-image" src="${recipe.image}" alt="Image of ${recipe.name}" />
        <div class="recipe-content">
            <ul class="recipe-tags">
                ${tagsTemplate(recipe.tags)}
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

function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        html += i <= rating ? `<span class="icon-star">⭐</span>` : `<span class="icon-star-empty">☆</span>`;
    }
    html += `</span>`;
    return html;
}

function renderRecipes(recipeList) {
    const outputElement = document.querySelector('.recipe-container');
    if (outputElement) {
        outputElement.innerHTML = recipeList.map(recipeTemplate).join('');
        handleResize();
    }
}

// handleResize function
function handleResize() {
    const description = document.querySelectorAll('.recipe-description');
    if (description) {
        if (window.innerWidth >= 600) {
            description.classList.remove('hide');
        } else {
            description.classList.add('hide');
        }
    }
}

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

function searchHandler(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value.toLowerCase();
    renderRecipes(filterRecipes(query));
}

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

// Attach event listeners
document.getElementById('search-form').addEventListener('submit', searchHandler);
window.addEventListener("resize", handleResize);
window.addEventListener("load", init);
