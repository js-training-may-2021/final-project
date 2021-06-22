import { createStore, combineReducers } from 'redux';

import { loadState, saveState } from './localStorageManager';

const catchReducer = (state = { caughtPokemons: loadState() }, action) => {
  if (action.type === "CATCH_POKEMON") {
    console.log({ caughtPokemons: [...state.caughtPokemons, action.payload] });
    return { caughtPokemons: [...state.caughtPokemons, action.payload] };
  }
  if (action.type === "RELEASE_POKEMON") {
    console.log({ caughtPokemons: state.caughtPokemons.filter(pokemon => pokemon.id !== action.payload.id) });
    return { caughtPokemons: state.caughtPokemons.filter(pokemon => pokemon.id !== action.payload.id) };
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

const myPokemonsPaginationReducer = (state = { numberOfPokemons: 20, error: false }, action) => {
  if (action.type === "LOAD_MORE") {
    return { ...state, numberOfPokemons: state.numberOfPokemons + 20 };
  }
  return state;
};

const reducer = combineReducers({
  catch: catchReducer,
  homePagination: homePagePaginationReducer,
  myPokemonsPagination: myPokemonsPaginationReducer
});

const store = createStore(reducer);

// TODO if using localstorage bug on details page occurs
store.subscribe(() => {
  saveState(store.getState().catch.caughtPokemons);
});

export default store;