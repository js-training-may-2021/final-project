function pokemonsReducer(state, action) {
  switch (action.type) {
    case 'CATCH_POKEMON':
      const newState = state.filter((pokemon) => pokemon.id !== action.payload.id)
      const againState = [...newState, {id: action.payload.id, name: action.payload.name, caught: true, caughtAt: new Date().toLocaleDateString()}]
      const sortedPokemons = againState.sort((a,b) => a.id - b.id)
      return sortedPokemons;
    default:
      return state;
  }
}

export default pokemonsReducer;

