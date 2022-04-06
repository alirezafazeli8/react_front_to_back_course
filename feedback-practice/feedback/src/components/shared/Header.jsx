import React from 'react';
import PropTypes from 'prop-types';

function Header({ title }) {
	return (
		<header className="text-pink-300 font-bold text-3xl text-center bg-fuchsia-900 p-5">
			{title}
		</header>
	);
}

Header.defaultProps = {
	title: 'Feedback',
};

Header.propTypes = {
	title: PropTypes.string,
};

export default Header;
