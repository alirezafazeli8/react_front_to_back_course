import { createContext, useState } from 'react';

const GlobalContext = createContext();

export function ContextProvider({ children }) {
	const [rate, setRate] = useState(10);

	const contextValue = {
		rate,
		setRate,
	};

	return (
		<GlobalContext.Provider value={contextValue}>
			{children}
		</GlobalContext.Provider>
	);
}

export default GlobalContext;
