import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AllPokemons from '../../containers/AllPokemons.jsx'
import Pokemon from '../../containers/Pokemon.jsx'
import AllCaughtPokemons from '../../containers/AllCaughtPokemons.jsx'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/pokemons' component={AllPokemons}/>
            <Route path='/pokemons/:id' component={Pokemon}/>
            <Route exact path='/caught' component={AllCaughtPokemons}/>
        </Switch>
    </main>
)

export default Main;