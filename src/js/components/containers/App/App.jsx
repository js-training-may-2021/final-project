import React from 'react';
import {Router, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from "history";
import {AppRoute} from '../../../utils';
import Main from '../Main/Main.jsx';
import Detail from '../Detail/Detail.jsx';
import Caught from '../Caught/Caught.jsx';

// import PropTypes from 'prop-types';

const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main />
        </Route>
        <Route exact path={AppRoute.CAUGHT}>
          <Caught />
        </Route>
        <Route path={AppRoute.DETAIL}>
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

/* App.propTypes = {

}; */

export default App;
