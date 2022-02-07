import React, { useState } from 'react';
import Header from './components/Header';
import feedbackData from './data/FeedBackData.js';
import FeedbackLists from './components/FeedbackLists';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 } from 'uuid';
import AboutPage from './pages/AboutPage';
import { Routes, Route, Link } from 'react-router-dom';

export default function App() {
	const [feedback, setFeedback] = useState(feedbackData);

	function addFeedBack(newFeedBack) {
		const newFeed = [{ ...newFeedBack, id: v4() }, ...feedback];
		setFeedback(newFeed);
	}

	function deleteFeedBack(id) {
		if (window.confirm('Are You Sure You Want Delete Your Feedback?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	}

	return (
		<>
			<Header></Header>
			<div className="container">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<FeedbackForm addfeedback={addFeedBack}></FeedbackForm>
								<FeedbackStats feedback={feedback}></FeedbackStats>
								<FeedbackLists
									feedback={feedback}
									handleClick={deleteFeedBack}
								/>
								<Link
									to="/about"
									style={{ color: 'white', textDecoration: 'none' }}
								>
									About
								</Link>
							</>
						}
					/>

					<Route path="/about" element={<AboutPage />} />
				</Routes>
			</div>
		</>
	);
}
