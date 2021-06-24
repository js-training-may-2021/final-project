import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  fetchPokemonData,
  clearSelectedPokemon,
} from '../store/actions/pokemon';
import { PokemonCard } from '../components/PokemonCard';

export const PokemonCardContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const data = useSelector((state) => ({
    pokemon: state.selectedPokemon.selectedPokemon,
    hasErrored: state.selectedPokemon.hasErrored,
    isLoading: state.selectedPokemon.isLoading,
  }));

  useEffect(() => {
    dispatch(fetchPokemonData(id));
    return () => dispatch(clearSelectedPokemon());
  }, [dispatch, id]);

  return <PokemonCard {...data} />;
};
