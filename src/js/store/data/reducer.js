import axios from 'axios';
import Pokemon from '../../models/pokemon.js';
import {getPokemons} from './selectors.js';
import {POKEMONS_PER_PAGE} from '../../utils.js';

const initialState = {
  pokemons: [],
	isLoading: false,
	errorMessage: null,
};

const ActionType = {
  LOAD_POKEMONS: 'LOAD_POKEMONS',
	CHANGE_LOADING_STATUS: 'CHANGE_LOADING_STATUS',
	CHANGE_ERROR_MESSAGE: 'CHANGE_ERROR_MESSAGE',
};

const ActionCreator = {
  loadPokemons: pokemons => {
    return {
      type: ActionType.LOAD_POKEMONS,
      payload: pokemons,
    };
  },

  changeLoadingStatus: isLoading => {
    return {
      type: ActionType.CHANGE_LOADING_STATUS,
      payload: isLoading,
    };
  },

  changeErrorMessage: message => {
    return {
      type: ActionType.CHANGE_ERROR_MESSAGE,
      payload: message,
    };
  },
};

const loadPokemons = (page) => (dispatch, getState) => {
	dispatch(ActionCreator.changeLoadingStatus(true));
	dispatch(ActionCreator.changeErrorMessage(null));

  return axios.get(`http://localhost:3000/pokemons?_page=${page}&_limit=${POKEMONS_PER_PAGE}`)
    .then(response => {
      return Pokemon.parsePokemons(response.data);
    })
    .then(newPokemons => {
			dispatch(ActionCreator.changeLoadingStatus(false));
      dispatch(ActionCreator.loadPokemons(getPokemons(getState()).concat(newPokemons)));
    })
    .catch(err => {
			dispatch(ActionCreator.changeLoadingStatus(false));
      dispatch(ActionCreator.changeErrorMessage('Failed to load pokemons. Please try again later.'));
      throw err;
    });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
      
		case ActionType.CHANGE_LOADING_STATUS:
			return {
				...state,
				isLoading: action.payload,
			};
      
		case ActionType.CHANGE_ERROR_MESSAGE:
			return {
				...state,
				errorMessage: action.payload,
			};
  }

  return state;
};

export {reducer, loadPokemons, ActionCreator};
