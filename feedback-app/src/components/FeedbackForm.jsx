import React, { useState } from 'react';
import Card from './shared/Card';
import Buttons from './shared/Buttons';
import SelectRating from './SelectRating';

function FeedbackForm({ addfeedback }) {
	const [text, setText] = useState('');
	const [lockBtn, setLockBtn] = useState(true);
	const [message, setMessage] = useState('');
	const [rating, setRating] = useState(10);

	const inputEvent = (e) => {
		setText(e.target.value.trim());

		if (text.length < 10) {
			setLockBtn(true);
			setMessage('need more than 10 characters.');
		} else {
			setLockBtn(false);
			setMessage('');
		}
	};

	const selectFunc = (selectedValue) => {
		setRating(selectedValue);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		if (text.trim().length > 10) {
			const newFeedbackObj = {
				text,
				rating,
			};

			addfeedback(newFeedbackObj);
			setText('');
			setLockBtn(true);
		}
	};

	return (
		<Card reverse={false}>
			<form onSubmit={handleFormSubmit}>
				<h2>pleas rate to us</h2>

				<SelectRating select={selectFunc}></SelectRating>

				<div className="input-group">
					<input type="text" onChange={inputEvent} value={text} />
					<Buttons isDisabled={lockBtn}>Submit</Buttons>
				</div>
				<div className="message">{message}</div>
			</form>
		</Card>
	);
}

export default FeedbackForm;
