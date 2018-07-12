import React, {Component} from 'react';
import PokemonsList from '../components/PokemonsList'


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
        isCaught: ('isCaught' in pokemon) ? pokemon.isCaught : false,
      }
    ))
  }

  findPokemonInArrById = (id, arr) => {
    return arr.find(pokemon => pokemon.id == id);
  }

  loadPokemons = () => {
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
    const pokemon = this.findPokemonInArrById(event.target.id, this.state.pokemons);
    if (pokemon.isCaught === false) {
      fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: pokemon.name,
          id: pokemon.id,
          isCaught: true,
          date: this.getDateString()
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

  getDateString = () => {
    const date = (new Date()).toString().split(' ');
    return `${date[1]} ${date[2]} ${date[3]} ${date[4]}`;
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