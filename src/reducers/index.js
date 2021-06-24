import { combineReducers } from 'redux';
import app from './app';
import pokedex from './reducers';

const appReducer = combineReducers({
  app,
  pokedex,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;
