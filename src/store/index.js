import { createStore } from 'redux';

const catchReducer = (state = { catchedPokemons: [] }, action) => {
  if (action.type === "ADD_POKEMON") {
    return { catchedPokemons: [...state.catchedPokemons, action.pokemonId] };
  }
  if (action.type === "REMOVE_POKEMON") {
    return { catchedPokemones: state.catchedPokemons.filter(pokemon => pokemon.id !== action.pokemonId) };
  }
  return state;
};

const store = createStore(catchReducer);

export default store;