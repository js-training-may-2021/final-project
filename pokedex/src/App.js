import React from "react";
import Header from "./components/Header";
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/Main";
import Caught from "./pages/Caught";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <Router>
    <main id="app">
      <div>
        <Header/>
      </div>
      <Switch>
        <Route path="/main" component={Main} />
        <Route path="/caught" component={Caught} />
        <Route path="/pokemon" component={Pokemon} />
      </Switch>
        <Redirect to='/main'/>
    </main>
    </Router>
  );
}

export default App;
