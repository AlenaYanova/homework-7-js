import React from 'react';
import { connect } from "react-redux";
import PokemonsList from '../components/PokemonsList'
import { loadCaughtPokemons } from "../actions/loadCaughtPokemons";

const mapStateToProps = state => {
  return {pokemonsArr: state.allCaughtPokemons.pokemons.items}
};

const mapDispatchToProps = dispatch => {
  dispatch(loadCaughtPokemons());
  return {
    onLoadClick: () => {
      dispatch(loadCaughtPokemons())
    },
  }
};

const AllCaughtPokemons = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonsList);

export default AllCaughtPokemons;