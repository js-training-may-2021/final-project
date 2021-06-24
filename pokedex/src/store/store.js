import { createStore } from "redux";
import pokemonListReducer from "./reducers/reducers";
import db from "../db.json";

let store = createStore(pokemonListReducer, {
  pokemonsList: db.pokemons.slice(0, 720),
});

export { store };
