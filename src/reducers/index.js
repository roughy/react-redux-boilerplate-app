import { combineReducers } from 'redux';

import counter from './counter';

/**
 * combine all reducer
 */
const appReducer = combineReducers({
  counter
});

export default appReducer;
