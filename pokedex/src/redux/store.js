import { combineReducers, createStore } from "redux";
import reducer from './reducer';

let reducers = combineReducers({ allData: reducer });

let store = createStore(reducers);

export default store;