import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Button from '../Button/Button.jsx';
import withToggle from '../../hocs/withToggle/withToggle.jsx';
import './card.scss';

const ButtonWrapped = withToggle(Button);

const Card = (props) => {
  const {
    pokemon,
    isToggleChecked,
    onCardClick,
    onButtonClick,
    onToggleClick,
  } = props;

	const {id, name} = pokemon;

	return (
		<li className={"list__card card" + (isToggleChecked ? " card--caught" : "")} onClick={() => onCardClick(pokemon)}>
			<Link className="card__link-wrap" to={`../../../../detail/${id}`}>
				<img className="card__img" src={require(`../../../../images/${id < 721 ? id : `default`}.png`)} alt={name[0].toUpperCase() + name.slice(1)} />
        <h2 className="card__title">{name[0].toUpperCase() + name.slice(1)}</h2>
			</Link>
      <ButtonWrapped
        isToggleChecked={isToggleChecked}
        onClick={() => {
          onButtonClick(pokemon);
          onToggleClick();
        }}
			/>
		</li>
	);
};

Card.propTypes = {
	pokemon: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		isCaught: PropTypes.bool.isRequired,
		catchDate: PropTypes.oneOfType([() => null, PropTypes.instanceOf(Date)]),
	}).isRequired,
  isToggleChecked: PropTypes.bool.isRequired,
  onCardClick: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  onToggleClick: PropTypes.func,
}

export default React.memo(Card);
