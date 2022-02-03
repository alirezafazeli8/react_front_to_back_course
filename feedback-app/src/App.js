import React, { useState } from 'react';
import Header from './components/Header';
import feedbackData from './data/FeedBackData.js';
import FeedbackLists from './components/FeedbackLists';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

export default function App() {
	const [feedback, setFeedback] = useState(feedbackData);

	function deleteFeedBack(id) {
		if (window.confirm('Are You Sure You Want Delete Your Feedback?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	}

	return (
		<>
			<Header></Header>
			<div className="container">
				<FeedbackForm></FeedbackForm>
				<FeedbackStats feedback={feedback}></FeedbackStats>
				<FeedbackLists feedback={feedback} handleClick={deleteFeedBack} />
			</div>
		</>
	);
}
