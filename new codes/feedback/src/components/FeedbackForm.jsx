import React, { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import FeedbackRating from './FeedbackRating';

function FeedbackForm({ addFeedback }) {
	const [text, setText] = useState('');
	const [disableButton, setDisableButton] = useState(true);
	const [message, setMessage] = useState(false);
	const [rating, setRating] = useState(10);

	function setTextEvent(e) {
		setText(e.target.value.trim());

		if (text.length < 10) {
			setDisableButton(true);
			setMessage(true);
		} else {
			setDisableButton(false);
			setMessage(false);
		}
	}

	function handleSubmit(e) {
		e.preventDefault();

		if (text.trim().length > 10) {
			const newFeedback = {
				rate: rating,
				text,
			};

			addFeedback(newFeedback);
			setText('');
			setRating(10);
		}
	}

	return (
		<Card>
			<form action="" onSubmit={handleSubmit}>
				<h2>How Would You rate your service with us?</h2>
				<FeedbackRating
					rating={(rate) => {
						setRating(rate);
					}}
				/>
				<div className="input-group">
					<input
						onChange={setTextEvent}
						type="text"
						placeholder="write your feedback"
						value={text}
					/>
					<Button isDisabled={disableButton} version="secondary">
						Submit
					</Button>
				</div>
				<div className="message">{message && 'You Must Type 10 chracters'}</div>
			</form>
		</Card>
	);
}

export default FeedbackForm;
