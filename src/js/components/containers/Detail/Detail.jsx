import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Header from '../../presentationals/Header/Header.jsx';
import Info from '../../presentationals/Info/Info.jsx';

const Detail = ({activePokemon}) => {
	return (
		<Fragment>
			<Header />
			<main className="page__main page__main--detail">
				<Info
					pokemon={activePokemon}
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
		date: PropTypes.oneOfType([() => null, PropTypes.instanceOf(Date)]),
	}).isRequired,
}

export default React.memo(Detail);
