import React from 'react';
import PropTypes from 'prop-types';

function Navbar({ title }) {
	return (
		<nav>
			<div>
				{/* logo */}
				<div>
					{/* logo */}
					<div></div>

					{/* title */}
					<div>{title}</div>
				</div>

				{/* links */}
				<div></div>
			</div>
		</nav>
	);
}

Navbar.defaultProps = {
	title: 'Github Finder',
};

Navbar.propTypes = {
	title: PropTypes.string,
};

export default Navbar;
