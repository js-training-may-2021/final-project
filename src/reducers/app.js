import * as types from '../common/actionTypes/pokedex';

export const defaultState = {
  title: 'pokedex',
  isLoading: false,
}

const app = (state=defaultState, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return { ...state, isLoading: action.data};
    default:
      return state;
  }
}

export default app;
