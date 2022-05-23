import './App.css';
import { useState } from 'react';

function App() {
	const [name, setName] = useState('Default Name');

	const handleClick = () => {
		// console.log(name);
		setName('name changed');
	};

	return (
		<div className="App">
			<p>{name}</p>
			<button onClick={handleClick}>change name</button>
		</div>
	);
}

export default App;
