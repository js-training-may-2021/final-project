import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card.jsx';
import withToggle from '../../hocs/withToggle/withToggle.jsx';
import './list.scss';

const CardWrapped = withToggle(Card);

const List = (props) => {
  const {
    pokemons,
    onCardClick,
    onButtonClick,
  } = props;

	return (
		<ul className="page__list list">
			{pokemons.map(pokemon => {
				return (
					<CardWrapped
						pokemon={pokemon}
						key={pokemon.id}
            onCardClick={onCardClick}
            onButtonClick={onButtonClick}
            isToggleChecked={pokemon.isCaught}
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
  onCardClick: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
}

export default React.memo(List);