import './pokemon-card.css'
import React from 'react';
import PropTypes from 'prop-types';

const PokemonCard = (props) => (
  <div className="pokemonCardContainer container">
    <img src={props.imgSrc} alt={`pokemon ${props.name}`}/>
    <table className="u-full-width">
      <thead>
      </thead>
      <tbody>
      <tr>
        <td>name</td>
        <td>{props.name}</td>
      </tr>
      <tr>
        <td>id</td>
        <td>{props.id}</td>
      </tr>
      <tr>
        <td>status</td>
        <td>{props.isCaught ? 'disable' : 'free'}</td>
      </tr>
      {props.isCaught ?
        <tr>
          <td>caught</td>
          <td>{props.date}</td>
        </tr>
        : null}
      </tbody>
    </table>
  </div>
)

PokemonCard.prorTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  isCaught: PropTypes.bool.isRequired,
  date: PropTypes.string,
}

export default PokemonCard;