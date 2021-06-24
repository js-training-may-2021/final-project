import Data from '../db.json';
import catched from '../catched.json';

let images = [];
for (let i = 1; i <= 720; i++) {
    let img = require(`../main/pokemons/${i}.png`);
    images.push(img.default);
}

const TO_CATCH = 'TO-CATCH';
const SET_POKEMONS = 'SET-POKEMONS';

let initialState = {
    allData: {
        data: Data,
        images: images,
        catched: catched
    }
}

export const actionCreator = (event) => {
    return { type: TO_CATCH, event: event};
};
export const setPokemonsActionCreator = (pokemons, images) => {
    return { type: SET_POKEMONS, pokemons: pokemons, images: images};
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case TO_CATCH: { 
            // debugger;
            let id = action.event.target.id;
            let stateCopy = JSON.parse(JSON.stringify(state));

            stateCopy.allData.catched.catchedPokemons.push(stateCopy.allData.data.pokemons[id - 1]);
    
            let date = new Date();
            let time = `Caught at: ${date.getHours()}:${date.getMinutes()} ${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
            stateCopy.allData.catched.catchedPokemons[stateCopy.allData.catched.catchedPokemons.length - 1].time = String(time);
    
            stateCopy.allData.data.pokemons[id - 1].disabled = 'disabled';

            return stateCopy;
        }
        // case SET_POKEMONS: {
        //     // debugger;
        //     let stateCopy = JSON.parse(JSON.stringify(state));
        //     stateCopy.allData.data.pokemons = action.pokemons;
        //     stateCopy.allData.images = action.images;
        //     return stateCopy;
        // }
        default:
            return state;
    }
}

export default reducer;