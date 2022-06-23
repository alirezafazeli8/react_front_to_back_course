import React, { useRef } from "react";
import "./TaskInput.css";
import { v4 } from "uuid";
import Swal from "sweetalert2";
import esfahani from "../assets/angryMen.jpg";

function TaskInput({ sendTask }) {
	const taskText = useRef();

	const addTaskEvent = (e) => {
		if (e.code === "Enter") {
			if (taskText.current.value.split() != "") {
				const taskObj = {
					text: taskText.current.value,
					id: v4(),
				};

				sendTask(taskObj);
				taskText.current.value = "";
			} else {
				Swal.fire({
					title: "Task is empty !",
					text: "Pleas write your task in task input and again click enter.",
					imageUrl: esfahani,
					confirmButtonText: "Ok",
				});
				return;
			}
		}
	};

	return (
		<div className="task-input" onKeyUp={addTaskEvent}>
			<input
				type="text"
				name=""
				id=""
				placeholder="Enter Your task"
				ref={taskText}
			/>
		</div>
	);
}

export default TaskInput;
