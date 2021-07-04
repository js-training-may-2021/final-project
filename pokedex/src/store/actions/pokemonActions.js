export const initPokemon = (dispatch, limit, catchedPokemons) => {
    return fetch(`http://localhost:3000/pokemons`)
        .then(resp => resp.json())
        .then(data => {
            let catchedList = data;
            if(catchedPokemons !== undefined) {
                catchedList = catchedList.filter(item => {
                    return Boolean(catchedPokemons.filter(itemP => itemP.id === item.id).length);
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

export const getPokemons = (dispatch, offset, limit, catchedPokemons, totalCount) => {
    let page = 1 + offset/limit;
    let filterPokemons = catchedPokemons !== undefined ? 
    catchedPokemons.map(item => `id=${item.id}`).join('&') + '&' : 
    '';
    if (catchedPokemons !== undefined && catchedPokemons.length ===0) {
        filterPokemons = 'id=-1&';
    }
    let numberCatched = catchedPokemons !== undefined ? catchedPokemons.length : null;
    let count = catchedPokemons !== undefined ? catchedPokemons.length : totalCount;
    return fetch(`http://localhost:3000/pokemons?${filterPokemons}_page=${page}&_limit=${limit}`)
        .then(resp => resp.json())
        .then(data => {
            let catchedList = data;
            dispatch({
                type: 'POKEMON_LIST_UPDATED',
                data: {
                    pokemons: catchedList,
                    previous: (offset - limit) < 0 ? null : offset - limit,
                    next: (offset + limit) <= count ? offset + limit : null,
                    numberCatched
                }
            })
        })
        .catch(err => console.log(err))
}

export const getPokemon = (dispatch, id) => {
    return fetch(`http://localhost:3000/pokemons?id=${id}`)
        .then(resp => resp.json())
        .then(data => {
            const pokemon = data[0];
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
            id: id,
            dateCatched: new Date()
        }
    })
}