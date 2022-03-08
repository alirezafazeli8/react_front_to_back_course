import React, { useContext, useEffect, useState } from 'react';
import { GithubContext } from '../../../context/github/GithubContext';
import RepoItem from './RepoItem';

function RepoList() {
	const { user } = useContext(GithubContext);
	const [repoData, setRepoData] = useState([]);

	const getUserRepos = async () => {
		const response = await fetch(
			`${process.env.REACT_APP_GITHUB_API_URL}/users/${user.login}/repos`
		);

		const responseJson = await response.json();

		if (responseJson.length > 0) {
			setRepoData(responseJson);
		}
	};

	useEffect(() => {
		getUserRepos();
	}, []);

	return (
		<div className="w-10/12 p-3 m-5 flex-col text-left shadow-2xl my-5 bg-cyan-900 rounded-2xl w-full justify-between items-center">
			<RepoItem repo={repoData} />
		</div>
	);
}

export default RepoList;
