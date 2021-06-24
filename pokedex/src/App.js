import React from "react";
import Header from "./components/header/Header";
import { Route, Switch, Redirect, BrowserRouter as Router } from "react-router-dom";
import Main from "./pages/main/Main";
import Caught from "./pages/caught/Caught";
import Pokemon from "./pages/pokemon/Pokemon";
import styles from './app.module.css';
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <Router>
      <ScrollToTop/>
    <main id="app" className={styles.main}>
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
