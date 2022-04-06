import React from 'react';
import RateButtons from './RateButtons';
import RateInput from './RateInput';

function RateBox() {
	return (
		<div className="flex flex-col items-center justify-center p-5 bg-white w-5/12 m-auto mt-10 rounded-2xl ">
			<RateButtons />
			<RateInput />
		</div>
	);
}

export default RateBox;
