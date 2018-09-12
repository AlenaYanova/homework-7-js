import React from 'react';
import AllPokemons from './AllPokemons.jsx';

class AllCaughtPokemons extends AllPokemons {
  loadPokemons = () => {
    let {page} = this.state;
    page++;
    //FIXME: Expand doesn't work, I really don't know why (because of that I save pokemonName in caught collection)
    fetch(`http://localhost:3000/caught?_page=${page}`)
      .then(response => response.json())
      .then(newPokemons => {
        this.setState({
          pokemons: this.state.pokemons.concat(this.preparePokemonsData(newPokemons)),
          page: page
        });
      })
  }

  preparePokemonsData = (pokemons) => {
    return pokemons.map((pokemon) => (
      {
        id: pokemon.pokemonId,
        name: pokemon.pokemonName,
        imgSrc: `https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${pokemon.pokemonId}.png`,
        isCaught: true,
      }
    ))
  }
}

export default AllCaughtPokemons;