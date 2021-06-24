import React from 'react';
import { history } from './common/helpers/history';
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
