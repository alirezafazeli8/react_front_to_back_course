import react, { useState } from 'react';
import Header from './components/Header';
import fakeData from './data/fakeData';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { v4 } from 'uuid';
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom';
import About from './pages/About';
import AboutIcon from './components/AboutIcon';
// import { Card } from 'antd';
import Card from './components/shared/Card';
import Post from './components/Post';

function App() {
	const [feedback, setFeedback] = useState(fakeData);

	function handleAddFeedback(newFeedback) {
		setFeedback([{ ...newFeedback, id: v4() }, ...feedback]);
	}

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
		<BrowserRouter>
			<Header />

			<div className="container">
				<Routes>
					{/* home page */}
					<Route
						path="/"
						element={
							<>
								<FeedbackForm addFeedback={handleAddFeedback} />
								<FeedbackStats feedback={feedback} />
								<Card>
									<NavLink to={'/'} activeclass="active">
										Home
									</NavLink>

									<NavLink to={'/about'} activeclass="active">
										about
									</NavLink>
								</Card>
								<FeedbackList
									feedback={feedback}
									handleDelete={(id) => {
										deleteFeedback(id);
									}}
								/>
							</>
						}
					></Route>

					{/* about page */}
					<Route path="/about" element={<About />}></Route>

					<Route path="/post/*" element={<Post />} />
				</Routes>

				<Link to={'/about'}>
					<AboutIcon />
				</Link>
			</div>
		</BrowserRouter>
	);
}

export default App;
