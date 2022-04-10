import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

function FeedbackList({ feedback }) {
	if (!feedback || feedback.length <= 0) {
		return <h2>Empty Feedback</h2>;
	}

	return (
		<div className="feedback-list">
			{feedback.map((value, i) => {
				return <FeedbackItem key={i} item={value} />;
			})}
		</div>
	);
}

FeedbackList.default = {
	feedback: [],
};

FeedbackList.propTypes = {
	feedback: PropTypes.arrayOf(
		PropTypes.shape({
			rate: PropTypes.number,
			text: PropTypes.string,
		})
	),
};

export default FeedbackList;
