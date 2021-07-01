const C_CATCH_IT = 'C_CATCH_IT';
const C_LET_GO = 'LET_GO';
const C_SET_POKEMONS = 'SET_POKEMONS';
const C_SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';


let initialState = {
    pokemons: [],
    pageSize: 12,
    totalPokemonsCount: 960,
    currentPage: 1,
};
 
const caughtPokemonReducer = (state=initialState, action) => {
    switch (action.type) {
        case C_CATCH_IT:
            return {
                ...state, 
                pokemons: state.pokemons.map ( p => {
                    if (p.id === action.pokemonID) {
                        return {...p, isCaught: "true"}
                    }
                    return p;
                })
            }
        case C_LET_GO:
            return {
                ...state, 
                pokemons: state.pokemons.map ( p => {
                    if (p.id === action.pokemonID) {
                        return {...p, isCaught: "false"}
                    }
                    return p;
                })
            }    
        case C_SET_POKEMONS: 
            return {
                ...state,
                 pokemons: action.pokemons,
            } 
        case C_SET_CURRENT_PAGE: 
            return {
                ...state,
                currentPage: action.currentPage,
            }   
 
        default:
            return state;    
    }
}

//action-creators:
export const c_catchIt = (pokemonID) => ({type: C_CATCH_IT, pokemonID});
export const c_letgo = (pokemonID) => ({type: C_LET_GO, pokemonID});
export const c_setPokemons = (pokemons) => ({type: C_SET_POKEMONS, pokemons});
export const c_setCurrentPage = (currentPage) => ({type: C_SET_CURRENT_PAGE, currentPage});


export default caughtPokemonReducer;