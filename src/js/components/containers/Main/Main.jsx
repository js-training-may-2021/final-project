import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Header from '../../presentationals/Header/Header.jsx';
import Footer from '../../presentationals/Footer/Footer.jsx';
import List from '../../presentationals/List/List.jsx';
import {checkPokemons} from '../../../utils.js';

const Main = (props) => {
  const {
    pokemons,
    onCardClick,
    onButtonClick,
  } = props;

	return (
		<Fragment>
			<Header />
			<main className="page__main">
				<h1 className="page__title">ALL POKEMONS</h1>
        {checkPokemons(pokemons, `Failed to load pokemons. Please try again later.`)}      
				<List
					pokemons={pokemons}
          onCardClick={onCardClick}
          onButtonClick={onButtonClick}
				/>
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
		catchDate: PropTypes.oneOfType([() => null, PropTypes.instanceOf(Date)]),
	})),
  onCardClick: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
}

export default React.memo(Main);
