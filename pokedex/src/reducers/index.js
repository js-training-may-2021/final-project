import { combineReducers } from 'redux';

import pokemons from './pokemons';
import backpack from './backpack';

export default combineReducers({
  pokemons,
  backpack,
});
