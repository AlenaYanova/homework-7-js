import * as types from "../constants/action-types";

export const loadPokemonInfoHasStarted = (bool) => ({
  type: types.LOAD_POKEMON_INFO_START,
  isLoading: bool
});

export const loadPokemonInfoHasErrored = (bool) => ({
  type: types.LOAD_POKEMON_INFO_ERROR,
  hasErrored: bool
});

export const loadPokemonInfoSuccess = (pokemon) => ({
  type: types.LOAD_POKEMON_INFO_SUCCUESS,
  pokemon
});

export const loadPokemonInfo = (id) => {
  return (dispatch) => {
    dispatch(loadPokemonInfoHasStarted(true));

    fetch(`http://localhost:3000/pokemons/${id}?_embed=caught`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(loadPokemonInfoHasErrored(false));
        return response;
      })
      .then(response => response.json())
      .then(pokemon => dispatch(loadPokemonInfoSuccess(pokemon)))
      .catch(() => dispatch(loadPokemonInfoHasErrored(true)));
  }
};