import React from 'react';
import { Link } from 'react-router-dom';

import './CatchedPokemon.css';

export const CatchedPokemon = ({ pokemon }) => {
  const { id, name, date } = pokemon;

  return (
    <div key={id} className="card col-lg-6 col-md-12 col-sm-12 mb-4">
      <Link to={`/pokemons/${id}`} className="catched-pokemon">
        <div className="card-body card-content">
          <div>
            <img
              src={process.env.PUBLIC_URL + `/pokemons/${id}.png`}
              alt="pokemon"
              height="200px"
              width="200px"
            />
          </div>
          <div className="text-content">
            <div className="pokemon-name">Name: {name}</div>
            <div>Catсhed Date: {new Date(date).toLocaleDateString()}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};
