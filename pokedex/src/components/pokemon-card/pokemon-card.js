import React from 'react';
import './pokemon-card.css';

const PokemonCard = (props) => {
  return (
      <div className="pokemon-card">
        <h3 className="pokemon-card__title">{props.name}</h3>
        <img className="pokemon-card__image" src={`pokemons/${props.id}.png`} alt={props.name}/>
        <button className="btn btn-danger">Catch!</button>
      </div>
    );
}


export default PokemonCard;