import React, {Fragment, useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {useParams} from 'react-router';
import {getActivePokemon} from '../../../store/data/selectors.js';
import {Operation} from '../../../store/data/data.js';
import Header from '../../presentationals/Header/Header.jsx';
import Info from '../../presentationals/Info/Info.jsx';
import Loader from '../../presentationals/Loader/Loader.jsx';
import ErrorMessage from '../../presentationals/ErrorMessage/ErrorMessage.jsx';
import withToggle from '../../hocs/withToggle/withToggle.jsx';

const InfoWrapped = withToggle(Info);

export const Detail = (props) => {
  const {
    activePokemon,
		isLoading,
		errorMessage,
    onButtonClick,
		loadPokemon,
  } = props;

	
	const id = useParams().id;

	useEffect(() => {
		if (!activePokemon) {
			loadPokemon(id);
		}
	}, []);

	return (
		<Fragment>
			<Header />
			<main className="page__main page__main--detail">
				{activePokemon &&
					<InfoWrapped
						pokemon={activePokemon}
						isToggleChecked={activePokemon.isCaught}
						onButtonClick={onButtonClick}
					/>}
				{isLoading && <Loader />}
				{errorMessage && 
					<ErrorMessage
						message={errorMessage}
					/>}
			</main>
		</Fragment>
	);
};

Detail.propTypes = {
	activePokemon: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		isCaught: PropTypes.bool.isRequired,
		catchDate: PropTypes.string,
	}),
	isLoading: PropTypes.bool.isRequired,
	errorMessage: PropTypes.string,
  onButtonClick: PropTypes.func.isRequired,
  loadPokemon: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	activePokemon: getActivePokemon(state),
});

const mapDispatchToProps = dispatch => ({
	loadPokemon(id) {
    dispatch(Operation.loadPokemon(id));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
