import { CATCH_POKEMON, RELEASE_POKEMON } from "../actions";

const initialState = [];

const catchReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATCH_POKEMON:
      const targetPokemon = action.payload;
      const isAlreadyCaught =
        state.find((el) => el.id === targetPokemon.id) !== undefined;
      return isAlreadyCaught ? state : [...state, action.payload];

    case RELEASE_POKEMON:
      return state.filter((el) => el.id !== action.payload);

    default:
      return state;
  }
};

export default catchReducer;
