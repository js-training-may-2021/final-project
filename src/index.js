import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './js/store/reducer.js';
import {loadPokemons} from './js/store/data/reducer.js';
import App from './js/components/containers/App/App.jsx';
import {getCurrentPage} from './js/utils.js';
import './styles/index.scss';

const store = createStore(reducer, applyMiddleware(thunk));
store.dispatch(loadPokemons(getCurrentPage()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
