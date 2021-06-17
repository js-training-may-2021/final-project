import React from 'react';
import Menu from '../Menu/Menu.jsx';
import Logo from '../Logo/Logo.jsx';
import './footer.scss';

const Footer = () => {
	return (
		<footer className="page__footer footer">
      <div className="footer__nav-wrap">
        <Logo />
        <Menu />
      </div>
		</footer>
	);
};

export default React.memo(Footer);
