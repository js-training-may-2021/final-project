import {combineReducers} from "redux";
import {pokemonReducer, selectedPokemonReducer, pageReducer} from "./pokemonReducer";

const reducers = combineReducers({
    allPokemons: pokemonReducer,
    pokemon: selectedPokemonReducer,
    page: pageReducer
})

export default reducers;