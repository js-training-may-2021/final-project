import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getPokemons, getLoadingStatus, getErrorMessage} from '../../../store/data/selectors.js';
import {loadPokemons} from '../../../store/data/reducer.js';
import Header from '../../presentationals/Header/Header.jsx';
import Footer from '../../presentationals/Footer/Footer.jsx';
import List from '../../presentationals/List/List.jsx';
import ErrorMessage from '../../presentationals/ErrorMessage/ErrorMessage.jsx';
import Loader from '../../presentationals/Loader/Loader.jsx';
import {getCurrentPage} from '../../../utils.js';

const Main = (props) => {
  const {
    pokemons,
		isLoading,
		errorMessage,
    onCardClick,
    onButtonClick,
		onScroll,
  } = props;

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
};

const mapStateToProps = state => ({
  pokemons: getPokemons(state),
	isLoading: getLoadingStatus(state),
	errorMessage: getErrorMessage(state),
});

const mapDispatchToProps = dispatch => ({
	onScroll(page) {
    dispatch(loadPokemons(page));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
