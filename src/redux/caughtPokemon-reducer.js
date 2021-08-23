// const C_CATCH_IT = 'C_CATCH_IT';
// const C_LET_GO = 'LET_GO';
// const C_SET_POKEMONS = 'SET_POKEMONS';
const SET_CURRENT_PAGE_CAUGHT = 'SET_CURRENT_PAGE_CAUGHT';
const SET_TOTAL_CAUGHT_POKEMONS_COUNT = 'SET_TOTAL_CAUGHT_POKEMONS_COUNT';
// const ADD_POKEMON_TO_CAUGHT_LIST = 'ADD_POKEMON_TO_CAUGHT_LIST';

let initialState = {
    totalCaughtPokemonsCount: 0,
    currentPageCaught: 1,
};
 
const caughtPokemonReducer = (state=initialState, action) => {
    switch (action.type) {
        // case C_CATCH_IT:
        //     return {
        //         ...state, 
        //         pokemons: state.pokemons.map ( p => {
        //             if (p.id === action.pokemonID) {
        //                 return {...p, isCaught: "true"}
        //             }
        //             return p;
        //         })
        //     }
        // case C_LET_GO:
        //     return {
        //         ...state, 
        //         pokemons: state.pokemons.map ( p => {
        //             if (p.id === action.pokemonID) {
        //                 return {...p, isCaught: "false"}
        //             }
        //             return p;
        //         })
        //     }    
        // case C_SET_POKEMONS: 
        //     return {
        //         ...state,
        //          pokemons: action.pokemons,
        //     } 

        case SET_CURRENT_PAGE_CAUGHT: 
            return {
                ...state,
                currentPage_caught: action.currentPage_caught,
            }  

        case SET_TOTAL_CAUGHT_POKEMONS_COUNT: 
            return {
                ...state,
                    totalCaughtPokemonsCount: action.totalCaughtPokemonsCount,
            }    

        // case ADD_POKEMON_TO_CAUGHT_LIST: 
        //     return {
        //         ...state,
        //             totalCaughtPokemonsCount: totalCaughtPokemonsCount += 1,
        //     }

        default:
            return state;    
    }
}

// //action-creators:
// export const c_catchIt = (pokemonID) => ({type: C_CATCH_IT, pokemonID});
// export const c_letgo = (pokemonID) => ({type: C_LET_GO, pokemonID});
// export const c_setPokemons = (pokemons) => ({type: C_SET_POKEMONS, pokemons});
export const setCurrentPageCaught = (currentPageCaught) => ({type: SET_CURRENT_PAGE_CAUGHT, currentPageCaught});
export const setTotalCaughtPokemonsCount = (totalCaughtPokemonsCount) => ({type: SET_TOTAL_CAUGHT_POKEMONS_COUNT, totalCaughtPokemonsCount});
// export const addPokemonToCaughtList = () => ({type: ADD_POKEMON_TO_CAUGHT_LIST});


export default caughtPokemonReducer;