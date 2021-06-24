import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import pokemonsReducer from './store/reducers'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import axios from 'axios';

const runApp = async() => {
  const response =  await axios.get('http://localhost:3002/pokemons');
  const pokemons = response.data  

  const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
  const devtoolMiddleware = ext && ext();

  const store = createStore(
    pokemonsReducer,
    pokemons,
    devtoolMiddleware,
  );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
};
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
runApp();
reportWebVitals();
