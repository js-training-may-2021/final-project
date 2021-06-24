const CAUGHT = 'CAUGHT';
const SET_POKEMONS = 'SET_POKEMONS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
// const SET_TOTAL_POKEMON_COUNT = 'SET_TOTAL_POKEMON_COUNT';

// const WATCHPROFILE = 'WATCHPROFILE';

let initialState = {
    pokemons: [],
    pageSize: 12,
    totalPokemonsCount: 960,
    currentPage: 1,
};

const pokemonListReducer = (state=initialState, action) => {
    switch (action.type) {
        case CAUGHT:
            return {
                ...state, 
                pokemons: state.pokemons.map ( p => {
                    if (p.id === action.pokemonID) {
                        return {...p, isCaught: true}
                    }
                    return p;
                })
            }
        case SET_POKEMONS: 
            return {
                ...state,
                 pokemons: action.pokemons,
            } 
        case SET_CURRENT_PAGE: 
            return {
                ...state,
                currentPage: action.currentPage,
            }   
        // case SET_TOTAL_POKEMON_COUNT: 
        //     return {
        //         ...state,
        //         totalPokemonsCount: action.totalPokemonsCount,
        //     } 
            
            

        // case WATCHPROFILE:  
        default:
            return state;    
    }
}

//action-creators:
export const caught = (pokemonID) => ({type: CAUGHT, pokemonID});
export const setPokemons = (pokemons) => ({type: SET_POKEMONS, pokemons});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
// export const setTotalPokemonsCountAC = (totalPokemonsCount) => ({type: SET_TOTAL_POKEMON_COUNT, totalPokemonsCount});


//caught action creator

export default pokemonListReducer;