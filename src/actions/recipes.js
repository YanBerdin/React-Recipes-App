export const SET_RECIPES = 'SET_RECIPES';

// Rapperl : 
// il faut un payload sur l'action si on a besoin d'une information au niveau du reducer
// ET que cette information n'est pas diponible dans le state
// ici, on a besoin de transmettre les recettes récupérées de l'API
// au reducer des recettes
export const setRecipes = (favorites) => ({
  type: SET_RECIPES, // type de l'action
  payload: {
    recipes: favorites, // données à transmettre au reducer
  },
});

