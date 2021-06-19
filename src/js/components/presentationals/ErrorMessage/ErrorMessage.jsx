import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({message}) => {
	return (
		<p className="page__text">{message}</p>
	);
};

ErrorMessage.propTypes = {
	message: PropTypes.string.isRequired,
};

export default React.memo(ErrorMessage);
