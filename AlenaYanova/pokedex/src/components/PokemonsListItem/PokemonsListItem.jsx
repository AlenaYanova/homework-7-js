import './list-item.css'
import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import CatchButton from '../CatchButton'

const PokemonsListItem = (props) => (
  <div className="extendedCard">
    <div className="simpleCard">
      <img src={props.imgSrc} alt={`pokemon ${props.name}`}/>
      <Link to={`/pokemons/${props.id}`}>
        <h1> {props.name} </h1>
      </Link>
    </div>
    <div className="bottomExtension">
      <CatchButton
        onClick={props.onCatchClick}
        isCaught={props.isCaught}
        id={props.id}
      />
    </div>
  </div>
);

PokemonsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  onCatchClick: PropTypes.func,
  isCaught: PropTypes.bool,
};

export default PokemonsListItem;