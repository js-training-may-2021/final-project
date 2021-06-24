import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../index.css';

const Header = () => {
    return(
        <div className="nav">
            <div className="nav__item"><Link to="/">Home</Link></div>
            <div className="nav__item"><Link to="/catched">Catched Pokemons</Link></div>
        </div>
    )
}

export default Header;
