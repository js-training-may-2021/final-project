import { createStore, combineReducers } from 'redux';

const catchReducer = (state = { catchedPokemons: [] }, action) => {
  if (action.type === "CATCH_POKEMON") {
    return { catchedPokemons: [...state.catchedPokemons, action.payload] };
  }
  if (action.type === "RELEASE_POKEMON") {
    return { catchedPokemons: state.catchedPokemons.filter(pokemon => pokemon.id !== action.payload.id) };
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

const myPokemonsPaginationReducer = (state = { numberOfPokemons: 2, error: false }, action) => {
  if (action.type === "LOAD_MORE") {
    return { pokemons: state.numberOfPokemons + 2, error: false };
  }
  if (action.type === "ERROR") {
    return { ...state, error: true }
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