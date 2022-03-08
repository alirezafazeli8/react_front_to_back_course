import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import User from './components/users/User';
import PageNotFound from './pages/PageNotFound';
import { GithubContextProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/Alert/AlertContext';

function App() {
	return (
		<GithubContextProvider>
			<AlertProvider>
				<Router>
					<div className="flex flex-col justify-between h-screen bg-info">
						<Navbar title={'PGF - Persian Github Finder'} />
						<main className="bg-info text-center" style={{ width: '100%' }}>
							<Routes>
								{/* home route */}
								<Route path="/" element={<Home />} />

								{/* user route */}
								<Route path="/user/:username" element={<User />} />

								{/* about route */}
								<Route path="/about" element={<About />} />

								{/*  page not found route */}
								<Route path="/notfound" element={<PageNotFound />} />
								<Route path="/*" element={<PageNotFound />} />
							</Routes>
						</main>
						<Footer />
					</div>
				</Router>
			</AlertProvider>
		</GithubContextProvider>
	);
}

export default App;
