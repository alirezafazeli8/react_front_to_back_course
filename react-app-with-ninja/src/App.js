import React from "react";
import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventsForm from "./components/NewEventsForm";

function App() {
	// states
	const [showModal, setShowModal] = useState(false); // show modal
	const [showEvents, setShowEvents] = useState(false); // show events

	// events state with default events
	const [events, setEvents] = useState([]);

	// handle delete event
	function handleDelete(id) {
		// set new events from id
		setEvents((prevValue) => {
			return prevValue.filter((event) => event.id !== id);
		});
	}

	// dynamic subtitle
	const subtitle = "This is fantastic subtitle";

	// close modal
	const handleCloseModal = () => {
		setShowModal(false);
	};

	// button components
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

	const addEvent = (event) => {
		setEvents((prevValue) => {
			return [...prevValue, event];
		});
	};

	return (
		<div className="App">
			{/* title component */}
			<Title title={"hello im from app"} subtitle={subtitle} />

			{/* use button component */}
			{buttonsComponent}

			{/* show events if we have any events */}
			{showEvents && <EventList events={events} handleDelete={handleDelete} />}

			{/* modal */}
			{showModal && (
				<Modal handleCloseModal={handleCloseModal} isSalesMode={true}>
					<NewEventsForm addEvent={addEvent} closeModal={setShowModal} />
				</Modal>
			)}

			{/* show modal button */}
			<button
				onClick={() => {
					setShowModal(true);
				}}
			>
				Add events
			</button>
		</div>
	);
}

export default App;
