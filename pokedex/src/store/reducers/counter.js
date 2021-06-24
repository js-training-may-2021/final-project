import { INCREMENT, DECREMENT } from '../constants';

const handleChange = (state, change) => {
  const { counter } = state;
  return {
    ...state,
    counter: counter + change,
  };
};

const INITIAL_STATE = {
  counter: 1,
};

export const counter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return handleChange(state, 1);

    case DECREMENT:
      return handleChange(state, -1);

    default:
      return state;
  }
};
