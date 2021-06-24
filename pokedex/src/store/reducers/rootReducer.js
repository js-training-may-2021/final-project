const initialState = {
    pokemons: [],
    catchedPokemons: [],
    previousPage: null,
    nextPage: null,
    numberOfPage: 0,
    currentPage: 1,
    limit: 20
}

const getNumberOfPage = count => {
    return Math.ceil(count / 20);
}

const getCurrentPage = ({ next, count }) => {
    if (next === null) {
        return getNumberOfPage(count)
    }
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) { // check if action.type match any of the cases
        case 'INITIAL_API_CALL': // if action.type === 'GET_POKEMONS'
            console.log('Making the initial calls ...');

            return {
                ...state,
                previousPage: null,
                nextPage: state.limit,
                numberOfPage: getNumberOfPage(action.data.count),
                pokemons: action.data.pokemons.map(p => {
                    p.imgUrl = `http://localhost:5000/pokemons/${p.id}.png`;
                    return p;
                })
            };
        
        case 'POKEMON_LIST_UPDATED':
            return {
                ...state,
                previousPage: action.data.previous,
                nextPage: action.data.next,
                pokemons: action.data.pokemons.map(p => {
                    p.imgUrl = `http://localhost:5000/pokemons/${p.id}.png`;
                    return p;
                }),
                currentPage: getNumberOfPage(action.data.previous + state.limit)
            }    

        case 'POKEMON_CATCH':
            return {
                ...state,
                catchedPokemons: [...state.catchedPokemons, action.data.id]
            }  
            
        case 'POKEMON_GET':
            return {
                ...state,
                pokemon: action.data.pokemon
            } 
            
        default: // if non of the cases match
            return state;
    }
}

export default rootReducer;
