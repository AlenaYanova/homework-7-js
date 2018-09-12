import React, {Component} from 'react';
import PokemonsList from '../components/PokemonsList'
import { getDateString } from '../utils'


class AllPokemons extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      page: 0,
    };

    this.catchPokemon = this.catchPokemon.bind(this);
  }

  componentDidMount() {
    this.loadPokemons()
  }

  preparePokemonsData = (pokemons) => {
    return pokemons.map((pokemon) => (
      {
        id: pokemon.id,
        name: pokemon.name,
        imgSrc: `https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${pokemon.id}.png`,
        isCaught: (pokemon.caught.length > 0),
      }
    ))
  }

  findPokemonInArrById = (id, arr) => {
    return arr.find(pokemon => pokemon.id.toString() === id.toString());
  }

  loadPokemons = () => {
    let {page} = this.state;
    page++;
    fetch(`http://localhost:3000/pokemons?_embed=caught&_page=${page}`)
      .then(response => response.json())
      .then(newPokemons => {
        this.setState({
          pokemons: this.state.pokemons.concat(this.preparePokemonsData(newPokemons)),
          page: page
        });
      })
  }

  catchPokemon = (event) => {
    const pokemon = this.findPokemonInArrById(event.target.id, this.state.pokemons);
    if (!pokemon.isCaught) {
      fetch(`http://localhost:3000/caught`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          pokemonId: pokemon.id,
          pokemonName: pokemon.name,
          date: getDateString(),
        })
      })
        .then(() => {
        });
      this.setState(({pokemons}) => {
        pokemons[pokemons.indexOf(pokemon)].isCaught = true;
        return pokemons;
      })
    }
  }

  render() {
    return (
      <PokemonsList
        pokemonsArr={this.state.pokemons}
        onLoadClick={this.loadPokemons}
        onCatchClick={this.catchPokemon}
      />
    )
  }
}

export default AllPokemons;