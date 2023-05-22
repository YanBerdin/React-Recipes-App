import { combineReducers } from 'redux';

import recipesReducer from './recipes';
import userReducer from './user';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  user: userReducer,
});

export default rootReducer;
