import { combineReducers } from 'redux';

import reducer from './reducer.js';

const reducers = combineReducers({
  main : reducer,
});

export default reducers; 
