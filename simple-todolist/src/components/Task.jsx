import React, { useState } from "react";
import "./Task.css";

function Task({ taskName }) {
	const [taskDone, setTaskDone] = useState("none");

	const taskComplete = (e) => {
		if (e.target.checked) {
			setTaskDone("line-through");
		} else {
			setTaskDone("none");
		}
	};

	return (
		<div className="task">
			<input type="checkbox" name="" id="" onChange={taskComplete} />
			<p style={{ textDecoration: taskDone }}>{taskName}</p>
		</div>
	);
}

Task.defaultProps = {
	taskName: "Task",
};

export default Task;
