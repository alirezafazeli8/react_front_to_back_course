import React from 'react';
import PropTypes from 'prop-types';

function FeedbackStats(props) {
	const showRating = function (feedback) {
		if (feedback.length != 0) {
			const average =
				feedback.reduce((first, last) => {
					return first + last.rating;
				}, 0) / feedback.length;
			return average.toFixed(1);
		} else {
			return 0;
		}
	};

	return (
		<div className="feedback-stats">
			<h4>{props.feedback.length} Reviews</h4>
			<h4>{showRating(props.feedback)}</h4>
		</div>
	);
}

FeedbackStats.propTypes = {
	feedback: PropTypes.array,
};

export default FeedbackStats;
