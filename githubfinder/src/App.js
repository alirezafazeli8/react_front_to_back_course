import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<div className="flex flex-col justify-center items-center">
				<Routes>
					<Route path="/about" element="<h1>about</h1>"></Route>
				</Routes>
				<main>content</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
