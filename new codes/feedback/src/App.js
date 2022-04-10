import react, { useState } from 'react';
import Header from './components/Header';
import fakeData from './data/fakeData';
import FeedbackList from './components/FeedbackList';

function App() {
	const [feedback, setFeedback] = useState(fakeData);

	return (
		<>
			<Header />
			<div className="container">
				<FeedbackList feedback={feedback} />
			</div>
		</>
	);
}

export default App;
