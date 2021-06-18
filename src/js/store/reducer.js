import axios from 'axios';
import Pokemon from '../models/pokemon.js';
import {getCatchDate} from '../utils.js';

const initialState = {
  pokemons: [],
  caughtPokemons: [],
  activePokemon: null,
};

const ActionType = {
  LOAD_POKEMONS: 'LOAD_POKEMONS',
  UPDATE_POKEMON_STATUS: 'UPDATE_POKEMON_STATUS',
  CHANGE_ACTIVE_POKEMON: 'CHANGE_ACTIVE_POKEMON',
}

const ActionCreator = {
  loadPokemons: pokemons => {
    return {
      type: ActionType.LOAD_POKEMONS,
      payload: pokemons,
    };
  },

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
}

const loadPokemons = () => dispatch => {
  return axios.get(`http://localhost:3000/pokemons`)
    .then(response => {
      return Pokemon.parsePokemons(response.data);
    })
    .then(pokemons => {
      dispatch(ActionCreator.loadPokemons(pokemons));
    })
    .catch(err => {
      throw err;
    });
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
    case ActionType.LOAD_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

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
}

export {reducer, loadPokemons, ActionCreator};
