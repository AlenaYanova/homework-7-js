import './pokemons-list.css';
import React from 'react';
import PropTypes from 'prop-types';
import PokemonsListItem from '../PokemonsListItem';

const PokemonsList = (props) => (
    <div className="pokemonsListContainer">
        <ul className="pokemonsList clearfix columns">
        {props.pokemonsArr.map(pokemon =>
            <li className="pokemonsListItem" key={pokemon.id}>
                <PokemonsListItem
                name={pokemon.name}
                id={pokemon.id}
                imgSrc={pokemon.imgSrc}
                onCatchClick={props.onCatchClick}
                isCaught={pokemon.isCaught}
                date={pokemon.date}
                />
            </li>
        )}
        </ul>
        <button onClick={props.onLoadClick} className="loadButton">Load more</button>
    </div>
);

PokemonsList.propTypes = {
    pokemonsArr: PropTypes.arrayOf(PropTypes.shape(PokemonsListItem.propTypes)),
    onLoadClick: PropTypes.func.isRequired,
    onCatchClick: PropTypes.func,
};

export default PokemonsList;