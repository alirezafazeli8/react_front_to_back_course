import React from 'react';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';

export default function App() {
	return (
		<>
			<Header></Header>
			<div className="container">
				<FeedbackItem />
			</div>
		</>
	);
}
