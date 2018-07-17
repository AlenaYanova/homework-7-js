import * as types from "../constants/action-types";

// FIXME: mayby there exists the better way then import store
import store from '../store';

export const loadCaughtPokemonsHasStarted = (bool) => ({
  type: types.LOAD_CAUGHT_POKEMONS_START,
  isLoading: bool
});

export const loadCaughtPokemonsHasErrored = (bool) => ({
  type: types.LOAD_CAUGHT_POKEMONS_ERROR,
  hasErrored: bool
});

export const loadCaughtPokemonsSuccess = (pokemons) => ({
  type: types.LOAD_CAUGHT_POKEMONS_SUCCUESS,
  pokemons
});

export const loadCaughtPokemons = () => {
  return (dispatch) => {
    dispatch(loadCaughtPokemonsHasStarted(true));

    fetch(`http://localhost:3000/caught?_page=${store.getState().allCaughtPokemons.pokemons.page + 1}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(loadCaughtPokemonsHasErrored(false));
        return response;
      })
      .then(response => response.json())
      .then(newPokemons => dispatch(loadCaughtPokemonsSuccess(newPokemons)))
      .catch(() => dispatch(loadCaughtPokemonsHasErrored(true)));
  }
};