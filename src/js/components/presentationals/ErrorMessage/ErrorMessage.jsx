import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({message}) => {
	return (
		<p className="page__text page__text--message">{message}</p>
	);
};

ErrorMessage.propTypes = {
	message: PropTypes.string.isRequired,
};

export default React.memo(ErrorMessage);
