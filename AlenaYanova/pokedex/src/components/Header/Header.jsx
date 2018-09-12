import React from 'react';
import {Link} from 'react-router-dom'
import './header.css'

const Header = () => (
  <header>
    <div className="logo">
      pokedex
    </div>
    <nav>
      <ul className="clearfix">
        <li><Link to='/pokemons'>All Pokemons</Link></li>
        <li><Link to='/pokemons/caught'>Caught Pokemons</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header;