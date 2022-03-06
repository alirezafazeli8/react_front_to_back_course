import React from 'react';
import { Link } from 'react-router-dom';

function UserItem({ users }) {
	return (
		<div className="m-auto">
			{/* user card */}
			<div className="flex w-90 glass rounded-md">
				<div className="p-2">
					<img className="w-28 rounded-3xl" src={users.avatar_url} alt="" />
				</div>
				<div>
					<div className="card-body">
						<h2 className="card-title">{users.login}</h2>

						<div className="card-actions justify-end">
							<Link to={'user/' + users.login}>
								<button className="btn btn-active">Go to Account</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default UserItem;
