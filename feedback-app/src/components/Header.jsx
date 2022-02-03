import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
	const styles = { backgroundColor: props.bgColor, color: props.textColor };
	return (
		<header style={styles}>
			<div className="container">
				<h1>{props.title}</h1>
			</div>
		</header>
	);
}

// we set default props
Header.defaultProps = {
	title: 'Feedback UI',
	bgColor: 'rgba(0,0,0,0.4)',
	textColor: '#ff6a95',
};

// prop type
Header.propTypes = {
	title: PropTypes.string,
};

export default Header;
