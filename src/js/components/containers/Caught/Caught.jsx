import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCaughtPokemons} from '../../../store/data/selectors.js';
import {Operation} from '../../../store/data/data.js';
import Header from '../../presentationals/Header/Header.jsx';
import Footer from '../../presentationals/Footer/Footer.jsx';
import List from '../../presentationals/List/List.jsx';
import ErrorMessage from '../../presentationals/ErrorMessage/ErrorMessage.jsx';
import Loader from '../../presentationals/Loader/Loader.jsx';

const Caught = (props) => {
  const {
    caughtPokemons,
		isLoading,
		errorMessage,
    onCardClick,
    onButtonClick,
		loadPokemons
  } = props;

	useEffect(() => {
		loadPokemons();
	}, []);

	return (
		<Fragment>
			<Header />
			<main className="page__main">
				<h1 className="page__title">CAUGHT POKEMONS</h1>
				{!isLoading && !errorMessage && caughtPokemons.length === 0 ?
					<p className="page__text">You haven&apos;t caught any pokemons yet.</p> :
					<List
						pokemons={caughtPokemons}
						onCardClick={onCardClick}
						onButtonClick={onButtonClick}
					/>}
        {isLoading && <Loader />}
        {errorMessage && 
          <ErrorMessage
            message={errorMessage}
          />}
			</main>
			<Footer />
		</Fragment>
	);
};

Caught.propTypes = {
	caughtPokemons: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		isCaught: PropTypes.bool.isRequired,
		catchDate: PropTypes.string,
	})),
	isLoading: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string,
  onCardClick: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  loadPokemons: PropTypes.func,
};

const mapStateToProps = state => ({
	caughtPokemons: getCaughtPokemons(state),
});

const mapDispatchToProps = dispatch => ({
	loadPokemons() {
    dispatch(Operation.loadCaughtPokemons());
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Caught);
