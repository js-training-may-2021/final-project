import {ActionTypes} from "./actionTypes";

export const setPokemons = (pokemons) => {
    return {
        type: ActionTypes.SET_POKEMONS,
        payload: pokemons
    }
}

export const appendPokemons = (pokemons) => {
    return {
        type: ActionTypes.APPEND_POKEMONS,
        payload: pokemons
    }
}

export const setPage = (page) => {
    return {
        type: ActionTypes.SET_PAGE,
        payload: page
    }
}

export const selectedPokemon = (pokemon) => {
    return {
        type: ActionTypes.SELECTED_POKEMON,
        payload: pokemon,
    };
}

export const removeSelectedPokemon = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_POKEMON,
    };
}

export const caughtPokemons = (pokemons) => {
    return {
        type: ActionTypes.CAUGHT_POKEMONS,
        payload: pokemons
    }
}

