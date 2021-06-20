import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {ActionCreator} from '../../../store/reducer.js';
import {AppRoute} from '../../../utils';
import Main from '../Main/Main.jsx';
import Detail from '../Detail/Detail.jsx';
import Caught from '../Caught/Caught.jsx';

const App = (props) => {
  const {
    onCardClick,
    onButtonClick,
  } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main
            onCardClick={onCardClick}
            onButtonClick={onButtonClick}
					/>
        </Route>
        <Route exact path={AppRoute.CAUGHT}>
          <Caught
            onCardClick={onCardClick}
            onButtonClick={onButtonClick}
          />
        </Route>
        <Route exact path={AppRoute.DETAIL}>
          <Detail
            onButtonClick={onButtonClick}
					/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  onCardClick: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onCardClick(pokemon) {
    dispatch(ActionCreator.changeActivePokemon(pokemon));
  },
  onButtonClick(pokemon) {
    dispatch(ActionCreator.updatePokemonStatus(pokemon));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
