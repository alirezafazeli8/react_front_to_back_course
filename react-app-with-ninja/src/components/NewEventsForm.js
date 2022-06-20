import { useState, useRef } from "react";

function NewEventsForm({ addEvent, closeModal }) {
	// ref
	const eventName = useRef();
	const eventDate = useRef();

	// state
	const [location, setLocation] = useState("Tehran");

	const resetForm = () => {
		eventName.current.value = "";
		eventDate.current.value = "";
	};

	const handleLocation = (e) => {
		setLocation(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const myEventObj = {
			title: eventName.current.value,
			date: eventDate.current.value,
			location,
			id: Math.floor(Math.random() * 10000),
		};

		addEvent(myEventObj);
		resetForm();
		closeModal(false);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				<span>event name </span>
				<input
					id="event-name"
					type={"text"}
					placeholder="event name"
					ref={eventName}
				/>
			</label>
			<label>
				<span>event date </span>
				<input
					id="event-date"
					type={"date"}
					placeholder="event date"
					ref={eventDate}
				/>
			</label>
			<label>
				<span>pleas select the location:</span>
				<select onChange={handleLocation}>
					<option value={"Tehran"}>Tehran</option>
					<option value={"Sari"}>Sari</option>
					<option value={"Neka"}>Neka</option>
				</select>
			</label>

			<button type="submit">Add</button>

			<h2 onClick={resetForm}>reset the form</h2>
		</form>
	);
}

export default NewEventsForm;
