import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
	return (
		<div className="m-auto text-stone-900 text-center">
			<div className="p-2">
				<p className="text-8xl">Oops !</p>
			</div>
			<div className="p-2">
				<p className="text-2xl font-bold">404 - Page Notfound</p>
			</div>
			<div>
				<Link to={'/'} className="font-bold">
					<div className="btn btn-active">Back To Home</div>
				</Link>
			</div>
		</div>
	);
}

export default PageNotFound;
