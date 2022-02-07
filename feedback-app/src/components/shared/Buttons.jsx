import React from 'react';
import PropType from 'prop-types';

function Buttons({ children, type, isDisabled, version }) {
	return (
		<button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
			{children}
		</button>
	);
}

Buttons.defaultProps = {
	type: 'submit',
	isDisabled: false,
	version: 'secondary',
};

Buttons.propTypes = {
	children: PropType.node.isRequired,
	type: PropType.string,
	isDisabled: PropType.bool,
	version: PropType.string,
};

export default Buttons;
