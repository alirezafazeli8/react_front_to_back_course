import React from 'react';
import Card from '../components/shared/Card';
import { Link, NavLink } from 'react-router-dom';

function About() {
	return (
		<div>
			<Card>
				<div>
					<h2>Feedback App Made By Alireza Fazeli</h2>
					<Link to={'/'}>back to home</Link>
				</div>
			</Card>
			<Card>
				<NavLink to={'/'} activeclass="active">
					Home
				</NavLink>

				<NavLink to={'/about'} activeclass="active">
					about
				</NavLink>
			</Card>
		</div>
	);
}

export default About;
