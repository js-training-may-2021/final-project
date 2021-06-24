import React from 'react';
import { Link } from 'react-router-dom';

import { CatchedPokemon } from '../CatchedPokemon';
import { Spinner } from '../Spinner';

export const CatchedPokemonsList = ({
  pokemons = [],
  hasErrored,
  isLoading,
}) => {
  if (hasErrored) {
    return (
      <p className="error-message">
        Sorry! There was an error loading the pokemons
      </p>
    );
  }

  if (isLoading) {
    return <Spinner />;
  }

  if (pokemons.length === 0) {
    return (
      <p className="error-message">
        There are no catched pokemons. Please, go to{' '}
        <Link to="/" className="link-to-page">
          Home Page
        </Link>{' '}
        and catch one
      </p>
    );
  }

  return (
    <ul className="row">
      {pokemons.map((pokemon) => {
        return <CatchedPokemon key={pokemon.id} pokemon={pokemon} />;
      })}
    </ul>
  );
};
