import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import RateBox from './components/RateBox';
import { ContextProvider } from './context/GlobalContext';

function App() {
	return (
		<ContextProvider>
			<div className="bg-fuchsia-200 h-screen">
				<Header />
				<RateBox />
				<Footer />
			</div>
		</ContextProvider>
	);
}

export default App;
