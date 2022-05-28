import React from "react";
import style from "./EventList.module.css";

function EventList({ events, handleDelete }) {
	// console.log(style);

	const { card } = style;

	return (
		<>
			{events.map((value, index) => (
				<div className={card} key={value.id}>
					<small> {index + 1}</small> {value.title}
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
