import React, {Component} from 'react';
import PokemonCard from '../components/PokemonCard'
import _ from 'lodash';

class Pokemon extends Component {
    constructor(props){
        super(props);

        this.state = {
            pokemon_info: {}
        };
    }

    componentDidMount(){
        fetch(`http://localhost:3000/pokemons/${this.props.match.params.id}`)
            .then(response => response.json())
            .then(pokemon_info => {
                fetch(`http://localhost:3000/caught_pokemons/${this.props.match.params.id}`)
                    .then(response => response.json())
                    .then(caught_pokemon_info => {
                        pokemon_info.imgSrc = `https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${pokemon_info.id}.png`;
                        pokemon_info.isCaught = !(_.isEmpty(caught_pokemon_info));
                        pokemon_info.date = caught_pokemon_info.date;
                        this.setState({
                            pokemon_info: pokemon_info
                        });
                    })
            })
    }

    render() {
        const {id, name, imgSrc, isCaught, date} = this.state.pokemon_info;
        return(
            <PokemonCard id={id} name={name} imgSrc={imgSrc} isCaught={isCaught} date={date}/>
        )
    }
}

export default Pokemon;