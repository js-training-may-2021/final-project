import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({isToggleChecked}) => {
	return (
		<button
			className="card__button button"
			type="button"
			disabled={isToggleChecked}
		>
			Catch!
		</button>
	);
};

Button.propTypes = {
	isToggleChecked: PropTypes.bool,
}

export default React.memo(Button);
