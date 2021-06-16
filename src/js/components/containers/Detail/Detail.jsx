import React, {Fragment} from 'react';
import Header from '../../presentationals/Header/Header.jsx';
import Info from '../../presentationals/Info/Info.jsx';

const Detail = () => {
	return (
		<Fragment>
			<Header />
			<main className="page__main page__main--detail">
				<Info />
			</main>
		</Fragment>
	);
};

export default Detail;
