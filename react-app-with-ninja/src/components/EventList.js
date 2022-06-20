import React from "react";
import style from "./EventList.module.css";

function EventList({ events, handleDelete }) {
	// get styles from css module
	const { card } = style;

	return (
		<>
			{/* get the items from props */}
			{events.map((value, index) => (
				// create element of items
				<div className={card} key={value.id}>
					<small> {value.date}</small> - location : {value.location}{" "}
					{value.title}
					<br></br>
					<button
						onClick={() => {
							handleDelete(value.id);
						}}
					>
						delete
					</button>
				</div>
			))}
		</>
	);
}

export default EventList;
