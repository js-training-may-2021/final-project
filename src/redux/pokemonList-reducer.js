const CATCH_IT = 'CATCH_IT';
const LET_GO = 'LET_GO';
const SET_POKEMONS = 'SET_POKEMONS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_POKEMON_COUNT = 'SET_TOTAL_POKEMON_COUNT';

// const WATCHPROFILE = 'WATCHPROFILE';

let initialState = {
    pokemons: [],
    pageSize: 12,
    totalPokemonsCount: 0,
    currentPage: 1, 
};
 //редьюсеры - чистые функции
const pokemonListReducer = (state=initialState, action) => {
    switch (action.type) {
        case CATCH_IT:
            return {
                ...state, 
                pokemons: state.pokemons.map ( p => {
                    if (p.id === action.pokemonID) {
                        return {...p, isCaught: true, date: action.date}
                    }
                    return p;
                })
            }
        case LET_GO:
            return {
                ...state, 
                pokemons: state.pokemons.map ( p => {
                    if (p.id === action.pokemonID) {
                        return {...p, isCaught: false, date: action.date}
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
        case SET_TOTAL_POKEMON_COUNT: 
            return {
                ...state,
                totalPokemonsCount: action.totalPokemonsCount,
            } 
            
            

        // case WATCHPROFILE:  
        default:
            return state;    
    }
}
 
//action-creators: функция кот вернет (!)объект с экшеном
//action-creator - функция, принимает значение, возвращает объект (экшен)
export const catchIt = (pokemonID, date) => ({type: CATCH_IT, pokemonID, date});
export const letgo = (pokemonID, date) => ({type: LET_GO, pokemonID, date});
export const setPokemons = (pokemons) => ({type: SET_POKEMONS, pokemons});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalPokemonsCount = (totalPokemonsCount) => ({type: SET_TOTAL_POKEMON_COUNT, totalPokemonsCount});




export default pokemonListReducer;