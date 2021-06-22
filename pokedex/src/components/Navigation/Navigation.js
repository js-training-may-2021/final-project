import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

export const Navigation = () => {
  return (
    <ul className="nav navbar-dark bg-dark fixed-top">
      <li className="nav-item">
        <NavLink
          exact
          to="/"
          className="link-to-page"
          activeStyle={{ fontWeight: 'bold' }}
        >
          <div className="nav-link">Home</div>
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="/catched-pokemons"
          className="link-to-page"
          activeStyle={{ fontWeight: 'bold' }}
        >
          <div className="nav-link">My Pokemons</div>
        </NavLink>
      </li>
    </ul>
  );
};
