import "./newRegister.css";
import React, { useState, useEffect } from "react";
import App from "./App";

export default function NewRegister({
  registrationInfo,
  setRegistrationInfo,
  passwordSave,
  passwordSaveControl,
}) {
  const initialRegistrationInfo = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    age: "",
    password: "",
    controlPassword: "",
    insuranceNumber: "",
    insuranceCode: "",
    gender: "",
    termsAccepted: false,
  };

  //console.log(registrationInfo);

  function HandleInputChange(e) {
    const { name, value, type, checked } = e.target;
    setRegistrationInfo((prevInfo) => ({
      ...prevInfo,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function HandleRegisterButton(e) {
    e.preventDefault();

    const existingEvidence = JSON.parse(localStorage.getItem("evidence")) || [];

    existingEvidence.push(registrationInfo);

    localStorage.setItem("evidence", JSON.stringify(existingEvidence));

    setRegistrationInfo(initialRegistrationInfo);

    alert("Registrace byla úspěšně odeslána!");
  }

  //console.log(registrationInfo);

  return (
    <div className="container">
      <form method="post" autoComplete="on">
        {/* First name */}
        <div className="box">
          <div className="register-title">
            <h2>Register</h2>
          </div>
          <label htmlFor="firstName" className="fl fontLabel">
            {" "}
            First Name:{" "}
          </label>
          <div className="new iconBox">
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="text"
              name="firstName"
              placeholder="Jan"
              autoFocus="on"
              required
              className="textBox"
              value={registrationInfo.firstName}
              onChange={HandleInputChange}
            />
          </div>
          <div className="clr"></div>
        </div>
        {/* First name */}

        {/* Second name */}
        <div className="box">
          <label htmlFor="last-name" className="fl fontLabel">
            {" "}
            Last Name:{" "}
          </label>
          <div className="fl iconBox">
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="text"
              required
              name="lastName"
              placeholder="Novák"
              className="textBox"
              value={registrationInfo.lastName}
              onChange={HandleInputChange}
            />
          </div>
          <div className="clr"></div>
        </div>
        {/* Second name */}

        {/* Phone No. */}
        <div className="box">
          <label htmlFor="phone" className="fl fontLabel">
            {" "}
            Phone No.:{" "}
          </label>
          <div className="fl iconBox">
            <i className="fa fa-phone-square" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="text"
              required
              name="phoneNumber"
              maxLength="10"
              placeholder="Phone No."
              className="textBox"
              value={registrationInfo.phoneNumber}
              onChange={HandleInputChange}
            />
          </div>
          <div className="clr"></div>
        </div>
        {/* Phone No. */}

        {/* Email ID */}
        <div className="box">
          <label htmlFor="email" className="fl fontLabel">
            {" "}
            Email ID:{" "}
          </label>
          <div className="fl iconBox">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="email"
              required
              name="email"
              placeholder="jannovak@seznam.cz"
              className="textBox"
              value={registrationInfo.email}
              onChange={HandleInputChange}
            />
          </div>
          <div className="clr"></div>
        </div>
        {/* Email ID */}

        {/* Password */}
        <div className="box">
          <label htmlFor="password" className="fl fontLabel">
            {" "}
            Password{" "}
          </label>
          <div className="fl iconBox">
            <i className="fa fa-key" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="password"
              required
              name="password"
              placeholder="*******"
              className="textBox"
              value={registrationInfo.password}
              onChange={HandleInputChange}
            />
          </div>
          <div className="clr"></div>
        </div>
        {/* Password */}
        {/* Repassword */}
        <div className="box">
          <label htmlFor="controlPassword" className="fl fontLabel">
            {" "}
            Re-Password:{" "}
          </label>
          <div className="fl iconBox">
            <i className="fa fa-key" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="password"
              required
              name="controlPassword"
              placeholder="*******"
              className="textBox"
              value={registrationInfo.controlPassword}
              onChange={HandleInputChange}
            />
          </div>
          <div className="clr"></div>
        </div>
        {/* Repassword */}
        {/* Age */}

        <div className="box">
          <label htmlFor="age" className="fl fontLabel">
            {" "}
            Age:{" "}
          </label>
          <div className="fl iconBox">
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="number"
              required
              name="age"
              placeholder="26"
              className="textBox"
              value={registrationInfo.age}
              onChange={HandleInputChange}
            />
          </div>
          <div className="clr"></div>
        </div>

        {/* Age */}

        {/*insurance policy number */}

        <div className="box">
          <label htmlFor="insuranceNumber" className="fl fontLabel">
            {" "}
            insur.Num:{" "}
          </label>
          <div className="fl iconBox">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="number"
              required
              name="insuranceNumber"
              placeholder="1234567890"
              className="textBox"
              value={registrationInfo.insuranceNumber}
              onChange={HandleInputChange}
            />
          </div>
          <div className="clr"></div>
        </div>

        {/* insurance policy number */}

        {/* insurance policy code */}

        <div className="box">
          <label htmlFor="insuranceCode" className="fl fontLabel">
            {" "}
            Insur.Code:{" "}
          </label>
          <div className="fl iconBox">
            <i className="fa fa-key" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="password"
              required
              name="insuranceCode"
              placeholder="45e87rsd6"
              className="textBox"
              value={registrationInfo.insuranceCode}
              onChange={HandleInputChange}
            />
          </div>
          <div className="clr"></div>
        </div>

        {/* insurance policy code */}
        {/* Gender */}
        <div className="box radio">
          <label htmlFor="gender" className="fl fontLabel">
            {" "}
            Gender:{" "}
          </label>
          <div className="fl iconBox">
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
          <select
            className="select-gender"
            name="gender"
            required
            onChange={HandleInputChange}
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        {/* Gender */}

        {/* Terms and Conditions */}
        <div className="box terms">
          <input
            type="checkbox"
            name="termsAccepted"
            required
            checked={registrationInfo.termsAccepted}
            onChange={HandleInputChange}
          />{" "}
          &nbsp; I accept the terms and conditions
        </div>
        {/* Terms and Conditions */}

        {/* Submit Button */}
        <div className="box" style={{ background: "#2d3e3f" }}>
          <input
            type="submit"
            name="Submit"
            className="submit"
            value="SUBMIT"
            onClick={HandleRegisterButton}
          />
        </div>
        {/* Submit Button */}
      </form>
    </div>
  );
}
