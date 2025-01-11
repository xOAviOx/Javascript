import * as model from './model.js';
import { MODAL_CLOSE_SEC } from './config.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';

import 'regenerator-runtime/runtime';

//Holding up the state

// if (module.hot) {
//   module.hot.accept();
// }

//In helpers
// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

//render spinner also belongs in the view

// const renderSpinner = function (parentEl) {
//   const markup = `
//     <div class="spinner">
//           <svg>
//             <use href=${icons}#icon-loader></use>
//           </svg>
//         </div>`;
//   parentEl.innerHTML = '';
//   parentEl.insertAdjacentHTML('afterbegin', markup);
// };
const controlRecipes = async function () {
  try {
    //Looking for hash ID from URL of page
    const id = window.location.hash.slice(1);

    //guard clause for no id in hash
    if (!id) return;
    //recipeview because its in recipe view
    recipeView.renderSpinner();

    //0) Update results view to mark selected search result
    resultView.update(model.getSearchResultsPage());

    //1) Updating bookmarks view
    bookmarksView.update(model.state.bookmarks);

    //2 . Loading recipe
    //load recipe will give us a promise so we need to handle it
    await model.loadRecipe(id);

    //3.Rendering recipe
    //render method will accept the data and store it into the recipeView class's Object
    recipeView.render(model.state.recipe);
    //Test

    // controlServings();
    //Going in loadRecipe function in model js because its more of a business Logic remember.

    // const res = await fetch(
    //   `https://forkify-api.jonas.io/api/v2/recipes/${id}`
    //   // 'https://forkify-api.jonas.io/api/v2/recipes/664c8f193e7aa067e94e863d'
    // );
    // const data = await res.json();
    // if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    // // console.log(res, data);
    // let { recipe } = data.data;
    // recipe = {
    //   id: recipe.id,
    //   title: recipe.title,
    //   publisher: recipe.publisher,
    //   sourceUrl: recipe.source_url,
    //   image: recipe.image_url,
    //   servings: recipe.servings,
    //   cookingTime: recipe.cooking_time,
    //   ingredients: recipe.ingredients,
    // };
    // console.log(recipe);

    //2 Rendering recipe

    //This is going in in recipeView.js in generator function to handle all the markup

    // const markup = `
    //  <figure class="recipe__fig">
    //       <img src= ${recipe.image} alt=${recipe.title} class="recipe__img" />
    //       <h1 class="recipe__title">
    //         <span>${recipe.title}</span>
    //       </h1>
    //     </figure>

    //     <div class="recipe__details">
    //       <div class="recipe__info">
    //         <svg class="recipe__info-icon">
    //           <use href=`${icons}#icon-clock`></use>
    //         </svg>
    //         <span class="recipe__info-data recipe__info-data--minutes">${
    //           recipe.cookingTime
    //         }</span>
    //         <span class="recipe__info-text">minutes</span>
    //       </div>
    //       <div class="recipe__info">
    //         <svg class="recipe__info-icon">
    //           <use href=${icons}#icon-users></use>
    //         </svg>
    //         <span class="recipe__info-data recipe__info-data--people">${
    //           recipe.servings
    //         }</span>
    //         <span class="recipe__info-text">servings</span>

    //         <div class="recipe__info-buttons">
    //           <button class="btn--tiny btn--increase-servings">
    //             <svg>
    //               <use href=${icons}#icon-minus-circle></use>
    //             </svg>
    //           </button>
    //           <button class="btn--tiny btn--increase-servings">
    //             <svg>
    //               <use href=${icons}#icon-plus-circle></use>
    //             </svg>
    //           </button>
    //         </div>
    //       </div>

    //       <div class="recipe__user-generated">
    //         <svg>
    //           <use href=${icons}#icon-user></use>
    //         </svg>
    //       </div>
    //       <button class="btn--round">
    //         <svg class="">
    //           <use href=${icons}#icon-bookmark-fill></use>
    //         </svg>
    //       </button>
    //     </div>

    //     <div class="recipe__ingredients">
    //       <h2 class="heading--2">Recipe ingredients</h2>
    //       <ul class="recipe__ingredient-list">
    //       ${recipe.ingredients
    //         .map(ing => {
    //           return `
    //         <li class="recipe__ingredient">
    //           <svg class="recipe__icon">
    //             <use href=${icons}#icon-check></use>
    //           </svg>
    //           <div class="recipe__quantity">${ing.quantity}</div>
    //           <div class="recipe__description">
    //             <span class="recipe__unit">${ing.unit}</span>
    //             ${ing.description}
    //           </div>
    //         </li>
    //         `;
    //         })
    //         .join('')}

    //     </div>

    //     <div class="recipe__directions">
    //       <h2 class="heading--2">How to cook it</h2>
    //       <p class="recipe__directions-text">
    //         This recipe was carefully designed and tested by
    //         <span class="recipe__publisher">${
    //           recipe.publisher
    //         }</span>. Please check out
    //         directions at their website.
    //       </p>
    //       <a
    //         class="btn--small recipe__btn"
    //         href= ${recipe.sourceUrl}
    //         target="_blank"
    //       >
    //         <span>Directions</span>
    //         <svg class="search__icon">
    //           <use href=${icons}#icon-arrow-right></use>
    //         </svg>
    //       </a>
    //     </div>`;

    // recipeContainer.innerHTML = '';
    // recipeContainer.insertAdjacentHTML('afterbegin', markup);
  } catch (err) {
    recipeView.renderError(``);
    console.error(err);
  }
};
// controlRecipes();

// going in recipe view for pub sub design pattern
// ['hashchange', 'load'].forEach(event =>
//   window.addEventListener(event, controlRecipes)
// );

//Looking for hash change event
// window.addEventListener('hashchange', showRecipe);

//Looking for hash load event
// window.addEventListener('load', showRecipe);

//a fucntion to call for search results

const controlSeachResults = async function () {
  //1) Get search query
  try {
    resultView.renderSpinner();
    //Looking for query from search view
    const query = searchView.getQuery();
    if (!query && query === '') return;

    //2) Load Search results
    await model.loadSearchResults(query);
    //rendering spinner on search results

    //3) render results
    // console.log(model.state.search.results);
    // resultView.render(model.state.search.results);

    //pagination page
    resultView.render(model.getSearchResultsPage());

    //4. Render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (gotoPage) {
  //3) render new  results

  //pagination page
  resultView.render(model.getSearchResultsPage(gotoPage));

  //4. Render new pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view
  // recipeView.render(model.state.recipe);\
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  //Add/remove bookmark
  if (!model.state.recipe.bookmarked) {
    model.addBookMark(model.state.recipe);
  } else {
    model.deleteBookmark(model.state.recipe.id);
  }
  // model.addBookMark(model.state.recipe);
  // console.log(model.state.recipe);

  //Update recipe view
  recipeView.update(model.state.recipe);

  //render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  console.log(newRecipe);
  try {
    //spinner
    addRecipeView.renderSpinner();
    //uplaoad the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // Render recipe
    recipeView.render(model.state.recipe);

    //success message
    addRecipeView.renderMessage();

    //render bookmmark view
    bookmarksView.render(model.state.bookmarks);

    //change id in the url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);
    // window.history.back();
    //close the form window
    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error('!!', err);
    addRecipeView.renderError(err.message);
  }
};
const newFetaure = function () {
  console.log('Welcome tpo app');
};
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSeachResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
  newFetaure();
};
init();
