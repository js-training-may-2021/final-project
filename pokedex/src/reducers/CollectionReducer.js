const collection = (state = [], action) => {
    switch (action.type) {
      case 'CATCH_POKEMON':
          return [...state, {id: action.payload.id, name: action.payload.name, caught: true, caughtAt: new Date().toLocaleDateString()}];
          
      default:
        return state;
    }
}

export default collection;