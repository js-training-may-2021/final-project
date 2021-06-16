import React from 'react';
import Button from '../Button/Button.jsx';
import './card.scss';

const Card = () => {
	return (
		<li className="list__card card">
			<a className="card__link-wrap" href="#">
				<img className="card__img" src={new URL(`../../../../images/${1}.png`, import.meta.url)} alt="Name" />
        <h2 className="card__title">Name</h2>
			</a>
      <Button />
		</li>
	);
};

export default Card;
