import {
  CHANGE_LOGIN_FIELD,
  SAVE_LOGIN_SUCCESSFUL,
  SET_FAVORITES_RECIPES,
} from "../actions/user";

export const initialState = {
  isLogged: false,
  email: "",
  password: "",
  nickname: "",
  token: null, // JWT
  favoritesRecipes: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      // deux traitements sur une seule action : soit changer email, soit changer password
      if (action.payload.identifier === "email") {
        return {
          ...state,
          email: action.payload.newValue,
        };
      }
      // if (action.payload.identifier === 'password')
      return {
        ...state,
        password: action.payload.newValue,
      };

    /* 
      return {
        ...state,
        [action.payload.identifier]: action.payload.newValue
      }
    */

    case SAVE_LOGIN_SUCCESSFUL:
      return {
        ...state,
        isLogged: true,
        nickname: action.payload.nickname,
        token: action.payload.token,
        email: "",
        password: "", //! sécurité : supprimer les identifiants du state
      };

    case SET_FAVORITES_RECIPES: // action creator
      return {
        ...state,
        favoritesRecipes: action.payload.favoritesRecipes,
      };

    default:
      return state;
  }
};

export default reducer;
