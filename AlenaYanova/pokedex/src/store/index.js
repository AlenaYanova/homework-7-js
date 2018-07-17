import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import pokedexApp from "../reducers/index";

const store = createStore(
  pokedexApp,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      )));

export default store;