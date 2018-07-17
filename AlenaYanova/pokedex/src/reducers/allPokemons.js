import * as types from "../constants/action-types";
import { combineReducers } from 'redux';

const pokemonsIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.LOAD_POKEMONS_START:
      return action.isLoading;

    default:
      return state;
  }
};

const pokemonsHasErrored = (state = false, action) => {
  switch (action.type) {
    case types.LOAD_POKEMONS_ERROR:
      return action.hasErrored;

    default:
      return state;
  }
};

const catchIsProcessing = (state = false, action) => {
  switch (action.type) {
    case types.CATCH_POKEMON_START:
      return action.isLoading;

    default:
      return state;
  }
};

const catchHasErrored = (state = false, action) => {
  switch (action.type) {
    case types.CATCH_POKEMON_ERROR:
      return action.hasErrored;

    default:
      return state;
  }
};

const pokemons = (state = { items: [], page: 0 }, action) => {
  switch (action.type) {
    case types.LOAD_POKEMONS_SUCCUESS:
      return {
        items: [...state.items, ...preparePokemonsData(action.pokemons)],
        page: state.page +1
      };

    case types.CATCH_POKEMON_SUCCUESS: {
      let pokemonsWithCaughtOne = state.items;
      pokemonsWithCaughtOne[pokemonsWithCaughtOne.indexOf(action.caughtPokemon)].isCaught = true;
      return {
        items: pokemonsWithCaughtOne,
        ...state
      };
    }

    case types.LOCATION_CHANGE: {
      return { items: [], page: 0 }
    }

    default:
      return state;
  }
};

const allPokemons = combineReducers({
  pokemons,
  pokemonsIsLoading,
  pokemonsHasErrored,
  catchIsProcessing,
  catchHasErrored
});

export default allPokemons;

function preparePokemonsData (pokemons) {
  return pokemons.map((pokemon) => (
    {
      id: pokemon.id,
      name: pokemon.name,
      imgSrc: `https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${pokemon.id}.png`,
      isCaught: (pokemon.caught.length > 0),
    }
  ))
}