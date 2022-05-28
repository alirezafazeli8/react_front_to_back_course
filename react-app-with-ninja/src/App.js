import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
	const [name, setName] = useState("Default Name");

	const handleClick = () => {
		// console.log(name);
		setName("name changed");
	};

	// if we write jsx - in fact we do this
	// const newElement = React.createElement("div", { className: "App" }, "Hello");

	return (
		<div className="App">
			<p>{name}</p>
			<button onClick={handleClick}>change name</button>
			{/* {newElement} */}
		</div>
	);
}

export default App;
