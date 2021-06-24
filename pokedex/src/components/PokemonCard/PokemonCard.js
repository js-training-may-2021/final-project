import React from 'react';

import { Spinner } from '../Spinner';
import './PokemonCard.css';

export const PokemonCard = ({ pokemon = null, hasErrored, isLoading }) => {
  if (hasErrored) {
    return (
      <p className="error-message">
        Sorry! There was an error loading the pokemon
      </p>
    );
  }

  if (isLoading || !pokemon) {
    return <Spinner />;
  }

  return (
    <div className="card text-center col-md-6 offset-md-3">
      <img
        src={process.env.PUBLIC_URL + `/pokemons/${pokemon.id}.png`}
        alt="pokemon"
      />
      <div className="content">
        <div>ID: {pokemon.id}</div>
        <div className="capitalize">Name: {pokemon.name}</div>
        <div>Status: {pokemon.catched ? 'Catched' : 'Not catched'}</div>
        <div>
          {pokemon.catched
            ? `Cathed Date: ${new Date(pokemon.date).toLocaleDateString()}`
            : null}
        </div>
      </div>
    </div>
  );
};
