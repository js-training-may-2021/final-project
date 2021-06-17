import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Header from '../../presentationals/Header/Header.jsx';
import Footer from '../../presentationals/Footer/Footer.jsx';
import List from '../../presentationals/List/List.jsx';

const Caught = ({caughtPokemons}) => {
	return (
		<Fragment>
			<Header />
			<main className="page__main">
				<h1 className="page__title">CAUGHT POKEMONS</h1>
				<List
					pokemons={caughtPokemons}
				/>
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
		date: PropTypes.oneOfType([() => null, PropTypes.instanceOf(Date)]),
	})),
}

export default React.memo(Caught);
