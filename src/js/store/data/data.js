import axios from 'axios';
import Pokemon from '../../models/pokemon.js';
import {getPokemons} from './selectors.js';
import {ActionCreator as AppActionCreator} from '../app/app.js';
import {POKEMONS_PER_PAGE, getCatchDate} from '../../utils.js';

const initialState = {
  pokemons: [],
  caughtPokemons: [],
  activePokemon: null,
};

const ActionType = {
  LOAD_POKEMONS: 'LOAD_POKEMONS',
	LOAD_CAUGHT_POKEMONS: 'LOAD_CAUGHT_POKEMONS',
  CHANGE_ACTIVE_POKEMON: 'CHANGE_ACTIVE_POKEMON',
};

const ActionCreator = {
  loadPokemons: pokemons => {
    return {
      type: ActionType.LOAD_POKEMONS,
      payload: pokemons,
    };
  },

  loadCaughtPokemons: pokemons => {
    return {
      type: ActionType.LOAD_CAUGHT_POKEMONS,
      payload: pokemons,
    };
  },

  changeActivePokemon: pokemon => {
    return {
      type: ActionType.CHANGE_ACTIVE_POKEMON,
      payload: pokemon,
    };
  },
};

const Operation = {
	loadPokemons: (page) => (dispatch, getState) => {
		dispatch(AppActionCreator.changeLoadingStatus(true));
		dispatch(AppActionCreator.changeErrorMessage(null));

		return axios.get(`http://localhost:3000/pokemons?_page=${page}&_limit=${POKEMONS_PER_PAGE}`)
			.then(response => {
				return Pokemon.parsePokemons(response.data);
			})
			.then(newPokemons => {
				dispatch(AppActionCreator.changeLoadingStatus(false));
				dispatch(ActionCreator.loadPokemons(getPokemons(getState()).concat(newPokemons)));
			})
			.catch(err => {
				dispatch(AppActionCreator.changeLoadingStatus(false));
				dispatch(AppActionCreator.changeErrorMessage('Failed to load pokemons. Please try again later.'));
				throw err;
			});
	},

	loadCaughtPokemons: () => (dispatch) => {
		dispatch(AppActionCreator.changeLoadingStatus(true));
		dispatch(AppActionCreator.changeErrorMessage(null));

		return axios.get(`http://localhost:3000/pokemons?isCaught=true`)
			.then(response => {
				return Pokemon.parsePokemons(response.data);
			})
			.then(newPokemons => {
				dispatch(AppActionCreator.changeLoadingStatus(false));
				dispatch(ActionCreator.loadCaughtPokemons(newPokemons));
			})
			.catch(err => {
				dispatch(AppActionCreator.changeLoadingStatus(false));
				dispatch(AppActionCreator.changeErrorMessage('Failed to load caught pokemons. Please try again later.'));
				throw err;
			});
	},

	loadPokemon: (id) => (dispatch) => {
		dispatch(AppActionCreator.changeLoadingStatus(true));
		dispatch(AppActionCreator.changeErrorMessage(null));

		return axios.get(`http://localhost:3000/pokemons/${id}`)
			.then(response => {
				return Pokemon.parsePokemon(response.data);
			})
			.then(pokemon => {
				dispatch(AppActionCreator.changeLoadingStatus(false));
				dispatch(ActionCreator.changeActivePokemon(pokemon));
			})
			.catch(err => {
				dispatch(AppActionCreator.changeLoadingStatus(false));
				dispatch(AppActionCreator.changeErrorMessage('Failed to load the pokemon. Please try again later.'));
				throw err;
			});
	},

	updatePokemonStatus: (pokemon) => (dispatch) => {
		dispatch(AppActionCreator.changeLoadingStatus(true));
		dispatch(AppActionCreator.changeErrorMessage(null));

		const getPokemonStatus = () => {
			if (!pokemon.isCaught) {
				pokemon.isCaught = true;
				pokemon.catchDate = getCatchDate();

				return {
					isCaught: true,
					catchDate: getCatchDate(),
				};
			} else {
				pokemon.isCaught = false;
				pokemon.catchDate = null;

				return {
					isCaught: false,
					catchDate: null,
				};
			}
		};

		return axios.patch(`http://localhost:3000/pokemons/${pokemon.id}`, getPokemonStatus())
			.then(() => {
				dispatch(AppActionCreator.changeLoadingStatus(false));
				dispatch(Operation.loadCaughtPokemons());
			})
			.catch(err => {
				dispatch(AppActionCreator.changeLoadingStatus(false));
				dispatch(AppActionCreator.changeErrorMessage('Failed to update pokemon status. Please try again later.'));
				throw err;
			});
	},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {		
    case ActionType.LOAD_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };

		case ActionType.LOAD_CAUGHT_POKEMONS:
			return {
				...state,
				caughtPokemons: action.payload,
			};
      
    case ActionType.CHANGE_ACTIVE_POKEMON:
      return {
        ...state,
        activePokemon: action.payload,
      };
  }

  return state;
};

export {reducer, ActionCreator, Operation};
