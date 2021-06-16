import { default as garlandsReducer } from './garlands';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  garlandsReducer,
});

export default rootReducer;
