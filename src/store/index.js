//? Rappel 1 store = 1 reducer
//  => 1 Reducer qui Commande et Représente tous les sous-reducer (index.js) 
//  =>   Sous-reducers -> recipie.js
//                     -> User.js

import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(),
);

const store = createStore(reducer, enhancers);

export default store;
