
export default function pokemonListReducer(state, action) {
  let newState = [...state];
  switch (action.type) {
    case "CAUGHT":
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].id == action.id) {
          newState[i] = {
            name: newState[i].name,
            id: newState[i].id,
            caught: true,
            time: `${action.time}`.substring(0, `${action.time}`.indexOf(' GMT')),
          };
        }
      }
      return newState;


    default:
      return state;
  }
}
