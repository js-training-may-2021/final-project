import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.APP;

export const getLoadingStatus = (state) => {
  return state[NAME_SPACE].isLoading;
};

export const getErrorMessage = (state) => {
  return state[NAME_SPACE].errorMessage;
};
