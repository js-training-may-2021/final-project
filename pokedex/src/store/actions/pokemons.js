import {
  POKEMONS_HAS_ERRORED,
  POKEMONS_IS_LOADING,
  POKEMONS_FETCH_DATA_SUCCESS,
  CATCHED_POKEMONS_FETCH_DATA_SUCCESS,
  CLEAR_ALL_POKEMONS,
  CLEAR_CATCHED_POKEMONS,
  ALL_POKEMONS_FETCHED,
} from '../constants';

export const pokemonsHasErrored = (hasErrored) => {
  return {
    type: POKEMONS_HAS_ERRORED,
    hasErrored,
  };
};

export const pokemonsIsLoading = (isLoading) => {
  return {
    type: POKEMONS_IS_LOADING,
    isLoading,
  };
};

export const pokemonsFetchDataSuccess = (pokemons) => {
  return {
    type: POKEMONS_FETCH_DATA_SUCCESS,
    pokemons,
  };
};

export const allPokemonsFetched = (allPokemonsFetched) => {
  return {
    type: ALL_POKEMONS_FETCHED,
    allPokemonsFetched,
  };
};

export const fetchPokemonsData = (page) => {
  return (dispatch) => {
    dispatch(pokemonsIsLoading(true));

    fetch(`http://localhost:8000/pokemons?_page=${page}&_limit=20`)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(pokemonsIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((pokemons) => {
        const isLastPokemon = pokemons.some((pokemon) => pokemon.lastPokemon);
        if (isLastPokemon) {
          dispatch(allPokemonsFetched(true));
        }
        return dispatch(pokemonsFetchDataSuccess(pokemons));
      })
      .catch(() => dispatch(pokemonsHasErrored(true)));
  };
};

export const catchedPokemonsFetchDataSuccess = (pokemons) => {
  return {
    type: CATCHED_POKEMONS_FETCH_DATA_SUCCESS,
    pokemons,
  };
};

export const fetchCatchedPokemonsData = () => {
  return (dispatch) => {
    dispatch(pokemonsIsLoading(true));

    fetch('http://localhost:8000/pokemons?catched_like=true')
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(pokemonsIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((pokemons) => dispatch(catchedPokemonsFetchDataSuccess(pokemons)))
      .catch(() => dispatch(pokemonsHasErrored(true)));
  };
};

export const clearAllPokemons = () => {
  return {
    type: CLEAR_ALL_POKEMONS,
  };
};

export const clearCatchedPokemons = () => {
  return {
    type: CLEAR_CATCHED_POKEMONS,
  };
};
