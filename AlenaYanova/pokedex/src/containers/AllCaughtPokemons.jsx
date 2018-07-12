import React from 'react';
import AllPokemons from './AllPokemons.jsx';


class AllCaughtPokemons extends AllPokemons{
    loadPokemons = () => {
        let {page} = this.state;
        page++;
        fetch(`http://localhost:3000/pokemons?isCaught=true&_page=${page}`)
            .then(response => response.json())
            .then(newPokemons => {
                this.setState({
                    pokemons: this.state.pokemons.concat(this.preparePokemonsData(newPokemons)),
                    page: page
                });
            })
    }
}

export default AllCaughtPokemons;