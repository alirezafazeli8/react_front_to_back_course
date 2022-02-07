import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
	return (
		<div className="card" style={{ textAlign: 'center' }}>
			<h1>About us</h1>
			<p>We Are Team In This Iran ✒️</p>
			<Link
				to={'/'}
				className="btn btn-primary"
				style={{ textDecoration: 'none', padding: '5px' }}
			>
				Back To Home{' '}
			</Link>
		</div>
	);
}

export default AboutPage;
