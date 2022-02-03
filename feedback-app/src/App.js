import React, { useState } from 'react';
import Header from './components/Header';
import feedbackData from './data/FeedBackData.js';
import FeedbackLists from './components/FeedbackLists';
import Card from './components/shared/Card';

export default function App() {
	const [feedback, setFeedback] = useState(feedbackData);
	return (
		<>
			<Header></Header>
			<div className="container">
				<FeedbackLists feedback={feedback} />
			</div>
		</>
	);
}
