import React from 'react';

import { Pokemon } from '../Pokemon';
import { Spinner } from '../Spinner';
import './PokemonsList.css';

export const PokemonsList = ({
  pokemons = [],
  hasErrored,
  isLoading,
  catchPokemon,
  loadPreviousPage,
  loadNextPage,
  counter,
  handleSelect,
  allPokemonsFetched,
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

  return (
    <div>
      <ul className="row pokemons-list">
        {pokemons.map((pokemon) => {
          return (
            <div key={pokemon.id} className="card col-lg-3 col-sm-6 mb-4">
              <Pokemon
                pokemon={pokemon}
                onCatch={() => catchPokemon(pokemon)}
                onSelect={() => handleSelect(pokemon.id)}
              />
            </div>
          );
        })}
      </ul>
      <div className="row text-right">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button
              className="page-link btn btn-outline-primary"
              onClick={() => loadPreviousPage()}
              disabled={counter === 1 ? true : false}
            >
              Previous
            </button>
          </li>
          <li className="page-item active">
            <button className="page-link" disabled>
              {counter}
            </button>
          </li>
          <li className="page-item">
            <button
              className="page-link btn btn-outline-primary"
              onClick={() => loadNextPage()}
              disabled={allPokemonsFetched ? true : false}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
