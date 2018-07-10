import React, {Component} from 'react';
import PokemonsList from '../components/PokemonsList'


class AllPokemons extends Component{
    constructor(props){
        super(props);

        this.state = {
            pokemons: [],
            caught: [],
            page: 1,
        }

        this.catchPokemon = this.catchPokemon.bind(this)
    }

    componentDidMount(){
        fetch('http://localhost:3000/caught_pokemons')
            .then(response => response.json())
            .then(caught => {
                this.setState({
                    caught: caught
                })
            });
        fetch('http://localhost:3000/pokemons?_page=1')
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
                isCaught: this.isPokemonCaught(pokemon),
            }
        ))
    }

    isPokemonCaught = (pokemon) => {
        const idx = this.findPokemonInArr(pokemon.id, this.state.caught);
        return !(idx === undefined);
    }

    findPokemonInArr = (id, arr) => {
        return arr.find(pokemon => pokemon.id == id);
    }

    loadPokemons = (event) => {
        let {page} = this.state;
        page++;
        fetch(`http://localhost:3000/pokemons?_page=${page}`)
            .then(response => response.json())
            .then(newPokemons => {
                this.setState({
                    pokemons: this.state.pokemons.concat(this.preparePokemonsData(newPokemons)),
                    page: page
                });
            })
    }

    catchPokemon = (event) => {
        const pokemon = this.findPokemonInArr(event.target.id, this.state.pokemons);
        if (pokemon.isCaught === false){
            let caught_pokemon = {
                id: pokemon.id,
                name: pokemon.name,
                date: this.getDateString()
            };
            const idx = this.state.pokemons.indexOf(pokemon);
            let new_pokemons = this.state.pokemons;
            new_pokemons[idx].isCaught = true;
            this.setState({
                caught: this.state.caught.concat([caught_pokemon]),
                pokemons: new_pokemons
            });
            fetch(`http://localhost:3000/caught_pokemons`,{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(caught_pokemon)
            })
                .then(() => {})
        }
    }

    getDateString = () => {
        const date = (new Date()).toString().split(' ');
        return `${date[1]} ${date[2]} ${date[3]} ${date[4]}`;
    }

    render(){
        return(
            <PokemonsList
                pokemonsArr={this.state.pokemons}
                onLoadClick={this.loadPokemons}
                onCatchClick={this.catchPokemon}
            />
        )
    }
}

export default AllPokemons;