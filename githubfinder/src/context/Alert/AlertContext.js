import { createContext, useReducer } from 'react';
import alertReducerFunction from './AlertReducer';

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
	const initialAlertValue = null;

	const [alertState, dispatch] = useReducer(
		alertReducerFunction,
		initialAlertValue
	);

	const setAlert = function (msg, type) {
		dispatch({
			type: 'SET_ALERT',
			payload: {
				msg,
				type,
			},
		});

		setTimeout(() => {
			dispatch({
				type: 'REMOVE_ALERT',
			});
		}, 3000);
	};

	return (
		<AlertContext.Provider
			value={{
				alert: alertState,
				setAlert,
			}}
		>
			{children}
		</AlertContext.Provider>
	);
};

export default AlertContext;
