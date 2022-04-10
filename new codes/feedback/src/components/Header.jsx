import React from 'react';
import PropTypes from 'prop-types';

function Header({ title, bgColor, textColor }) {
	const style = {
		backgroundColor: bgColor,
		color: textColor,
	};

	return (
		<header style={style}>
			<div className="container">
				<h2>{title}</h2>
			</div>
		</header>
	);
}

Header.defaultProps = {
	title: 'Feedback',
	bgColor: 'rgba(0,0,0,0.4)',
	textColor: '#ff6a95',
};

Header.propTypes = {
	title: PropTypes.string,
};

export default Header;
