import React, { Component } from 'react';
import {connect} from 'react-redux';

import {saveCount} from '../actions/counter';
import CounterComponent from '../components/Counter';
import CounterListComponent from '../components/CounterList';

/**
 * Counter configuration component,
 * that arranges the counter and the saved counts list
 */
export class CounterApp extends Component {
  render() {
    const {onSaveCounterClicked} = this.props;
    const {counts} = this.props.counter;

    return (
      <div>
          <CounterComponent onSave={onSaveCounterClicked} />
          <CounterListComponent counts={counts.length > 0 ? counts : []} />
      </div>
    );
  }
}

/**
 * tranfers the state to the component props
 *
 * @param state
 * @returns {{counter: *}}
 */
function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

/**
 * transfers action dispatcher to the component props
 *
 * @param dispatch
 * @returns {{onSaveCounterClicked: (function())}}
 */
function mapDispatchToProps(dispatch) {
  return {
    onSaveCounterClicked: (count) => {
      dispatch(saveCount(count));
    }
  };
}

/**
 * The counter container connects the React component with the redux mechanics
 */
const CounterAppContainer = connect(mapStateToProps, mapDispatchToProps)(CounterApp);

export default CounterAppContainer;