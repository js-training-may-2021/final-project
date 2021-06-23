import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const init = async() => {
  const ext = window.__REDUX_DEVTOOLS_EXTENSION__;
  const devtoolMiddleware = ext && ext();
  
  const response = await axios.get('http://localhost:8000/pokemons?_page=1&_limit=20');
  const initialState = response.data;

  const store = createStore(rootReducer, initialState, devtoolMiddleware);
  
  
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={ store }>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
  
}

init();
reportWebVitals();
