import React from 'react';
import { PropTypes } from 'prop-types';
import {
	AiOutlineLink,
	AiOutlineIssuesClose,
	AiOutlineFork,
} from 'react-icons/ai';
import { ImEyePlus } from 'react-icons/im';
import { BsFillStarFill } from 'react-icons/bs';

function RepoItem({ repo }) {
	return (
		<>
			{repo.map((rp) => {
				return (
					<div
						className="flex-col bg-cyan-600 m-5 p-5 rounded-lg text-white"
						key={rp.id}
					>
						{/* title */}
						<div className=" font-bold text-2xl pb-2">
							<a href={rp.html_url} className="flex items-center">
								<AiOutlineLink />
								<h1 className="p-1">{rp.name}</h1>
							</a>
						</div>
						{/* describe */}
						<div>
							<p>{rp.description}</p>
						</div>
						{/* stuff */}
						<div className="flex mt-5">
							{/* view */}
							<div className="flex items-center mx-2 rounded-2xl  text-cyan-900 font-semibold p-2 bg-cyan-400 text-sm">
								<ImEyePlus />
								<div className="p-1">{rp.watchers_count}</div>
							</div>
							{/* star */}
							<div className="flex items-center mx-2 rounded-2xl  text-green-900 font-semibold p-2 bg-green-400 text-sm">
								<BsFillStarFill />
								<div className="p-1">{rp.stargazers_count}</div>
							</div>
							{/* issu */}
							<div className="flex items-center mx-2 rounded-2xl  text-red-900 font-semibold p-2 bg-red-400 text-sm">
								<AiOutlineIssuesClose />
								<div className="p-1">{rp.open_issues_count}</div>
							</div>
							{/* forks */}
							<div className="flex items-center mx-2 rounded-2xl  text-yellow-900 font-semibold p-2 bg-yellow-400 text-sm">
								<AiOutlineFork />
								<div className="p-1">{rp.forks_count}</div>
							</div>
						</div>
					</div>
				);
			})}
		</>
	);
}

RepoItem.propTypes = {
	repo: PropTypes.array,
};

export default RepoItem;
