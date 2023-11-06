import './style.css'
import { recetteMuffins } from './recipes/muffinRecipe';
import { recetteCookies } from './recipes/cookieRecipe';

const recipeTitle = document.querySelector('.recipe-title');
const ingredientsList = document.querySelector('.ingredients-list');
const stepsList = document.querySelector('.steps-list');

// Affiche les détails de la recette
function displayRecipeDetails(recipe) {
  recipeTitle.textContent = recipe.name;
  ingredientsList.innerHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
  stepsList.innerHTML = recipe.steps.map(step => `<li>${step}</li>`).join('');
}

// Simulation du clic sur une recette
displayRecipeDetails(recetteMuffins);
displayRecipeDetails(recetteCookies);
