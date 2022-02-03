import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';

function FeedbackLists(props) {
	return (
		<div className="feedback-list">
			{props.feedback.map((feed) => {
				return (
					<FeedbackItem
						key={feed.id}
						feed={feed}
						handleClick={props.handleClick}
					></FeedbackItem>
				);
			})}
		</div>
	);
}

FeedbackLists.propTypes = {
	feedback: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			rating: PropTypes.number,
			text: PropTypes.string,
		})
	),
};

export default FeedbackLists;
