import { INCREMENT, DECREMENT } from '../constants';

export const increaseCount = () => {
  return {
    type: INCREMENT,
  };
};

export const decreaseCount = () => {
  return {
    type: DECREMENT,
  };
};

export const nextPage = () => {
  return (dispatch) => {
    dispatch(increaseCount());
  };
};

export const previousPage = () => {
  return (dispatch) => {
    dispatch(decreaseCount());
  };
};
