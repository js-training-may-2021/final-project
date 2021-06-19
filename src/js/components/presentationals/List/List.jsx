import React, {useEffect} from 'react';
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
		onScroll,
  } = props;

	const handleScroll = () => {		
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return;
    } else {
			onScroll();
		}
	};

	useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
  onCardClick: PropTypes.func,
  onButtonClick: PropTypes.func,
  onScroll: PropTypes.func,
}

export default React.memo(List);