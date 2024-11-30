//? Info si on ne sait pas s'il y a besoin d'infos en payload : on ne met pas de payload,
//? et on verra si on est bloqué au niveau du case du reducer parce qu'il manque une/des infos */

// action déclenchée quand l'un des deux inputs (email / password) change de valeur
export const CHANGE_LOGIN_FIELD = "CHANGE_LOGIN_FIELD";
/**
 * Sets the email address and password for the user.
 *
 * @param {string} newValue - The new email address or password.
 * @param {string} identifier - The identifier of the field: 'email' or 'password'.
 * @returns {Object} - The action object with the type and payload.
 */
export const changeLoginField = (newValue, identifier) => ({
  type: CHANGE_LOGIN_FIELD,
  payload: {
    newValue: newValue,
    identifier: identifier,
  },
});

export const SAVE_LOGIN_SUCCESSFUL = "SAVE_LOGIN_SUCCESSFUL";
/**
 * Enregistre le succès de la connexion.
 *
 * @param {string} nickname - Le pseudo de l'utilisateur connecté.
 * @param {string} token - Le jeton d'authentification JWT de l'utilisateur connecté.
 * @returns {Object} - L'action de sauvegarde du succès de la connexion.
 */
export const saveLoginSuccessful = (nickname, token) => ({
  type: SAVE_LOGIN_SUCCESSFUL,
  payload: {
    nickname: nickname,
    token: token,
  },
});

export const SET_FAVORITES_RECIPES = "SET_FAVORITES_RECIPES";
/**
 * Définit les recettes favorites de l'utilisateur.
 *
 * @param {Array} favorites - Les recettes favorites de l'utilisateur reçues de l'API.
 * @returns {Object} - L'action de définition des recettes favorites.
 */
export const setFavoritesRecipes = (favorites) => ({
  type: SET_FAVORITES_RECIPES,
  payload: {
    favoritesRecipes: favorites, // données à transmettre au reducer
  },
});
