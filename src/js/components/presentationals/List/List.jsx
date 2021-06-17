import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.jsx';
import './list.scss';

const List = ({pokemons}) => {
	return (
		<ul className="page__list list">
			{pokemons.map(pokemon => {
				return (
					<Card
						pokemon={pokemon}
						key={pokemon.id}
					/>
				)}
			)}
		</ul>
	);
};

List.propTypes = {
	pokemons: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		isCaught: PropTypes.bool.isRequired,
		date: PropTypes.oneOfType([() => null, PropTypes.instanceOf(Date)]),
	})),
}

export default React.memo(List);