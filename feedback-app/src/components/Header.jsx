import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
	return (
		<header>
			<div className="container">
				<h1>{props.title}</h1>
			</div>
		</header>
	);
}

// we set default props
Header.defaultProps = {
	title: 'Feedback UI',
};

// prop type
Header.propTypes = {
	title: PropTypes.string,
};

export default Header;
