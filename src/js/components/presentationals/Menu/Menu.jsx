import React from 'react';
import {NavLink} from 'react-router-dom';
import {AppRoute} from '../../../utils';
import './menu.scss';

const Menu = () => {
	return (
		<ul className="header__menu menu">
			<li className="menu__item">
				<NavLink className="menu__link" activeClassName="menu__link--selected" exact to={AppRoute.MAIN}>ALL</NavLink>
			</li>
			<li className="menu__item">
				<NavLink className="menu__link" activeClassName=" menu__link--selected" exact to={AppRoute.CAUGHT}>CAUGHT</NavLink>
			</li>
		</ul>
	);
};

export default React.memo(Menu);
