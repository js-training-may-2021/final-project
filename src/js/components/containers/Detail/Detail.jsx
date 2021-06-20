import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getActivePokemon} from '../../../store/app/selectors.js';
import Header from '../../presentationals/Header/Header.jsx';
import Info from '../../presentationals/Info/Info.jsx';
import withToggle from '../../hocs/withToggle/withToggle.jsx';

const InfoWrapped = withToggle(Info);

const Detail = (props) => {
  const {
    activePokemon,
    onButtonClick,
  } = props;

	return (
		<Fragment>
			<Header />
			<main className="page__main page__main--detail">
				<InfoWrapped
					pokemon={activePokemon}
          isToggleChecked={activePokemon.isCaught}
          onButtonClick={onButtonClick}
				/>
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
	}).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	activePokemon: getActivePokemon(state),
});

export default connect(mapStateToProps)(Detail);
