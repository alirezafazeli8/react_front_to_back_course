import React, { useContext } from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackList() {
	const { feedback } = useContext(FeedbackContext);

	if (!feedback || feedback.length <= 0) {
		return <h2>Empty Feedback</h2>;
	}

	// console.log(feedback);

	return (
		<div className="feedback-list">
			{feedback.map((value, i) => {
				return <FeedbackItem key={i} item={value} />;
			})}
		</div>
	);
}

export default FeedbackList;
