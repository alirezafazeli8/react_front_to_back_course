import React from "react";
import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";

function App() {
	const [showModal, setShowModal] = useState(false);
	const [showEvents, setShowEvents] = useState(false);
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

	const subtitle = "This is fantastic subtitle";

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

	const handleCloseModal = () => {
		setShowModal(false);
	};

	return (
		<div className="App">
			<Title title={"hello im from app"} subtitle={subtitle} />

			{buttonsComponent}

			{showEvents && <EventList events={events} handleDelete={handleDelete} />}

			{showModal && (
				<Modal handleCloseModal={handleCloseModal} isSalesMode={false}>
					<h2>We have 10% off</h2>
					<p>use the Alireza code to checkout</p>
				</Modal>
			)}

			<button
				onClick={() => {
					setShowModal(true);
				}}
			>
				Show Modal
			</button>
		</div>
	);
}

export default App;
