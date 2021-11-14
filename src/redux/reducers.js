import { combineReducers } from 'redux'

const pokemonsReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POKEMONS':
            return [...state, ...action.payload ]
        default:
            return state
    }
}

const caughtPokemonsReducer = (state = [], action) => {
    switch (action.type) {
        case 'CATCH_POKEMON':
            return [...state, action.payload ]
        default:
            return state
    }
}


export default combineReducers({
    pokemons: pokemonsReducer,
    caughtPokemons: caughtPokemonsReducer,
})


