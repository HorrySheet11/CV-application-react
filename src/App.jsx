import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "./assets/react.svg";
import "./App.css";

const MyInput = ({
		label,
		id,
		type = "text",
		value,
		placeholder,
		onChange,
	}) => {
		return (
			<label htmlFor={id}>
				{" "}
				{label}
				<input
					required
					id={id}
					type={type}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
				/>
			</label>
		);
	};

function App() {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [schoolName, setSchoolName] = useState("");
	const [degree, setDegree] = useState("");
	const [titleOfStudy, setTitleOfStudy] = useState("");
	const [dateOfStudy, setDateOfStudy] = useState("");
	const [companyName, setCompanyName] = useState("");
	const [positionTitle, setPositionTitle] = useState("");
	const [mainTasks, setMainTasks] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");

	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
    alert("Form submitted successfully!");
		setIsSubmitted(true);
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
			{!isSubmitted && (
				<form action="" onSubmit={(e) => handleSubmit(e)}>
					<fieldset id="general-info">
						<legend>General Information</legend>
						<MyInput
							label="Full Name: "
							id="full-name"
							type="text"
							value={fullName}
							onChange={(e) => setFullName(e.target.value)}
							placeholder="Full Name"
						/>
						<MyInput
							label="Email: "
							id="email"
							type="text"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="Email"
						/>
						<MyInput
							label="Phone Number: "
							id="phone-number"
							type="number"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							placeholder="Phone Number"
						/>
					</fieldset>
					<fieldset id="educational-info">
						<legend>Educational Experience</legend>
						<MyInput
							label="Educational Experience: "
							id="school"
							type="text"
							value={schoolName}
							onChange={(e) => setSchoolName(e.target.value)}
							placeholder="School Name"
						/>
						<MyInput
							label="Degree: "
							id="degree"
							type="text"
							value={degree}
							onChange={(e) => setDegree(e.target.value)}
							placeholder="Degree"
						/>
						<MyInput
							label="Title of Study: "
							id="title"
							type="text"
							value={titleOfStudy}
							onChange={(e) => setTitleOfStudy(e.target.value)}
							placeholder="Title of Study"
						/>
						<MyInput
							label="Date of Study: "
							id="date"
							type="date"
							value={dateOfStudy}
							onChange={(e) => setDateOfStudy(e.target.value)}
							placeholder="Date of Study"
						/>
					</fieldset>
					<fieldset id="work-experience">
						<legend>Work Experience</legend>
						<MyInput
							label="Company Name: "
							id="company"
							type="text"
							value={companyName}
							onChange={(e) => setCompanyName(e.target.value)}
							placeholder="Company Name"
						/>
						<MyInput
							label="Position Title: "
							id="position"
							type="text"
							value={positionTitle}
							onChange={(e) => setPositionTitle(e.target.value)}
							placeholder="Position Title"
						/>
						<MyInput
							label="Main Tasks: "
							id="tasks"
							type="text"
							value={mainTasks}
							onChange={(e) => setMainTasks(e.target.value)}
							placeholder="Main Tasks"
						/>
						<MyInput
							label="Start Date: "
							id="start-date"
							type="date"
							value={startDate}
							onChange={(e) => setStartDate(e.target.value)}
							placeholder="Start Date"
						/>
						<MyInput
							label="End Date: "
							id="end-date"
							type="date"
							value={endDate}
							onChange={(e) => setEndDate(e.target.value)}
							placeholder="End Date"
						/>
					</fieldset>
					<button type="submit">Submit</button>
				</form>
			)}
			{isSubmitted && (
				<>
					<p>Full Name: {fullName}</p>
					<p>Email: {email}</p>
					<p>Phone Number: {phoneNumber}</p>
					<p>School Name: {schoolName}</p>
					<p>Degree: {degree}</p>
					<p>Title of Study: {titleOfStudy}</p>
					<p>Date of Study: {dateOfStudy}</p>
					<p>Company Name: {companyName}</p>
					<p>Position Title: {positionTitle}</p>
					<p>Main Tasks: {mainTasks}</p>
					<p>Start Date: {startDate}</p>
					<p>End Date: {endDate}</p>
				</>
			)}
		</>
	);
}

export default App;
