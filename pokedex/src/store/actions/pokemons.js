import {
  POKEMONS_HAS_ERRORED,
  POKEMONS_IS_LOADING,
  POKEMONS_FETCH_DATA_SUCCESS,
  POKEMON_HAS_ERRORED,
  POKEMON_IS_LOADING,
  POKEMON_FETCH_DATA_SUCCESS,
  CLEAR_SELECTED_POKEMON,
  CATCHED_POKEMONS_FETCH_DATA_SUCCESS,
  CLEAR_ALL_POKEMONS,
  CLEAR_CATCHED_POKEMONS,
  INCREMENT,
  DECREMENT,
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

export const pokemonHasErrored = (bool) => {
  return {
    type: POKEMON_HAS_ERRORED,
    hasErrored: bool,
  };
};

export const pokemonIsLoading = (bool) => {
  return {
    type: POKEMON_IS_LOADING,
    isLoading: bool,
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

export const increaseCount = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCount = () => {
  return {
    type: DECREMENT,
  };
};

export const nextPage = () => {
  return (dispatch) => {
    dispatch(increaseCount());
  };
};

export const previousPage = () => {
  return (dispatch) => {
    dispatch(decreaseCount());
  };
};
