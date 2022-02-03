import React from 'react';

// import use state
import { useState } from 'react';

function FeedbackItem() {
	const [rating, setRating] = useState(0);
	const [text, setText] = useState('Youre Great 🙌💕');

	function addButtonEventFunc() {
		setRating((prev) => {
			return (prev += 1);
		});
	}
	return (
		<div className="card">
			<div className="num-display">{rating}</div>
			<div className="text-display">{text}</div>
			<button onClick={addButtonEventFunc}>Rate</button>
		</div>
	);
}

export default FeedbackItem;
