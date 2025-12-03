import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<form action="" onSubmit={(e) => handleSubmit(e)}>
				<fieldset id="general-info">
          <legend>General Information</legend>
					<label htmlFor="">
						Full Name: <input id="name" type="text" placeholder="Full Name" />
					</label>

					<label htmlFor="email">
						Email: <input id="email" type="text" placeholder="Email" />
					</label>

					<label htmlFor="phone-number">
						Phone Number:{" "}
						<input id="phone-number" type="text" placeholder="Phone Number" />
					</label>
				</fieldset>
				<fieldset id="educational-info">
          <legend>Educational Experience</legend>
					<label htmlFor="school">
						Educational Experience:{" "}
						<input id="school" type="text" placeholder="School Name" />
					</label>

					<label htmlFor="degree">
						Degree: <input id="degree" type="text" placeholder="Degree" />
					</label>

					<label htmlFor="title">
						Title of Study:{" "}
						<input id="title" type="text" placeholder="Title of Study" />
					</label>

					<label htmlFor="date">
						Date of Study:{" "}
						<input id="date" type="date" placeholder="Date of Study" />
					</label>
				</fieldset>
				<fieldset id="work-experience">
          <legend>Work Experience</legend>
					<label htmlFor="company">
						Company Name:{" "}
						<input id="company" type="text" placeholder="Company Name" />
					</label>

					<label htmlFor="position">
						Position Title:{" "}
						<input id="position" type="text" placeholder="Position Title" />
					</label>

					<label htmlFor="tasks">
						Main Tasks:{" "}
						<input id="tasks" type="text" placeholder="Main Tasks" />
					</label>

					<label htmlFor="start-date">
						Start Date: <input type="date" id="start-date" name="start-date" />
					</label>

					<label htmlFor="end-date">
						End Date: <input type="date" id="end-date" name="end-date" />
					</label>
				</fieldset>
				<button type="submit">Submit</button>
			</form>
		</>
	);
}

export default App;
