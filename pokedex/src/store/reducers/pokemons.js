import {
  POKEMONS_HAS_ERRORED,
  POKEMONS_IS_LOADING,
  POKEMONS_FETCH_DATA_SUCCESS,
  CATCHED_POKEMONS_FETCH_DATA_SUCCESS,
  CLEAR_ALL_POKEMONS,
  CLEAR_CATCHED_POKEMONS,
  ALL_POKEMONS_FETCHED,
} from '../constants';

const INITIAL_STATE = {
  pokemons: [],
  isLoading: false,
  selectedPokemon: null,
  hasError: false,
  allPokemonsFetched: false,
};

export const pokemons = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POKEMONS_HAS_ERRORED:
      return { ...state, hasError: action.hasErrored };

    case POKEMONS_IS_LOADING:
      return { ...state, isLoading: action.isLoading };

    case POKEMONS_FETCH_DATA_SUCCESS:
      return { ...state, pokemons: action.pokemons };

    case CATCHED_POKEMONS_FETCH_DATA_SUCCESS:
      return { ...state, pokemons: action.pokemons };

    case CLEAR_ALL_POKEMONS:
      return { ...state, pokemons: [] };

    case CLEAR_CATCHED_POKEMONS:
      return { ...state, pokemons: [] };

    case ALL_POKEMONS_FETCHED:
      return { ...state, allPokemonsFetched: action.allPokemonsFetched };

    default:
      return state;
  }
};
