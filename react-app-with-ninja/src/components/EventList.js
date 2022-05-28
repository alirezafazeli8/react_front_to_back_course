import React from "react";

function EventList({ events, handleDelete }) {
	return (
		<>
			{events.map((value, index) => (
				<div key={value.id}>
					<small> {index}</small>- {value.title}
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
