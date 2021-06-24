import {createContext, useEffect, useReducer} from "react";
import {pokemonReducer} from "./reducers/pokemonReducer";

export const initialState = {
    pokemons: localStorage.getItem('pokemons') ? JSON.parse(localStorage.getItem('pokemons')) : [],
    caughtPokemons: localStorage.getItem('caughtPokemons')
        ? JSON.parse(localStorage.getItem('caughtPokemons')) : [],
    page: 1,
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(pokemonReducer, initialState);
    useEffect(() => {
        localStorage.setItem('pokemons', JSON.stringify(state.pokemons));
        localStorage.setItem('caughtPokemons', JSON.stringify(state.caughtPokemons))
    }, [state])
    //actions
    const catchPokemon = (id) => {
        console.log('catchPokemon ',id)
        let newPokemon = {
            id: id,
            captureDate: new Date().toLocaleDateString()
        };
        dispatch({
            type: "CATCH_POKEMON",
            payload: newPokemon
        })
    }
    const releasePokemon = (id) => {
        dispatch({
            type: "RELEASE_POKEMON",
            payload: id
        })
    }
    return (
        <GlobalContext.Provider value={
            {
                pokemons: state.pokemons,
                caughtPokemons: state.caughtPokemons,
                catchPokemon: catchPokemon,
                releasePokemon: releasePokemon
            }
        }>
            {props.children}
        </GlobalContext.Provider>
    )
}