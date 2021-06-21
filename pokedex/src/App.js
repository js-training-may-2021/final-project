import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Menu from './components/Menu';

import Home from './components/Home';
import About from './components/About';
import Caught from './components/Caught';
import Pokemon from './pages/pokemon';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/caught" component={Caught}/>
          <Route exact path="/home/:id">
            <Pokemon/>
          </Route>  
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>      
      </Router>
    </>
  );
}

export default App;
