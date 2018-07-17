import * as types from "../constants/action-types";
import { combineReducers } from 'redux';

const pokemonsIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.LOAD_CAUGHT_POKEMONS_START:
      return action.isLoading;

    default:
      return state;
  }
};

const pokemonsHasErrored = (state = false, action) => {
  switch (action.type) {
    case types.LOAD_CAUGHT_POKEMONS_ERROR:
      return action.hasErrored;

    default:
      return state;
  }
};

const pokemons = (state = { items: [], page: 0 }, action) => {
  switch (action.type) {
    case types.LOAD_CAUGHT_POKEMONS_SUCCUESS:
      return {
        items: [...state.items, ...preparePokemonsData(action.pokemons)],
        page: state.page +1
      };

    case types.LOCATION_CHANGE: {
      return { items: [], page: 0 }
    }

    default:
      return state;
  }
};

const allCaughtPokemons = combineReducers({
  pokemons,
  pokemonsIsLoading,
  pokemonsHasErrored
});

export default allCaughtPokemons;

function preparePokemonsData (pokemons) {
  return pokemons.map((pokemon) => (
    {
      id: pokemon.pokemonId,
      name: pokemon.pokemonName,
      imgSrc: `https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${pokemon.pokemonId}.png`,
      isCaught: true,
    }
  ))
}