import * as types from "../constants/action-types";
import store from "../store";
import { getDateString } from '../utils';

export const catchPokemonHasStarted = (bool) => ({
  type: types.CATCH_POKEMON_START,
  isLoading: bool
});

export const catchPokemonHasErrored = (bool) => ({
  type: types.CATCH_POKEMON_ERROR,
  hasErrored: bool
});

export const catchPokemonSuccess = (caughtPokemon) => ({
  type: types.CATCH_POKEMON_SUCCUESS,
  caughtPokemon
});

export const catchPokemon = (id) => {
  return dispatch => {
    dispatch(catchPokemonHasStarted(true));
    const caughtPokemon = store.getState().allPokemons.pokemons.items.find(pokemon => pokemon.id.toString() === id.toString());
    if (caughtPokemon === undefined)
      throw Error('pokemon id not exist');

    if (!caughtPokemon.isCaught)
      fetch(`http://localhost:3000/caught`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          pokemonId: caughtPokemon.id,
          pokemonName: caughtPokemon.name,
          date: getDateString(),
        })
      })
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          dispatch(catchPokemonSuccess(caughtPokemon));
        })
      .catch(() => dispatch(catchPokemonHasErrored(true)));
  }
};