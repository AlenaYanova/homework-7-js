import React from 'react';
import { connect } from "react-redux";
import PokemonsList from '../components/PokemonsList'
import { loadPokemons } from "../actions/loadPokemons";
import { catchPokemon } from '../actions/catchPokemon'

const mapStateToProps = state => {
  return {pokemonsArr: state.allPokemons.pokemons.items}
};

const mapDispatchToProps = dispatch => {
  dispatch(loadPokemons());
  return {
    onLoadClick: () => {
      dispatch(loadPokemons())
    },
    onCatchClick: (event) => {
      dispatch(catchPokemon(event.target.id))
    }
  }
};

const AllPokemons = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonsList);

export default AllPokemons;