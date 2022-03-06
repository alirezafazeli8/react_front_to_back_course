import React, { useContext, useState } from 'react';
import { GithubContext } from '../../context/github/GithubContext';

function UserSearch() {
	const { searchUser, dispatch } = useContext(GithubContext);

	const [text, setText] = useState('');

	function handleText(e) {
		setText(e.target.value);
	}

	function submitForm(e) {
		e.preventDefault();
		if (text.length > 0) {
			searchUser(text);
		} else {
			alert('Pleas Enter Somethings');
		}
	}

	console.log(text);

	return (
		<div>
			<form onSubmit={submitForm}>
				<div className="flex items-center justify-center">
					{/* text input */}
					<div className="p-2 xl:w-5/12 lg:w-7/12 md:w-8/12">
						<input
							className="p-2 rounded-lg w-full"
							type="text"
							onChange={handleText}
							value={text}
						/>
					</div>

					{/* submit button */}
					<div className="flex flex-row">
						<div>
							<input className="btn" type="submit" value="search" />
						</div>
					</div>
				</div>
			</form>
			<div className="px-2 btn btn-info hover:bg-slate-400">
				<button
					className="text-white text-sm"
					onClick={(e) => {
						dispatch({ type: 'RESET_USERS' });
						setText('');
					}}
				>
					X
				</button>
			</div>
		</div>
	);
}

export default UserSearch;
