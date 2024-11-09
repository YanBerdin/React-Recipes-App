// import data from "src/data";
// => Récuperé depuis l'API

// import Action Creator dans Fichier recipe.js de l'Annuaire
import { SET_RECIPES } from '../actions/recipes';

// Valeur par defaut de list => []
export const initialState = {
  list: [],
};
// Traiter la réponse de l'API pour stocker la copie de list[] dans le State + MAJ
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_RECIPES:
      return {
        ...state,
        list: action.payload.recipes,
      };

    default:
      return state;
  }
};

export default reducer;
