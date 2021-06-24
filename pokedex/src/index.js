import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import { store } from './store';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <App />
        </Router>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
