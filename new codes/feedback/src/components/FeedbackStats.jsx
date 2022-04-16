import React from 'react';
import PropTypes from 'prop-types';

function FeedbackStats({ feedback }) {
	// calculate average
	const average =
		feedback.length > 0
			? feedback
					.map((v) => {
						return v.rate;
					})
					.reduce((first, last) => {
						return first + last;
					}) / feedback.length
			: [];

	return (
		<div className="feedback-stats">
			{/* review */}
			<div>
				<h3>{feedback.length} reviews</h3>
			</div>
			{/* average */}
			<div>
				<h3>Average : {feedback.length > 0 ? average.toFixed(2) : 0}</h3>
			</div>
		</div>
	);
}

FeedbackStats.defaultProps = {
	feedback: [],
};

FeedbackStats.propTypes = {
	feedback: PropTypes.array,
};

export default FeedbackStats;
