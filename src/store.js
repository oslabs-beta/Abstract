import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk'; //this was important to use in order to implement async requests in actions.js
import reducers from './reducers/index';
 
const store = createStore(
  reducers,
  composeWithDevTools(),
);
 
export default store;