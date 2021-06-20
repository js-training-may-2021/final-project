import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.APP;

export const getCaughtPokemons = (state) => {
  return state[NAME_SPACE].caughtPokemons;
};

export const getActivePokemon = (state) => {
  return state[NAME_SPACE].activePokemon;
};
