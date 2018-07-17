import * as types from "../constants/action-types";

// FIXME: mayby there exists the better way then import store
import store from '../store';

export const loadPokemonsHasStarted = (bool) => ({
  type: types.LOAD_POKEMONS_START,
  isLoading: bool
});

export const loadPokemonsHasErrored = (bool) => ({
  type: types.LOAD_POKEMONS_ERROR,
  hasErrored: bool
});

export const loadPokemonsSuccess = (pokemons) => ({
  type: types.LOAD_POKEMONS_SUCCUESS,
  pokemons
});

export const loadPokemons = () => {
  return (dispatch) => {
    dispatch(loadPokemonsHasStarted(true));

    fetch(`http://localhost:3000/pokemons?_embed=caught&_page=${store.getState().allPokemons.pokemons.page + 1}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(loadPokemonsHasErrored(false));
        return response;
      })
      .then(response => response.json())
      .then(newPokemons => dispatch(loadPokemonsSuccess(newPokemons)))
      .catch(() => dispatch(loadPokemonsHasErrored(true)));
  }
};