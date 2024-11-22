import { CHANGE_LOGIN_FIELD, SAVE_LOGIN_SUCCESSFUL } from "../actions/user";

export const initialState = {
  logged: false,
  // contenu du champ email du formulaire de login
  email: "",
  // contenu du champ mot de passe du formulaire de login
  password: "",
  // pseudo de l'utilisateur (une fois connecté)
  nickname: "",
  // token JWT de l'utilisateur (une fois connecté)
  token: null,
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
        logged: true,
        nickname: action.payload.nickname,
        token: action.payload.token,

        //! sécurité : supprimer les identifiants du state
        email: "",
        password: "",
      };

    default:
      return state;
  }
};

export default reducer;
