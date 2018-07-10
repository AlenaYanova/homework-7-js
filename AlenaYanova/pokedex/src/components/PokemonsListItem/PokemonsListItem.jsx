import './list-item.css'
import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import CatchButton from '../CatchButton'

// TODO: use PokemonsListItemWithButton & PokemonsListItemWithDate mixins

const PokemonsListItem = (props) => (
    <div className="extendedCard">
        <div className="simpleCard">
            <img src={props.imgSrc} alt={`pokemon ${props.name}`} />
            <Link to={`/pokemons/${props.id}`}>
                <h1> {props.name} </h1>
            </Link>
        </div>
        <div className="bottomExtension">
        {props.date === undefined ?
            <CatchButton
                onClick={props.onCatchClick}
                isCaught={props.isCaught}
                id={props.id}
            /> :
            <p>{props.date}</p>}
        </div>
    </div>
);

PokemonsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
    onCatchClick: PropTypes.func,
    isCaught: PropTypes.bool,
    date: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.instanceOf(Date)
    ])
};

export default PokemonsListItem;