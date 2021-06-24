import React, { useEffect, useState } from 'react';
import './_style.scss';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../actions/pokedex';
import { Link } from "react-router-dom";
import * as selectors from "../../selectors/selector";

const PokemonCard = (props) => {
  const {
    pokemon
  } = props;
  const dispatch = useDispatch();
  const caughtPokemon = useSelector(selectors.getCaughtPokemon);
  const isCaught = caughtPokemon.findIndex(elem => elem.id === props.pokemon.id);

  const onClick = () => {
    const captureDate = new Date().toDateString();
    const newPokemon = { ...props.pokemon, captureDate: captureDate, isCaught: true};
    dispatch(actions.catchPokemon(newPokemon));
  }

  const onLink = () => {
    dispatch(actions.setCurrentPokemonID(pokemon.id));
  }

  return (

    <div className='card-wrapper'>
      <div className='image-wrapper'>
        <img className='pokemon-image' src={pokemon.image} alt='pokemon image' />
      </div>
      <Link to={`/pokemonInfo/${pokemon.id}`} onClick={onLink}>
        <h3 className='pokemon-name'>{pokemon.name}</h3>
      </Link>
      <button id='catch-button-id' className='catch-button' onClick={onClick} disabled={isCaught !== -1}>Catch</button>
    </div>
  )
}

export default PokemonCard;
