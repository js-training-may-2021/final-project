import { combineReducers } from 'redux';
import { selectedPokemon } from './pokemon';
import { pokemons } from './pokemons';
import { counter } from './counter';

export default combineReducers({
  pokemons,
  selectedPokemon,
  counter,
});
