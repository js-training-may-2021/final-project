export default function pokemonListReducer(state, action) {
  let newArr = [...state.pokemonsList];
  switch (action.type) {
    case "CAUGHT":
      for (let i = 0; i < newArr.length; i++) {
        if (newArr[i].id == action.id) {
          newArr[i] = {
            name: newArr[i].name,
            id: newArr[i].id,
            caught: true,
            time: `${action.time}`.substring(
              0,
              `${action.time}`.indexOf(" GMT")
            ),
          };
        }
      }
      return Object.assign({}, state, { pokemonsList: newArr });

    default:
      return state;
  }
}
