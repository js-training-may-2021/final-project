export const initPokemon = (dispatch, limit, catchedPokemons) => {
    return fetch('http://localhost:5000/db.json')
        .then(resp => resp.json())
        .then(data => {
            let catchedList = data.pokemons;
            if(catchedPokemons !== undefined) {
                catchedList = catchedList.filter(item => {
                    return catchedPokemons.includes(item.id);
                })
            }
            dispatch({
                type: 'INITIAL_API_CALL',
                data: {
                    pokemons: catchedList.slice(0, limit),
                    count: catchedList.length
                }
            })
        })
        .catch(err => console.log(err))
}

export const getPokemons = (dispatch, offset, limit, catchedPokemons) => {
    return fetch('http://localhost:5000/db.json')
        .then(resp => resp.json())
        .then(data => {
            let catchedList = data.pokemons;
            if(catchedPokemons !== undefined) {
                catchedList = catchedList.filter(item => {
                    return catchedPokemons.includes(item.id);
                })
            }
            dispatch({
                type: 'POKEMON_LIST_UPDATED',
                data: {
                    pokemons: catchedList.slice(offset, offset + limit),
                    previous: (offset - limit) < 0 ? null : offset - limit,
                    next: (offset + limit) <= catchedList.length ? offset + limit : null
                }
            })
        })
        .catch(err => console.log(err))
}

export const getPokemon = (dispatch, id) => {
    return fetch('http://localhost:5000/db.json')
        .then(resp => resp.json())
        .then(data => {
            const pokemon = data.pokemons.filter(item => item.id === id);
            dispatch({
                type: 'POKEMON_GET',
                data: {
                    pokemon: pokemon
                }
            })
        })
        .catch(err => console.log(err))
}

export const catchPokemon = (dispatch, id) => {
    dispatch({
        type: 'POKEMON_CATCH',
        data: {
            id: id
        }
    })
}