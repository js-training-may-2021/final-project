import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchCatchedPokemonsData,
  clearAllPokemons,
} from '../store/actions/pokemons';
import { CatchedPokemonsList } from '../components/CatchedPokemonsList';

export const CatchedPokemonsListContainer = () => {
  const dispatch = useDispatch();
  const { pokemons, hasErrored, isLoading } = useSelector((state) => ({
    pokemons: state.pokemons.pokemons,
    hasErrored: state.pokemons.hasErrored,
    isLoading: state.pokemons.isLoading,
  }));

  useEffect(() => {
    dispatch(fetchCatchedPokemonsData());
    return () => dispatch(clearAllPokemons());
  }, [dispatch]);

  return (
    <CatchedPokemonsList
      pokemons={pokemons}
      hasErrored={hasErrored}
      isLoading={isLoading}
    />
  );
};
