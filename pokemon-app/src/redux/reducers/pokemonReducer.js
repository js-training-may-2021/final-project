import {ActionTypes} from '../actions/actionTypes';
import {initialState} from '../context';

export const pokemonReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_POKEMONS: {
            return {...state, pokemons: payload};
        }
        case ActionTypes.APPEND_POKEMONS: {
            return {...state, pokemons: [...state.pokemons, ...payload]};
        }
        case ActionTypes.CATCH_POKEMON: {
            let resultArray = [payload, ...state.caughtPokemons];
            resultArray.sort((a, b) => a.id - b.id);
            return {...state, caughtPokemons: resultArray}
        }
        case ActionTypes.RELEASE_POKEMON:
            return {
                ...state,
                caughtPokemons: state.caughtPokemons.filter(pok => pok.id !== payload)
            }
        default:
            return state;
    }
}

export const selectedPokemonReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_POKEMON:
            return {...state, ...payload};
        case ActionTypes.REMOVE_SELECTED_POKEMON:
            return {};
        default:
            return state;
    }
}

export const pageReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PAGE:
            return {...state, page: payload};
        default:
            return state;
    }
}
