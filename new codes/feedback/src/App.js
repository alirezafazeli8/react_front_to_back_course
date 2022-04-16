import react, { useState } from 'react';
import Header from './components/Header';
import fakeData from './data/fakeData';
import FeedbackList from './components/FeedbackList';

function App() {
	const [feedback, setFeedback] = useState(fakeData);

	function deleteFeedback(id) {
		if (window.confirm('Are You Sure You Want Delete Feedback ?')) {
			setFeedback(
				feedback.filter((v) => {
					return v.id != id;
				})
			);
		}
	}

	return (
		<>
			<Header />
			<div className="container">
				<FeedbackList
					feedback={feedback}
					handleDelete={(id) => {
						deleteFeedback(id);
					}}
				/>
			</div>
		</>
	);
}

export default App;
