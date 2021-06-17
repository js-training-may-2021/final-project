import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Button from '../Button/Button.jsx';
import withToggle from '../../hocs/withToggle/withToggle.jsx';
import './card.scss';

const ButtonWrapped = withToggle(Button);

const Card = ({pokemon}) => {
	const {id, name, isCaught} = pokemon;

	return (
		<li className="list__card card">
			<Link className="card__link-wrap" to={`../../../../detail/${id}`}>
				<img className="card__img" src={require(`../../../../images/${id}.png`)} alt={name[0].toUpperCase() + name.slice(1)} />
        <h2 className="card__title">{name[0].toUpperCase() + name.slice(1)}</h2>
			</Link>
      <ButtonWrapped
				isToggleChecked={isCaught}
			/>
		</li>
	);
};

Card.propTypes = {
	pokemon: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		isCaught: PropTypes.bool.isRequired,
		date: PropTypes.oneOfType([() => null, PropTypes.instanceOf(Date)]),
	}).isRequired,
}

export default React.memo(Card);
