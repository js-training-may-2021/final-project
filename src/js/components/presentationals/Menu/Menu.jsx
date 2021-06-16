import React from 'react';
import './menu.scss';

const Menu = () => {
	return (
		<ul className="header__menu menu">
			<li className="menu__item">
				<a className="menu__link" href="./index.html">ALL</a>
			</li>
			<li className="menu__item">
				<a className="menu__link" href="#">CAUGHT</a>
			</li>
		</ul>
	);
};

export default Menu;
