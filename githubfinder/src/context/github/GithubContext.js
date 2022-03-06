import { createContext, useState, useReducer } from 'react';
import { GithubReducer } from './GithubReducer';

// github context
export const GithubContext = createContext();

// github environment
const GITHUB_URL = process.env.REACT_APP_GITHUB_API_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_API_TOKEN;

export const GithubContextProvider = ({ children }) => {
	// dfault initial value
	const initialValue = {
		users: [],
		isLoading: false,
	};

	// users reducer
	const [usersState, dispatch] = useReducer(GithubReducer, initialValue);

	// fetch user function
	const searchUser = async (text) => {
		dispatch({
			type: 'IS_LOADING',
			IS_LOADING: true,
		});

		const URL = `${GITHUB_URL}/search/users?q=${text}`;
		const response = await fetch(URL, {
			headers: {
				Authorization: GITHUB_TOKEN,
			},
		});

		const responseJson = await response.json();

		// get user dispatch
		dispatch({
			type: 'GET_USERS',
			payload: responseJson.items,
		});
	};

	return (
		<GithubContext.Provider
			value={{
				searchUser,
				users: usersState.users, // users
				isLoading: usersState.isLoading, // is loading
				dispatch,
			}}
		>
			{children}
		</GithubContext.Provider>
	);
};
