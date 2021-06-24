import {
  POKEMON_HAS_ERRORED,
  POKEMON_IS_LOADING,
  POKEMON_FETCH_DATA_SUCCESS,
  CLEAR_SELECTED_POKEMON,
} from '../constants';

const INITIAL_STATE = {
  isLoading: false,
  selectedPokemon: null,
  hasErrored: false,
};

export const selectedPokemon = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POKEMON_HAS_ERRORED:
      return { ...state, hasError: action.hasErrored };

    case POKEMON_IS_LOADING:
      return { ...state, isLoading: action.isLoading };

    case POKEMON_FETCH_DATA_SUCCESS:
      return { ...state, selectedPokemon: action.pokemon };

    case CLEAR_SELECTED_POKEMON:
      return { ...state, selectedPokemon: null };

    default:
      return state;
  }
};
