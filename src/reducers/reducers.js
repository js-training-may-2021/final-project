import * as types from '../common/actionTypes/pokedex';

const defaultState = {
  caughtPokemon: [],
  pokemon: [],
  currentPage: 1,
  pokemonPerPage: 12,
  totalCount: 0,
  currentPokemonID: 0,
  currentPokemonInfo: {},
}

const pokedex = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_POKEMON:
      return { ...state, pokemon: [action.data]};
    case types.CATCH_POKEMON:
      return { ...state, caughtPokemon: [...state.caughtPokemon, action.data] };
    case types.SET_CURRENT_PAGE:
      return { ...state, currentPage: action.data };
    case types.CURRENT_POKEMON_ID:
      return { ...state, currentPokemonID: action.data };
    case types.SET_CURRENT_POKEMON_INFO:
      return { ...state, currentPokemonInfo: action.data};
    default:
      return state;
  }
}

export default pokedex;
