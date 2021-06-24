import { combineReducers } from 'redux';
import pokemonsBase from './LoadMoreReducer';
import collection from './CollectionReducer';

export default combineReducers({
  pokemonsBase, 
  collection
});




