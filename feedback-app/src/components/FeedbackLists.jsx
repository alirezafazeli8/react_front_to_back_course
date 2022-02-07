import React from 'react';
import FeedbackItem from './FeedbackItem';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';

function FeedbackLists({ feedback, handleClick }) {
	return (
		<div className="feedback-list">
			<AnimatePresence>
				{feedback.map((feed) => {
					return (
						<motion.div
							key={feed.id}
							initial={{ opacity: 1 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0.5 }}
						>
							<FeedbackItem
								key={feed.id}
								feed={feed}
								handleClick={handleClick}
							></FeedbackItem>
						</motion.div>
					);
				})}
			</AnimatePresence>
		</div>
	);

	// return (
	// 	<div className="feedback-list">
	// 		{props.feedback.map((feed) => {
	// 			return (
	// 				<FeedbackItem
	// 					key={feed.id}
	// 					feed={feed}
	// 					handleClick={props.handleClick}
	// 				></FeedbackItem>
	// 			);
	// 		})}
	// 	</div>
	// );
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
