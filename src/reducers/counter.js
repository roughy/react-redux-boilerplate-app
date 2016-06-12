import {SAVE_COUNT} from '../actions/counter';

/**
 * Handle all counter related actions
 *
 * @param state
 * @param action
 * @returns {*}
 */
const counter = (state = {
  lastCount: 0,
  counts: []
}, action) => {
  switch (action.type) {

    case SAVE_COUNT:
      state.counts.push(action.count);

      // TODO: keep the state from previous reducer
      return {
        lastCount: action.count,
        counts: state.counts,
      };

    default:
      return state;
  }
};

export default counter;
