import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button.jsx';
import withToggle from '../../hocs/withToggle/withToggle.jsx';
import './info.scss';

const ButtonWrapped = withToggle(Button);

const Info = ({pokemon}) => {
	const {id, name, isCaught, date} = pokemon;

  return (
    <Fragment>
      <img className="page__img" src={require(`../../../../images/${id}.png`)} alt={name[0].toUpperCase() + name.slice(1)} />
      <article className="page__info info">
        <h1 className="info__title">{name[0].toUpperCase() + name.slice(1)}</h1>
        <p className="info__text">ID: <span className="info__data">{id}</span></p>
        <p className="info__text">STATUS: <span className="info__data">{isCaught ? `Caught` : `Not caught`}</span></p>
        {isCaught ? `<p className="info__text">CAUGHT: <span className="info__data">${date}</span></p>` : ``}
				<ButtonWrapped
					isToggleChecked={isCaught}
				/>
      </article>
    </Fragment>
  );
}

Info.propTypes = {
	pokemon: PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string.isRequired,
		isCaught: PropTypes.bool.isRequired,
		date: PropTypes.oneOfType([() => null, PropTypes.instanceOf(Date)]),
	}).isRequired,
}

export default React.memo(Info);
