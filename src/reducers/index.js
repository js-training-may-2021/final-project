import { combineReducers } from "redux";

import catchReducer from "./catch-reducer";

const rootReducer = combineReducers({
  catch: catchReducer,
});

export const catchSelector = (state) => state.catch;

export default rootReducer;
