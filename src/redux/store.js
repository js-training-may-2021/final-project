import { combineReducers, createStore } from "redux";
import caughtPokemonReducer from "./caughtPokemon-reducer";
import pokemonListReducer from "./pokemonList-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers ({
    pokemonListPage: pokemonListReducer,
    profilePage: profileReducer,
    caughtPokemon: caughtPokemonReducer,
})

let store = createStore(reducers);

window.store = store;

export default store;