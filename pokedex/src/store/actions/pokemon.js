import { pokemonsFetchDataSuccess, pokemonsHasErrored } from './pokemons';
import {
  POKEMON_HAS_ERRORED,
  POKEMON_IS_LOADING,
  POKEMON_FETCH_DATA_SUCCESS,
  CLEAR_SELECTED_POKEMON,
} from '../constants';

export const pokemonHasErrored = (hasErrored) => {
  return {
    type: POKEMON_HAS_ERRORED,
    hasErrored,
  };
};

export const pokemonIsLoading = (isLoading) => {
  return {
    type: POKEMON_IS_LOADING,
    isLoading,
  };
};

export const pokemonFetchDataSuccess = (pokemon) => {
  return {
    type: POKEMON_FETCH_DATA_SUCCESS,
    pokemon,
  };
};

export const clearSelectedPokemon = () => {
  return {
    type: CLEAR_SELECTED_POKEMON,
  };
};

export const fetchPokemonData = (id) => {
  return (dispatch) => {
    dispatch(pokemonIsLoading(true));

    fetch(`http://localhost:8000/pokemons/${id}/`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(pokemonIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((pokemon) => dispatch(pokemonFetchDataSuccess(pokemon)))
      .catch(() => dispatch(pokemonHasErrored(true)));
  };
};

export const catchPokemonAction = (pokemon) => {
  return (dispatch, getStore) => {
    fetch(`http://localhost:8000/pokemons/${pokemon.id}/`, {
      method: 'PUT',
      body: JSON.stringify({
        ...pokemon,
        catched: true,
        date: Date.now(),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then((response) => response.json())
      .then((pokemon) => {
        const index = getStore().pokemons.pokemons.findIndex(
          (pok) => pok.id === pokemon.id,
        );
        const pokemons = [...getStore().pokemons.pokemons];
        pokemons[index] = pokemon;

        dispatch(pokemonsFetchDataSuccess(pokemons));
      })
      .catch(() => dispatch(pokemonsHasErrored(true)));
  };
};
