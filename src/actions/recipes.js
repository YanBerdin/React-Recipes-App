export const SET_RECIPES = 'SET_RECIPES';

// Rapperl : 
// il faut un payload sur l'action si on a besoin d'une information au niveau du reducer
// ET que cette information n'est pas diponible dans le state

export const setRecipes = (data) => ({
  type: SET_RECIPES, // type de l'action
  payload: {
    recipes: data, // données à transmettre au reducer
  },
});

