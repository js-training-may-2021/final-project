import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.DATA;

export const getPokemons = (state) => {
  return state[NAME_SPACE].pokemons;
};

export const getLoadingStatus = (state) => {
  return state[NAME_SPACE].isLoading;
};

export const getErrorMessage = (state) => {
  return state[NAME_SPACE].errorMessage;
};
