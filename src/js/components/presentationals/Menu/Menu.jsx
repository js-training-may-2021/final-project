import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../../utils';
import './menu.scss';

const Menu = () => {
	return (
		<ul className="header__menu menu">
			<li className="menu__item">
				<Link className="menu__link" to={AppRoute.MAIN}>ALL</Link>
			</li>
			<li className="menu__item">
				<Link className="menu__link" to={AppRoute.CAUGHT}>CAUGHT</Link>
			</li>
		</ul>
	);
};

export default React.memo(Menu);
