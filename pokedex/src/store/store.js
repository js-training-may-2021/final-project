import { createStore } from 'redux'
import pokemonListReducer from './reducers/reducers'
import db from "../db.json"

let store = createStore(pokemonListReducer, db.pokemons);

export function getPokemonFromState (id) {
    const pokemons = store.getState();
    for (let i = 0; i < pokemons.length; i++) {
      if (pokemons[i].id == id) {
        return pokemons[i];
      }
    }
  };

export {store};

