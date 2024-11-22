// Attention : le reducer ne sait pas qu'il gère juste un compartiment et pas le state entier

// import Action Creator dans fichier recipe.js de l'Annuaire
import { SET_RECIPES } from "../actions/recipes";

// Valeur par defaut de list[] dans le State
export const initialState = {
  list: [],
};

// Traiter la réponse de l'API pour stocker la copie de list[] dans le State + MAJ
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_RECIPES: // action creator
      return {
        ...state,
        list: action.payload.recipes, // Copie du State et MAJ de list[] avec la réponse de l'API
      };

    default:
      return state;
  }
};

export default reducer;
