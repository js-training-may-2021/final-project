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
    pokemons,
    caughtPokemons,
    activePokemon,
    onCardClick,
    onButtonClick,
  } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Main
						pokemons={pokemons.slice(0, 50)}
            onCardClick={onCardClick}
            onButtonClick={onButtonClick}
					/>
        </Route>
        <Route exact path={AppRoute.CAUGHT}>
          <Caught 
						caughtPokemons={caughtPokemons}
            onCardClick={onCardClick}
            onButtonClick={onButtonClick}
          />
        </Route>
        <Route exact path={AppRoute.DETAIL}>
          <Detail
						activePokemon={activePokemon}
            onButtonClick={onButtonClick}
					/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
	pokemons: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		isCaught: PropTypes.bool.isRequired,
		catchDate: PropTypes.oneOfType([() => null, PropTypes.instanceOf(Date)]),
	})),
	caughtPokemons: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		isCaught: PropTypes.bool.isRequired,
		catchDate: PropTypes.oneOfType([() => null, PropTypes.instanceOf(Date)]),
	})),
	activePokemon: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		isCaught: PropTypes.bool.isRequired,
		catchDate: PropTypes.oneOfType([() => null, PropTypes.instanceOf(Date)]),
	}),
  onCardClick: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  pokemons: state.pokemons,
  caughtPokemons: state.caughtPokemons,
  activePokemon: state.activePokemon,
});

const mapDispatchToProps = dispatch => ({
  onCardClick(pokemon) {
    dispatch(ActionCreator.changeActivePokemon(pokemon));
  },
  onButtonClick(pokemon) {
    dispatch(ActionCreator.updatePokemonStatus(pokemon));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
