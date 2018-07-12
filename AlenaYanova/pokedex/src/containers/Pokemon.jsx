import React, {Component} from 'react';
import PokemonCard from '../components/PokemonCard'

class Pokemon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon_info: {}
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/pokemons/${this.props.match.params.id}?_embed=caught`)
      .then(response => response.json())
      .then(pokemon_info => {
        const isCaught = (pokemon_info.caught.length > 0);
        const date = (isCaught)? pokemon_info.caught[0].date : null;
        this.setState({
          pokemon_info: {
            id: pokemon_info.id,
            name: pokemon_info.name,
            isCaught: isCaught,
            date: date,
            imgSrc: `https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${pokemon_info.id}.png`,
          }
        });
      });
  }

  render() {
    const pokemon_info = this.state.pokemon_info;
    return (
      <PokemonCard {...pokemon_info} />
    )
  }
}

export default Pokemon;