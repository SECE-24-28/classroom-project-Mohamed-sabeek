import React, { useState } from "react";
import "./RegistrationForm.css";

export default function RegistrationForm() {
  // form fields
  const [studentName, setStudentName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setQualification] = useState("-1");

  // validation messages
  const [nameMsg, setNameMsg] = useState("");
  const [passwordMsg, setPasswordMsg] = useState("");
  const [confirmPasswordMsg, setConfirmPasswordMsg] = useState("");
  const [genderMsg, setGenderMsg] = useState("");
  const [qualificationMsg, setQualificationMsg] = useState("");

  // overall form message
  const [formMsg, setFormMsg] = useState("");

  // validators
  const validateName = () => {
    if (studentName.trim() === "") {
      setNameMsg("Please enter the name");
      return false;
    }
    setNameMsg("Valid");
    return true;
  };

  const validatePassword = () => {
    if (password === "") {
      setPasswordMsg("Please enter your password");
      return false;
    }
    if (password.length < 6) {
      setPasswordMsg("Password must be at least 6 characters");
      return false;
    }
    setPasswordMsg("Valid");
    return true;
  };

  const validateConfirmPassword = () => {
    if (confirmPassword === "") {
      setConfirmPasswordMsg("Please re-enter your password");
      return false;
    }
    if (confirmPassword !== password) {
      setConfirmPasswordMsg("Password and confirm password not same");
      return false;
    }
    setConfirmPasswordMsg("Valid");
    return true;
  };

  const validateGender = () => {
    if (gender !== "male" && gender !== "female") {
      setGenderMsg("Please choose the gender");
      return false;
    }
    setGenderMsg("Valid");
    return true;
  };

  const validateQualification = () => {
    if (qualification === "-1") {
      setQualificationMsg("Please choose the qualification");
      return false;
    }
    setQualificationMsg("Valid");
    return true;
  };

  const validateAll = () => {
    const a = validateName();
    const b = validatePassword();
    const c = validateConfirmPassword();
    const d = validateGender();
    const e = validateQualification();
    return a && b && c && d && e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormMsg("");
    if (validateAll()) {
      setFormMsg("Form submitted successfully!");
    } else {
      setFormMsg("Please fix the errors before submitting.");
    }
  };

  const handleReset = () => {
    setStudentName("");
    setPassword("");
    setConfirmPassword("");
    setGender("");
    setQualification("-1");

    setNameMsg("");
    setPasswordMsg("");
    setConfirmPasswordMsg("");
    setGenderMsg("");
    setQualificationMsg("");
    setFormMsg("");
  };

  return (
    <div className="page-container">
      <form
        className="form-box"
        onSubmit={handleSubmit}
        onReset={handleReset}
        noValidate
      >
        <h2>Sample Validation (React)</h2>

        <label htmlFor="inputName">Student Name:</label>
        <input
          id="inputName"
          type="text"
          name="studentName"
          placeholder="Enter your name"
          value={studentName}
          onChange={(e) => {
            setStudentName(e.target.value);
            if (nameMsg) setNameMsg("");
          }}
          onBlur={validateName}
        />
        <span className={nameMsg === "Valid" ? "ok" : "error"}>{nameMsg}</span>

        <label htmlFor="inputPassword">Password:</label>
        <input
          id="inputPassword"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (passwordMsg) setPasswordMsg("");
          }}
          onBlur={validatePassword}
        />
        <span className={passwordMsg === "Valid" ? "ok" : "error"}>
          {passwordMsg}
        </span>

        <label htmlFor="inputConfirmPassword">Confirm Password:</label>
        <input
          id="inputConfirmPassword"
          type="password"
          name="confirmPassword"
          placeholder="Re-enter password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            if (confirmPasswordMsg) setConfirmPasswordMsg("");
          }}
          onBlur={validateConfirmPassword}
        />
        <span className={confirmPasswordMsg === "Valid" ? "ok" : "error"}>
          {confirmPasswordMsg}
        </span>

        <div className="radio-row">
          <label>Gender:</label>
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                id="genderMale"
                name="gender"
                value="male"
                checked={gender === "male"}
                onChange={(e) => {
                  setGender(e.target.value);
                  if (genderMsg) setGenderMsg("");
                }}
              />
              Male
            </label>

            <label className="radio-label">
              <input
                type="radio"
                id="genderFemale"
                name="gender"
                value="female"
                checked={gender === "female"}
                onChange={(e) => {
                  setGender(e.target.value);
                  if (genderMsg) setGenderMsg("");
                }}
              />
              Female
            </label>
          </div>
        </div>
        <span className={genderMsg === "Valid" ? "ok" : "error"}>{genderMsg}</span>

        <label htmlFor="selectQualification">Qualification:</label>
        <select
          id="selectQualification"
          name="qualification"
          value={qualification}
          onChange={(e) => {
            setQualification(e.target.value);
            if (qualificationMsg) setQualificationMsg("");
          }}
          onBlur={validateQualification}
        >
          <option value="-1">--select--</option>
          <option value="b.tech">B.Tech</option>
          <option value="be(cse)">BE(CSE)</option>
          <option value="mech">Mech</option>
        </select>
        <span className={qualificationMsg === "Valid" ? "ok" : "error"}>
          {qualificationMsg}
        </span>

        <div className="button-row">
          <input type="submit" value="SUBMIT" />
          <input type="reset" value="RESET" />
        </div>

        <div className="form-status">
          {formMsg && (
            <span className={formMsg.includes("success") ? "ok" : "error"}>
              {formMsg}
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
