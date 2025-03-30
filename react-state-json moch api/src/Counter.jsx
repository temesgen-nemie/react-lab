import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Counter({ info, setInfo, initialInfo }) {
  const [name, setName] = useState(info.name);
  const [age, setAge] = useState(info.age);
  const [isStudent, setIsStudent] = useState(info.isStudent);

  const handleReset = () => {
    setInfo(initialInfo); // Reset to the initial state from the App component
    setName(initialInfo.name);
    setAge(initialInfo.age);
    setIsStudent(initialInfo.isStudent);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedInfo = {
      name: name,
      age: parseInt(age, 10),
      isStudent: isStudent === "true" || isStudent === true,
    };
    setInfo(updatedInfo);
  };

  return (
    <div className="counter-container">
      <form onSubmit={handleSubmit} className="counter-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <label htmlFor="age" className="form-label">
            Age:
          </label>
          <input
            type="number"
            name="age"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="isStudent" className="form-label">
            Student:
          </label>
          <select
            id="isStudent"
            value={isStudent}
            onChange={(e) => setIsStudent(e.target.value === "true")}
            className="form-select"
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>

        <div className="form-buttons">
          <button type="submit" className="form-button submit-button">
            Submit
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="form-button reset-button"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

Counter.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired,
  }).isRequired,
  setInfo: PropTypes.func.isRequired,
  initialInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired,
  }).isRequired,
};
