import React, { useContext, useReducer, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GithubContext } from '../../context/github/GithubContext';
import Spinner from '../layout/Spinner';
import { Link, Navigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { IoIosPeople, IoMdPeople } from 'react-icons/io';
import { GoPackage } from 'react-icons/go';
import { GiSteelDoor } from 'react-icons/gi';
import RepoList from './repo/RepoList';

function User() {
	const { getUser, user, isLoading } = useContext(GithubContext);

	const params = useParams().username;

	useEffect(() => {
		getUser(params);
	}, []);

	if (isLoading) {
		return <Spinner />;
	}

	const {
		login: username,
		avatar_url: userPhoto,
		bio,
		type,
		html_url: url,
		hireable,
		location,
		blog: website,
		twitter_username: twitter,
		followers,
		following,
		public_repos,
		public_gists,
	} = user;

	return (
		<div className="flex flex-col items-center justify-center">
			{/* button */}
			<div className="relative left-10 mt-5 self-start">
				<Link to="/">
					<BiArrowBack className="text-black font-semibold w-12/12" size={40} />
				</Link>
			</div>
			<div className="flex justify-center">
				{/* image */}
				<div>
					<img
						className="w-10/12 m-auto rounded-lg shadow-xl"
						src={userPhoto}
						alt=""
					/>
				</div>

				{/* content */}
				<div className="flex flex-col items-start w-6/12">
					<div className="flex">
						<div className="p-2 px-5">
							<h1 className="text-black font-extrabold text-2xl">{username}</h1>
						</div>

						{/* user status */}
						<div className="flex  p-2 ">
							<div className="mx-2 rounded-2xl  text-green-900 font-semibold p-2 bg-green-400 text-sm">
								{type}
							</div>
							{hireable && (
								<div className="mx-2 rounded-2xl  text-cyan-900 font-semibold p-2 bg-cyan-400 text-sm">
									Hirebale
								</div>
							)}
						</div>
					</div>

					<div className="p-2 px-5">
						<p className="text-left text-black font-semibold">{bio}</p>
					</div>
					<div className="px-5 mt-5">
						<button className="btn text-white">
							<a href={url}>Visit Profile</a>
						</button>
					</div>
					<div className="p-3 m-5 flex shadow-2xl my-5 bg-cyan-900 rounded-2xl w-full justify-between items-center ">
						{location && (
							<div className="text-left p-5 flex flex-col">
								<p>Location</p>
								<p className="text-white font-semibold">{location}</p>
							</div>
						)}

						{website && (
							<div className="text-left p-5 flex flex-col">
								<p>Websites</p>
								<p className="text-white font-semibold">{website}</p>
							</div>
						)}
						{twitter && (
							<div className="text-left p-5 flex flex-col">
								<p>Twitter</p>
								<p className="text-white font-semibold">{twitter}</p>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="w-10/12 p-3 m-5 flex shadow-2xl my-5 bg-cyan-900 rounded-2xl w-full justify-between items-center ">
				{/* followers */}
				<div className="text-left p-5 flex justify-center items-center">
					<div className="flex flex-col p-2">
						<p className="font-semibold">Followers</p>
						<p className="text-white font-semibold text-3xl">{followers}</p>
					</div>
					<div className="p-2 GiSteelDoor">
						<IoIosPeople size={50} />
					</div>
				</div>

				{/* following */}
				<div className="text-left p-5 flex justify-center items-center">
					<div className="flex flex-col p-2">
						<p className="font-semibold">Following</p>
						<p className="text-white font-semibold text-3xl">{following}</p>
					</div>
					<div className="p-2 GiSteelDoor">
						<IoMdPeople size={50} />
					</div>
				</div>

				{/* public repos */}
				<div className="text-left p-5 flex justify-center items-center">
					<div className="flex flex-col p-2">
						<p className="font-semibold">Public Repos</p>
						<p className="text-white font-semibold text-3xl">{public_repos}</p>
					</div>
					<div className="p-2 mx-4">
						<GoPackage size={50} />
					</div>
				</div>

				{/* gist */}
				<div className="text-left p-5 flex justify-center items-center">
					<div className="flex flex-col p-2">
						<p className="font-semibold">Gists</p>
						<p className="text-white font-semibold text-3xl">{public_gists}</p>
					</div>
					<div className="p-2 mx-4">
						<GiSteelDoor size={50} />
					</div>
				</div>
			</div>

			<RepoList />
		</div>
	);
}

export default User;
