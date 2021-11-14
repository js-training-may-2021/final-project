import { combineReducers, createStore } from "redux";
import pokemonListReducer from "./pokemonList-reducer";
import profileReducer from "./profile-reducer";

const reducers = combineReducers ({
    pokemonListPage: pokemonListReducer,
    profilePage: profileReducer,
})

// store - наше хранилище с данными
// createStore -  создает хранилище
let store = createStore(reducers);

window.store = store;
export default store;


