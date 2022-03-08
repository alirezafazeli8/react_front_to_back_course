import React, { useContext } from 'react';
import AlertContext from '../../context/Alert/AlertContext';
import { MdOutlineNearbyError } from 'react-icons/md';

function Alert() {
	const { alert } = useContext(AlertContext);

	return (
		alert !== null && (
			<div className="flex items-center justify-center">
				<div className="p-2">
					<MdOutlineNearbyError color="tomato" />
				</div>
				<div className="p-2">
					<small className="font-semibold">{alert.msg}</small>
				</div>
			</div>
		)
	);
}

export default Alert;
