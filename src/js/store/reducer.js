import {combineReducers} from 'redux';
import {reducer as data} from './data/reducer.js';
import {reducer as app} from './app/reducer.js';
import NameSpace from './name-space.js';

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.APP]: app,
});
