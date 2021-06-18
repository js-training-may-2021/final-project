import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Header from '../../presentationals/Header/Header.jsx';
import Footer from '../../presentationals/Footer/Footer.jsx';
import List from '../../presentationals/List/List.jsx';
import {checkPokemons} from '../../../utils.js';

const Caught = (props) => {
  const {
    caughtPokemons,
    onCardClick,
    onButtonClick,
  } = props;

	return (
		<Fragment>
			<Header />
			<main className="page__main">
				<h1 className="page__title">CAUGHT POKEMONS</h1>
        {checkPokemons(caughtPokemons, `You haven't caught any pokemons yet.`)}  
				<List
					pokemons={caughtPokemons}
          onCardClick={onCardClick}
          onButtonClick={onButtonClick}
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
		catchDate: PropTypes.oneOfType([() => null, PropTypes.instanceOf(Date)]),
	})),
  onCardClick: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
}

export default React.memo(Caught);
