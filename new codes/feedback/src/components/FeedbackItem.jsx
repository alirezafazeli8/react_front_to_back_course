import React from 'react';
import Card from './shared/Card';
import PropTypes from 'prop-types';
import { FaWindowClose } from 'react-icons/fa';
import fakeData from '../data/fakeData.js';
function FeedbackItem({ item, handleDelete }) {
	return (
		<Card>
			<div className="num-display">{item.rate}</div>
			<button
				onClick={() => {
					handleDelete(item.id);
				}}
				className="close"
			>
				<FaWindowClose color="purple" />
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	);
}

FeedbackItem.propTypes = {
	item: PropTypes.object,
};

export default FeedbackItem;
