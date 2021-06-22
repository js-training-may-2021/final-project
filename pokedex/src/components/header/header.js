import React from 'react';

const Header = () => {
  return(
    <header className="header d-flex justify-content-around align-items-center">
      <h1 className="header__title text-danger">Pokedex</h1>
      <nav className="d-flex justify-content-around">
        <button className="header__all btn btn-danger me-1">All Pokemons</button>
        <button className="header__catched btn btn-danger">Catched Pokemons</button>
      </nav>
    </header>
  )
}

export default Header;