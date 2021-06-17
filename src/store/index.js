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

const homePagePaginationReducer = (state = { numberOfPokemonsToRender: 20 }, action) => {
  if (action.type === "LOAD_MORE") {
    // return { numberOfPokemonsToRender: action.payload };
    return { numberOfPokemonsToRender: state.numberOfPokemonsToRender + 20 };
  }
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