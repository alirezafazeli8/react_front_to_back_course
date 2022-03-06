import React from 'react';
import { PropTypes } from 'prop-types';
import { FiGithub } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Navbar({ title }) {
	return (
		<nav className="flex bg-stone-800 p-2">
			{/* logo */}
			<div className="container m-auto ml-4">
				<Link to="/" className="flex items-center">
					<div>
						<FiGithub fontSize={35} />
					</div>
					<div className="p-2 font-bold">{title}</div>
				</Link>
			</div>

			{/* buttons links */}
			<div className="flex p-2">
				<Link to={'/'} className="font-bold  btn btn-info btn-sm mr-2">
					Home
				</Link>
				<Link to={'/about'} className="font-bold  btn btn-info btn-sm mr-2">
					about
				</Link>
			</div>
		</nav>
	);
}

// defalut props
Navbar.defaultProps = {
	title: 'Github Finder',
};

// prop types
Navbar.propTypes = {
	title: PropTypes.string,
};

export default Navbar;
