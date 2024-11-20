import { combineReducers } from 'redux'; //? Reducer principal qui combine les sous-reducers

import recipesReducer from './recipes'; // Sous-reducer
import userReducer from './user'; // Sous-reducer

const rootReducer = combineReducers({  //? lien entre le store, les reducers et le reudcer principal
  recipes: recipesReducer, // Sous-composant du store: Sous-reducer
  user: userReducer,
});

export default rootReducer;
