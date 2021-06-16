import React, {Fragment} from 'react';
import Header from '../../presentationals/Header/Header.jsx';
import Footer from '../../presentationals/Footer/Footer.jsx';
import List from '../../presentationals/List/List.jsx';

const Caught = () => {
	return (
		<Fragment>
			<Header />
			<main className="page__main">
				<h1 className="page__title">CAUGHT POKEMONS</h1>
				<List />
			</main>
			<Footer />
		</Fragment>
	);
};

export default Caught;
