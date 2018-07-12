import AllPokemons from './containers/AllPokemons.jsx';
import AllCaughtPokemons from './containers/AllCaughtPokemons.jsx';
import Pokemon from './containers/Pokemon.jsx';

const routes = [
    {
        path: '/',
        component: AllPokemons,
        exact: true,
    }, {
        path: '/pokemons',
        component: AllPokemons,
        exact: true,
    }, {
        path: '/pokemons/caught',
        component: AllCaughtPokemons,
        exact: true,
    }, {
        path: '/pokemons/:id',
        component: Pokemon
    }
];

export default routes;