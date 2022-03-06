import React from 'react';
import spinner from './assets/spinner.gif';

function Spinner() {
	return (
		<div className="m-auto text-center">
			<img src={spinner} className="m-auto" alt="loading" />
		</div>
	);
}

export default Spinner;
