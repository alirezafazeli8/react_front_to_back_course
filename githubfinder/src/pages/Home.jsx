import React from 'react';
import UserResault from '../components/users/UserResault';
import UserSearch from '../components/users/UserSearch';

function Home() {
	return (
		<div className="text-stone-800 text-2xl font-bold p-5 container m-auto">
			<UserSearch />
			<UserResault />
		</div>
	);
}

export default Home;
