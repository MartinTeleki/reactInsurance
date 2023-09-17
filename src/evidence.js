import React, { useEffect, useState } from "react";
import "./newEvidence.css";

export default function NewEvidence() {
  const [registrationInfo, setRegistrationInfo] = useState({});

  useEffect(() => {
    const storedInfo = localStorage.getItem("registrationInfo");
    if (storedInfo) {
      setRegistrationInfo(JSON.parse(storedInfo));
    }
  }, [registrationInfo]);

  return (
    <div className="evidence-container">
      <div className="evidence-item evidence-item-title">
        <h2>Evidence</h2>
      </div>
      <div className="evidence-item">
        <h3>First Name:</h3>
        <p>{registrationInfo.firstName}</p>
      </div>
      <div className="evidence-item">
        <h3>Last Name:</h3>
        <p>{registrationInfo.lastName}</p>
      </div>
      <div className="evidence-item">
        <h3>Email:</h3>
        <p>{registrationInfo.email}</p>
      </div>
      <div className="evidence-item">
        <h3>Phone Number:</h3>
        <p>{registrationInfo.phoneNumber}</p>
      </div>
      <div className="evidence-item">
        <h3>Age:</h3>
        <p>{registrationInfo.age}</p>
      </div>
      <div className="evidence-item">
        <h3>Insurance Number:</h3>
        <p>{registrationInfo.insuranceNumber}</p>
      </div>
      <div className="evidence-item">
        <h3>Insurance Code:</h3>
        <p>{registrationInfo.insuranceCode}</p>
      </div>
      <div className="evidence-item">
        <h3>Gender:</h3>
        <p>{registrationInfo.gender}</p>
      </div>
      <div className="btn-delete-container">
        <button className="btn-delete">Delete user</button>
      </div>
    </div>
  );
}
