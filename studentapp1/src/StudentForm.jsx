import React, { useState } from "react";
import "./StudentForm.css";

const StudentForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Student:", { name, email, phone });
  };

  return (
    <div className="form-container">
      <h2>Student Form</h2>
      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          className="input-field"
        />
        <label>Email Address:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="input-field"
        />
        <label>Phone Number:</label>
        <input
          type="tel"
          value={phone}
          onChange={handlePhoneChange}
          className="input-field"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentForm;
