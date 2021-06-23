import { createStore, combineReducers } from 'redux';

import { loadState, saveState } from './localStorageManager';
import { NUMBER_OF_POKEMONS_PER_PAGE } from '../utils/constants';

const catchReducer = (state = { caughtPokemons: loadState() }, action) => {
  if (action.type === "CATCH_POKEMON") {
    const newCaughtPokemons = [...state.caughtPokemons, action.payload];
    saveState(newCaughtPokemons);
    return { caughtPokemons: newCaughtPokemons };
  }
  if (action.type === "RELEASE_POKEMON") {
    const newCaughtPokemons = state.caughtPokemons.filter(pokemon => pokemon.id !== action.payload.id);
    saveState(newCaughtPokemons);
    return { caughtPokemons: newCaughtPokemons };
  }
  return state;
};

const homePagePaginationReducer = (state = { pokemons: [], isLoading: false, error: false }, action) => {
  if (action.type === "SET_POKEMONS") {
    return { pokemons: [...state.pokemons, ...action.payload], isLoading: false, error: false };
  }
  if (action.type === "START_LOADING_POKEMONS") {
    return { ...state, isLoading: true };
  }
  if (action.type === "ERROR") {
    return { ...state, error: true }
  }
  return state;
};

const myPokemonsPaginationReducer = (state = { numberOfPokemons: NUMBER_OF_POKEMONS_PER_PAGE }, action) => {
  if (action.type === "LOAD_MORE") {
    return { numberOfPokemons: state.numberOfPokemons + NUMBER_OF_POKEMONS_PER_PAGE };
  }
  return state;
};

const reducer = combineReducers({
  catch: catchReducer,
  homePagination: homePagePaginationReducer,
  myPokemonsPagination: myPokemonsPaginationReducer
});

const store = createStore(reducer);

export default store;