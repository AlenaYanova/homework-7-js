import React from 'react';
import PokemonCard from '../components/PokemonCard'
import { connect } from "react-redux";
import { loadPokemonInfo } from "../actions/loadPokemonInfo";

const mapStateToProps = state => {
  return state.pokemonInfo.info
};

const mapDispatchToProps = (dispatch, props) => {
  dispatch(loadPokemonInfo(props.match.params.id));
  return {};
};

const Pokemon = connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonCard);

export default Pokemon;