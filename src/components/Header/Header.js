import React from 'react';
import { Link } from "react-router-dom";
import './_style.scss';

const Header = () => {
  return (
    <header className='header'>
      <nav className='navigation'>
        <ul className='nav-list'>
          <li>
            <Link to='/' className='link-style'>Main</Link>
          </li>
          <li>
            <Link to='/caughtPokemon' className='link-style'><p>Pokemon <br/>Collection</p></Link>
          </li>
        </ul>
      </nav>
      {!window.location.href.includes('caughtPokemon') && !window.location.href.includes('pokemonInfo')
        ?  <div className='main-banner'><h3 className='main-banner-text'>pokemon<br/>dex</h3></div> : null}
    </header>
  )
}

export default Header;
