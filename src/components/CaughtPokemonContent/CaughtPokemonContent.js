import React from 'react';
import './_style.scss';
import PokemonCard from '../PokemonCard/PokemonCard';
import { useSelector } from 'react-redux';
import * as selectors from '../../selectors/selector';

const CaughtPokemonContent = () => {
  const caughtPokemon = useSelector(selectors.getCaughtPokemon);
  let cards = [];

  if (caughtPokemon.length !== 0) {
    cards = caughtPokemon.map(elem => {
      return <PokemonCard
        key={elem.id} pokemon={elem} />
    });
  }
  return (
    <div className='wrapper'>
      <div className='caught-pokemon-content'>
        {caughtPokemon.length !== 0 ? cards : <div className='warning'>Your collection is empty :(</div>}
      </div>
    </div>
  )
};

export default CaughtPokemonContent;
