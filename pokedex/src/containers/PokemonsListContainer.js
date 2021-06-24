import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchPokemonsData,
  clearCatchedPokemons,
} from '../store/actions/pokemons';
import { catchPokemonAction } from '../store/actions/pokemon';
import { nextPage, previousPage } from '../store/actions/counter';

import { PokemonsList } from '../components/PokemonsList';

export const PokemonsListContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { pokemons, hasErrored, isLoading, allPokemonsFetched } = useSelector(
    (state) => ({
      pokemons: state.pokemons.pokemons,
      hasErrored: state.pokemons.hasErrored,
      isLoading: state.pokemons.isLoading,
      allPokemonsFetched: state.pokemons.allPokemonsFetched,
    }),
  );

  const { counter } = useSelector((state) => ({
    counter: state.counter.counter,
  }));

  useEffect(() => {
    dispatch(fetchPokemonsData(counter));
    return () => dispatch(clearCatchedPokemons());
  }, [dispatch, counter]);

  const catchPokemon = useCallback(
    (pokemon) => dispatch(catchPokemonAction(pokemon)),
    [dispatch],
  );

  const loadPreviousPage = useCallback(
    () => dispatch(previousPage()),
    [dispatch],
  );

  const loadNextPage = useCallback(() => dispatch(nextPage()), [dispatch]);

  const handleSelect = useCallback(
    (id) => history.push(`/pokemons/${id}`),
    [history],
  );

  return (
    <PokemonsList
      pokemons={pokemons}
      hasErrored={hasErrored}
      isLoading={isLoading}
      allPokemonsFetched={allPokemonsFetched}
      catchPokemon={catchPokemon}
      loadPreviousPage={loadPreviousPage}
      loadNextPage={loadNextPage}
      handleSelect={handleSelect}
      counter={counter}
    />
  );
};
