import React, { useState } from 'react';
import Card from './shared/Card';

function FeedbackForm() {
	const [text, setText] = useState('');

	const inputEvent = (e) => {
		setText(e.target.value);
	};

	return (
		<Card reverse={false}>
			<form>
				<h2>pleas rate to us</h2>
				<div className="input-group">
					<input
						type="text"
						placeholder="write about us :"
						onChange={inputEvent}
						value={text}
					/>
				</div>
			</form>
		</Card>
	);
}

export default FeedbackForm;
