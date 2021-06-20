import {getCatchDate} from '../../utils.js';

const initialState = {
  caughtPokemons: [],
  activePokemon: null,
};

const ActionType = {
  UPDATE_POKEMON_STATUS: 'UPDATE_POKEMON_STATUS',
  CHANGE_ACTIVE_POKEMON: 'CHANGE_ACTIVE_POKEMON',
};

const ActionCreator = {
  updatePokemonStatus: pokemon => {
    return {
      type: ActionType.UPDATE_POKEMON_STATUS,
      payload: pokemon,
    };
  },

  changeActivePokemon: pokemon => {
    return {
      type: ActionType.CHANGE_ACTIVE_POKEMON,
      payload: pokemon,
    };
  },
};

const updatePokemonStatus = (caughtPokemons, pokemon) => {
  if (!pokemon.isCaught) {
    pokemon.isCaught = true;
    pokemon.catchDate = getCatchDate();
    caughtPokemons.unshift(pokemon);

    return caughtPokemons;
  } else {
    pokemon.isCaught = false;
    pokemon.catchDate = null;
    
    return caughtPokemons.filter(it => it.id !== pokemon.id);
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_POKEMON_STATUS:
      return {
        ...state,
        caughtPokemons: updatePokemonStatus(state.caughtPokemons, action.payload),
      };
      
    case ActionType.CHANGE_ACTIVE_POKEMON:
      return {
        ...state,
        activePokemon: action.payload,
      };
  }

  return state;
};

export {reducer, ActionCreator};
