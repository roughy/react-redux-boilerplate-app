import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import appReducer from './reducers';
import App from './containers/App';

const store = createStore(appReducer);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);