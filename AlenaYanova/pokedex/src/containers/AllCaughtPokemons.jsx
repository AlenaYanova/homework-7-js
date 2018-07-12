import React, {Component} from 'react';
import PokemonsList from '../components/PokemonsList'


class AllCaughtPokemons extends Component{
    constructor(props){
        super(props);
        this.state = {
            pokemons: [],
            page: 1,
        };
    }

    componentDidMount(){
        fetch('http://localhost:3000/pokemons?isCaught=true&_page=1')
            .then(response => response.json())
            .then(pokemons => {
                this.setState({
                    pokemons: this.preparePokemonsData(pokemons)
                })
            });
    }

    preparePokemonsData = (pokemons) => {
        return pokemons.map((pokemon) => (
            {
                id: pokemon.id,
                name: pokemon.name,
                imgSrc: `https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${pokemon.id}.png`,
                isCaught: true,
                date: pokemon.date,
            }
        ))
    }

    loadPokemons = (event) => {
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

    render(){
        return(
            <PokemonsList
                pokemonsArr={this.state.pokemons}
                onLoadClick={this.loadPokemons}
            />
        )
    }
}

export default AllCaughtPokemons;