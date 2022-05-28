import React from "react";
import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";

function App() {
	const [showEvents, setShowEvents] = useState(true);
	const [events, setEvents] = useState([
		{
			title: "hello this is mario from iran",
			id: 1,
		},
		{
			title: "how you doing mr jones ?",
			id: 2,
		},
		{
			title: "ok now i wanna talk with you",
			id: 3,
		},
	]);

	function handleDelete(id) {
		setEvents((prevValue) => {
			return prevValue.filter((event) => event.id !== id);
		});
	}

	const subtitle = "allhao akbar";

	const buttonsComponent = (
		<div>
			{showEvents ? (
				<div>
					<button
						onClick={() => {
							setShowEvents(false);
						}}
					>
						hide items
					</button>
				</div>
			) : (
				<div>
					<button
						onClick={() => {
							setShowEvents(true);
						}}
					>
						show items
					</button>
				</div>
			)}
		</div>
	);

	return (
		<div className="App">
			<Title title={"hello im from app"} subtitle={subtitle} />

			{buttonsComponent}

			{showEvents &&
				events.map((value, index) => (
					<React.Fragment key={value.id}>
						<small> {index}</small>- {value.title}
						<br></br>
						<button
							onClick={() => {
								handleDelete(value.id);
							}}
						>
							delete
						</button>
					</React.Fragment>
				))}

			<Modal>
				<h2>We have 10% off</h2>
				<p>use the Alireza code to checkout</p>
			</Modal>
		</div>
	);
}

export default App;
