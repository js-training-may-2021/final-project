import React from 'react';

import './Pokemon.css';

const Pokemon = ({ pokemon, onCatch, onSelect }) => {
  const { id, name, catched = false } = pokemon;

  const onClick = (e) => {
    e.stopPropagation();
    onCatch();
  };

  return (
    <div className="card-body pokemon-card-content" onClick={onSelect}>
      <div>
        <img
          src={process.env.PUBLIC_URL + `/pokemons/${id}.png`}
          alt="pokemon"
          height="200px"
          width="200px"
        />
      </div>
      <div className="name">{name}</div>
      <div>
        <button
          disabled={catched}
          type="button"
          className="btn btn-dark btn-md"
          onClick={onClick}
        >
          Catch
        </button>
      </div>
    </div>
  );
};

export { Pokemon };
