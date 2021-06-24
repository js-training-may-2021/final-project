const pokemonsBase = (state = [], action) => {
    switch (action.type) {
      case 'LOAD_MORE_POKEMONS':
        return  [...state, ...action.payload ];
      
      default:
        return state;
    }
}

export default pokemonsBase;