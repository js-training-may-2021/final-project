const initialState = {
    pokemons: [],
    catchedPokemons: [],
    totalCount: 0,
    previousPage: null,
    nextPage: null,
    totalNumberOfPage: 0,
    numberOfPage: 0,
    currentPage: 1,
    limit: 20
}

const getNumberOfPage = count => {
    return Math.ceil(count / 20);
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIAL_API_CALL':
            console.log('Making the initial calls ...');

            return {
                ...state,
                previousPage: null,
                nextPage: state.limit,
                totalNumberOfPage: getNumberOfPage(action.data.count),
                numberOfPage: getNumberOfPage(action.data.count),
                pokemons: action.data.pokemons,
                totalCount: action.data.count
            };
        
        case 'POKEMON_LIST_UPDATED':
            return {
                ...state,
                previousPage: action.data.previous,
                nextPage: action.data.next,
                pokemons: action.data.pokemons,
                currentPage: getNumberOfPage(action.data.previous + state.limit),
                numberOfPage: action.data.numberCatched !== null ? getNumberOfPage(action.data.numberCatched) : state.totalNumberOfPage
            }    

        case 'POKEMON_CATCH':
            return {
                ...state,
                catchedPokemons: [...state.catchedPokemons, 
                    {
                        id: action.data.id,
                        dateCatched: action.data.dateCatched
                    }
                ]
            }  
            
        case 'POKEMON_GET':
            return {
                ...state,
                pokemon: action.data.pokemon
            } 
            
        default:
            return state;
    }
}

export default rootReducer;
