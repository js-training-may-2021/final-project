import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.DATA;

export const getPokemons = (state) => {
  return state[NAME_SPACE].pokemons;
};

export const getCaughtPokemons = (state) => {
  return state[NAME_SPACE].caughtPokemons;
};

export const getActivePokemon = (state) => {
  return state[NAME_SPACE].activePokemon;
};
