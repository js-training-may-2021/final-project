import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = (props) => {
  const {
    isToggleChecked,
    onClick,
    onToggleClick,
  } = props;

	return (
		<button
			className={"card__button button" + (isToggleChecked ? " button--checked" : "")}
			type="button"
      onClick={() => {
        onClick();
        onToggleClick();
      }}
		>
			{isToggleChecked ? `Release` : `Catch!`}
		</button>
	);
};

Button.propTypes = {
  isToggleChecked: PropTypes.bool.isRequired,
	onClick: PropTypes.func,
  onToggleClick: PropTypes.func,
}

export default React.memo(Button);
