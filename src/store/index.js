import { createStore, combineReducers } from 'redux';

const catchReducer = (state = { catchedPokemons: [] }, action) => {
  if (action.type === "ADD_POKEMON") {
    return { catchedPokemons: [...state.catchedPokemons, action.pokemonObj] };
  }
  if (action.type === "REMOVE_POKEMON") {
    return { catchedPokemones: state.catchedPokemons.filter(pokemon => pokemon.id !== action.pokemonId) };
  }
  return state;
};

const homePagePaginationReducer = (state = { pokemons: [], isLoading: false, error: false }, action) => {
  if (action.type === "SET_POKEMONS") {
    return { pokemons: [...state.pokemons, ...action.payload], isLoading: false, error: false };
  }
  if (action.type === "START_LOADING_POKEMONS") {
    return { ... state, isLoading: true };
  }
  // if (action.type = "ERROR") {
  //   return { ... state, error: true }
  // }
  return state;
};

const myPokemonsPaginationReducer = (state = { numberOfPokemonsToRender: 20 }, action) => {
  if (action.type === "LOAD_MORE") {
    return { numberOfPokemonsToRender: state.numberOfPokemonsToRender + 20 };
  }
  return state;
}

const reducer = combineReducers({
  catch: catchReducer,
  homePagination: homePagePaginationReducer,
  myPokemonsPagination: myPokemonsPaginationReducer
});

const store = createStore(reducer);

export default store;