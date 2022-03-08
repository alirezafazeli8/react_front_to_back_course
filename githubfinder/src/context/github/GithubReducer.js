export const GithubReducer = (state, action) => {
	switch (action.type) {
		case 'GET_USERS':
			return {
				...state,
				users: action.payload,
				isLoading: false,
			};

		case 'GET_USER':
			return {
				...state,
				user: action.payload,
				isLoading: false,
			};

		case 'IS_LOADING':
			return {
				...state,
				isLoading: true,
			};

		case 'RESET_USERS':
			return {
				// ...state,
				users: [],
				isLoading: false,
			};

		default:
			return state;
	}
};
