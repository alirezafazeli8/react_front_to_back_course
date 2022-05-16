import React from 'react';
import PropTypes from 'prop-types';

function Button({ children, type, isDisabled, version }) {
	return (
		<button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
			{children}
		</button>
	);
}

Button.defaultProps = {
	children: 'submit',
	type: 'submit',
	isDisabled: true,
	version: 'primary',
};

Button.propTypes = {
	children: PropTypes.string,
	type: PropTypes.string,
	isDisabled: PropTypes.bool,
	version: PropTypes.string,
};

export default Button;
