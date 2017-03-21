import React from 'react'
import { render } from 'react-dom'
import {applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import axios from 'axios';

const middleware = applyMiddleware(promise(),thunk);
const store = createStore(reducer, middleware);

store.dispatch({
    type: 'FETCH_FLIGHTS',
    payload: axios.get('https://raw.githubusercontent.com/ilyakarev/ott/master/data.json')
});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)