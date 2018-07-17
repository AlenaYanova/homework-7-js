import * as types from "../constants/action-types";
import { combineReducers } from 'redux';

const infoIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.LOAD_POKEMON_INFO_START:
      return action.isLoading;

    default:
      return state;
  }
};

const infoHasErrored = (state = false, action) => {
  switch (action.type) {
    case types.LOAD_POKEMON_INFO_ERROR:
      return action.hasErrored;

    default:
      return state;
  }
};

const info = (state = {}, action) => {
  switch (action.type) {
    case types.LOAD_POKEMON_INFO_SUCCUESS: {
      const isCaught = (action.pokemon.caught.length > 0);
      const date = (isCaught)? action.pokemon.caught[0].date : null;
      return {
        id: action.pokemon.id,
        name: action.pokemon.name,
        isCaught: isCaught,
        date: date,
        imgSrc: `https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${action.pokemon.id}.png`,
      };
    }

    case types.LOCATION_CHANGE: {
      return {}
    }

    default:
      return state;
  }
};

const pokemonInfo = combineReducers({
  info,
  infoIsLoading,
  infoHasErrored
});

export default pokemonInfo;