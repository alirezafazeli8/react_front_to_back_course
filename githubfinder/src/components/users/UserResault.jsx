import React, { useEffect, useContext } from 'react';
import { GithubContext } from '../../context/github/GithubContext';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

function UserResault() {
	const { users, isLoading } = useContext(GithubContext);

	useEffect(() => {
		// fetchUsers();
	}, []);

	if (isLoading) {
		return <Spinner />;
	} else {
		return (
			<div className="grid  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 mx:grid-cols-1 gap-6 ">
				{users.map((allUser) => {
					return <UserItem key={allUser.id} users={allUser} />;
				})}
			</div>
		);
	}
}

export default UserResault;
