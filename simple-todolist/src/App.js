import { useState } from "react";
import Header from "./components/Header";
import TaskContainer from "./components/TaskContainer";
import "./App.css";
import TaskInput from "./components/TaskInput";

function App() {
	const [taskArray, setTaskArray] = useState([]);

	return (
		<div className="App">
			<Header
				title="Simple Todolist"
				describe={
					<p>
						React development by{" "}
						<span style={{ color: "black" }}>github.com/alirezafazeli8</span>
					</p>
				}
			>
				{/* task input component */}
				<TaskInput
					sendTask={(t) => {
						setTaskArray((cur) => {
							return [...cur, t];
						});
					}}
				/>
			</Header>
			<TaskContainer taskArray={taskArray} />
		</div>
	);
}

export default App;
