import React from 'react';
import Menu from '../Menu/Menu.jsx';
import Logo from '../Logo/Logo.jsx';
import './header.scss';

const Header = () => {
	return (
		<header className="page__header header">
			<nav className="header__nav-wrap">
        <Logo />
				<Menu />
			</nav>
		</header>
	);
};

export default React.memo(Header);
