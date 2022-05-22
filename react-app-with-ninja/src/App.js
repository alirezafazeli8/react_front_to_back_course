import './App.css';

function App() {
	let name = 'mario';

	const handleClick = () => {
		name = 'james';
		console.log(name);
	};

	return (
		<div className="App">
			<p>{name}</p>
			<button onClick={handleClick}>change name</button>
		</div>
	);
}

export default App;
