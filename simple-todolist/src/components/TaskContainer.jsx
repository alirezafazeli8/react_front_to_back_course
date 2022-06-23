import React from "react";
import "./TaskContainer.css";
import Task from "./Task";

function TaskContainer({ taskArray }) {
	if (!taskArray.length) {
		return <p style={{ textAlign: "center" }}>No Task ...</p>;
	}

	return (
		<div className="task-container">
			{taskArray.map((val) => {
				return <Task key={val.id} taskName={val.text} />;
			})}
		</div>
	);
}

export default TaskContainer;
