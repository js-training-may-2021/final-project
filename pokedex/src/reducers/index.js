import _ from 'lodash';


const pokemonsReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_MORE_POKEMONS':
      return  [...state, ...action.payload ]
    case 'CATCH_POKEMON':
        const newState = _.update(state, `[${action.payload.id - 1}]`, () => {return {id: action.payload.id, name: action.payload.name, caught: true, caughtAt: new Date().toLocaleDateString()}});
        return [...newState];
    default:
      return state
  }
}


export default pokemonsReducer;

