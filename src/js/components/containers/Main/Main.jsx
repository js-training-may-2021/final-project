import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getPokemons} from '../../../store/data/selectors.js';
import {Operation} from '../../../store/data/data.js';
import Header from '../../presentationals/Header/Header.jsx';
import Footer from '../../presentationals/Footer/Footer.jsx';
import List from '../../presentationals/List/List.jsx';
import ErrorMessage from '../../presentationals/ErrorMessage/ErrorMessage.jsx';
import Loader from '../../presentationals/Loader/Loader.jsx';
import {getCurrentPage} from '../../../utils.js';

export const Main = (props) => {
  const {
    pokemons,
		isLoading,
		errorMessage,
    onCardClick,
    onButtonClick,
		onScroll,
		loadPokemons,
  } = props;

	useEffect(() => {
		loadPokemons(getCurrentPage());
	}, []);

	return (
		<Fragment>
			<Header />
			<main className="page__main">
				<h1 className="page__title">ALL POKEMONS</h1>
				{pokemons.length !== 0 &&
					<List
						pokemons={pokemons}
						onCardClick={onCardClick}
						onButtonClick={onButtonClick}
						onScroll={() => onScroll(getCurrentPage())}
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

Main.propTypes = {
	pokemons: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		isCaught: PropTypes.bool.isRequired,
		catchDate: PropTypes.string,
	})),
	isLoading: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string,
  onCardClick: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onScroll: PropTypes.func.isRequired,
  loadPokemons: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  pokemons: getPokemons(state),
});

const mapDispatchToProps = dispatch => ({
	onScroll(page) {
    dispatch(Operation.loadPokemons(page));
	},
	loadPokemons(page) {
    dispatch(Operation.loadPokemons(page));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
