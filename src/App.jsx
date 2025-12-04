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
    name
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
          name={name}
				/>
			</label>
		);
	};

function App() {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    schoolName: '',
    degree: '',
    titleOfStudy: '',
    dateOfStudy: '',
    companyName: '',
    positionTitle: '',
    mainTasks: '',
    startDate: '',
    endDate: ''
  });

	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitted(true);
	};

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleEdit = () => {
    setIsSubmitted(false);
  }

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
							value={formData.fullName}
              onChange={e=> handleChange(e)}							
              placeholder="Full Name"
              name="fullName"
						/>
						<MyInput
							label="Email: "
							id="email"
							type="text"
							value={formData.email}
              onChange={e=> handleChange(e)}							
              placeholder="Email"
              name="email"
						/>
						<MyInput
							label="Phone Number: "
							id="phone-number"
							type="number"
							value={formData.phoneNumber}
              onChange={e=> handleChange(e)}							
              placeholder="Phone Number"
              name="phoneNumber"
						/>
					</fieldset>
					<fieldset id="educational-info">
						<legend>Educational Experience</legend>
						<MyInput
							label="Educational Experience: "
							id="school"
							type="text"
							value={formData.schoolName}
              onChange={e=> handleChange(e)}	
							placeholder="School Name"
              name="schoolName"
						/>
						<MyInput
							label="Degree: "
							id="degree"
							type="text"
							value={formData.degree}
              onChange={e=> handleChange(e)}	
							placeholder="Degree"
              name="degree"
						/>
						<MyInput
							label="Title of Study: "
							id="title"
							type="text"
							value={formData.titleOfStudy}
              onChange={e=> handleChange(e)}	
							placeholder="Title of Study"
              name="titleOfStudy"
						/>
						<MyInput
							label="Date of Study: "
							id="date"
							type="date"
							value={formData.dateOfStudy}
              onChange={e=> handleChange(e)}	
							placeholder="Date of Study"
              name="dateOfStudy"
						/>
					</fieldset>
					<fieldset id="work-experience">
						<legend>Work Experience</legend>
						<MyInput
							label="Company Name: "
							id="company"
							type="text"
							value={formData.companyName}
              onChange={e=> handleChange(e)}	
							placeholder="Company Name"
              name="companyName"
						/>
						<MyInput
							label="Position Title: "
							id="position"
							type="text"
							value={formData.positionTitle}
              onChange={e=> handleChange(e)}	
							placeholder="Position Title"
              name="positionTitle"
						/>
						<MyInput
							label="Main Tasks: "
							id="tasks"
							type="text"
							value={formData.mainTasks}
              onChange={e=> handleChange(e)}	
							placeholder="Main Tasks"
              name="mainTasks"
						/>
						<MyInput
							label="Start Date: "
							id="start-date"
							type="date"
							value={formData.startDate}
              onChange={e=> handleChange(e)}	
							placeholder="Start Date"
              name="startDate"
						/>
						<MyInput
							label="End Date: "
							id="end-date"
							type="date"
							value={formData.endDate}
              onChange={e=> handleChange(e)}	
							placeholder="End Date"
              name="endDate"
						/>
					</fieldset>
					<button type="submit">Submit</button>
				</form>
			)}
			{isSubmitted && (
				<>
					<p>Full Name: {formData.fullName}</p>
					<p>Email: {formData.email}</p>
					<p>Phone Number: {formData.phoneNumber}</p>
					<p>School Name: {formData.schoolName}</p>
					<p>Degree: {formData.degree}</p>
					<p>Title of Study: {formData.titleOfStudy}</p>
					<p>Date of Study: {formData.dateOfStudy}</p>
					<p>Company Name: {formData.companyName}</p>
					<p>Position Title: {formData.positionTitle}</p>
					<p>Main Tasks: {formData.mainTasks}</p>
					<p>Start Date: {formData.startDate}</p>
					<p>End Date: {formData.endDate}</p>
          <button type="button" id="edit" onClick={handleEdit}>Edit</button>
				</>
			)}
		</>
	);
}

export default App;
