import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {getErrorMessage, getLoadingStatus} from '../../../store/app/selectors.js';
import {ActionCreator as DataActionCreator} from '../../../store/data/data.js';
import {Operation} from '../../../store/data/data.js';
import Main from '../Main/Main.jsx';
import Detail from '../Detail/Detail.jsx';
import Caught from '../Caught/Caught.jsx';
import {AppRoute} from '../../../utils';

const App = (props) => {
  const {
		isLoading,
		errorMessage,
    onCardClick,
    onButtonClick,
  } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main
						isLoading={isLoading}
						errorMessage={errorMessage}
            onCardClick={onCardClick}
            onButtonClick={onButtonClick}
					/>
        </Route>
        <Route exact path={AppRoute.CAUGHT}>
          <Caught
						isLoading={isLoading}
						errorMessage={errorMessage}
            onCardClick={onCardClick}
            onButtonClick={onButtonClick}
          />
        </Route>
        <Route exact path={AppRoute.DETAIL}>
          <Detail
						isLoading={isLoading}
						errorMessage={errorMessage}
            onButtonClick={onButtonClick}
					/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string,
  onCardClick: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	isLoading: getLoadingStatus(state),
	errorMessage: getErrorMessage(state),
});

const mapDispatchToProps = dispatch => ({
  onCardClick(pokemon) {
    dispatch(DataActionCreator.changeActivePokemon(pokemon));
  },
  onButtonClick(pokemon) {
    dispatch(Operation.updatePokemonStatus(pokemon));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
