import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import './_style.scss';
import * as selectors from "../../selectors/selector";
import * as actions from "../../actions/pokedex";

const PokemonInfoContent = () => {
  const caughtPokemon = useSelector(selectors.getCaughtPokemon);
  const currentPokemonID = useSelector(selectors.getCurrentPokemonID);
  const currentPokemon = useSelector(selectors.getCurrentPokemonInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      await dispatch(actions.getPokemonInfo(currentPokemonID));
    }
    getData();
  }, [dispatch]);

  const isCaught = caughtPokemon.findIndex(elem => elem.name === currentPokemon.name);
  const src = `https://raw.githubusercontent.com/js-training-may-2021/final-project/main/pokemons/${currentPokemon.id}.png`;

  return (
    <div className='wrapper'>
      <div className='pokemon-info-content'>
        <div className='pokemon-wrapper'>
          <p className='pokemon-id'>{currentPokemon.id}</p>
          <img src={src} alt='pokemon image' className='pokemon-image' />
          <h3 className='pokemon-name'>{currentPokemon.name}</h3>
          {isCaught === -1 ? 'Pokemon is not caught yet :(' : `Pokemon was caught on ${caughtPokemon[isCaught].captureDate}`}
        </div>
      </div>
    </div>
  )
}

export default PokemonInfoContent;
