import { combineReducers } from 'redux';
import allPokemons from './allPokemons';
import allCaughtPokemons from './allCaughtPokemons'
import pokemonInfo from './pokemonInfo';

const pokedexApp = combineReducers({
  allPokemons,
  allCaughtPokemons,
  pokemonInfo
});


export default pokedexApp;
