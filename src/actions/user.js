// action déclenchée quand l'un des deux inputs (email / password) change de valeur
export const CHANGE_LOGIN_FIELD = "CHANGE_LOGIN_FIELD";
export const SAVE_LOGIN_SUCCESSFUL = "SAVE_LOGIN_SUCCESSFUL";

/* astuce si on ne sait pas s'il y a besoin d'infos en payload : on ne met pas de payload,
et on verra si on est bloqué au niveau du case du reducer parce qu'il manque une/des infos */

export const changeLoginField = (newValue, identifier) => ({
  type: CHANGE_LOGIN_FIELD,
  payload: {
    newValue: newValue,
    identifier: identifier,
  },
});

export const saveLoginSuccessful = (nickname, token) => ({
  type: SAVE_LOGIN_SUCCESSFUL,
  payload: {
    nickname: nickname,
    token: token,
  },
});
