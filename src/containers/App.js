import React, { Component } from 'react';

import CounterApp from './CounterApp';

/**
 * Application start point
 */
export default class App extends Component {
  render() {
    return (
        <div>
          <CounterApp />
        </div>
    );
  }
}
