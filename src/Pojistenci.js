import React, { useState } from "react";
import "./pojistenci.css";

export default function Pojistenci() {
  const storedEvidence = JSON.parse(localStorage.getItem("evidenceTEST")) || [];

  const personFirstName = storedEvidence.map((info) => info.firstName);
  const personLastName = storedEvidence.map((info) => info.lastName);
  const personCity = storedEvidence.map((info) => info.city);

  const mergedData = personFirstName.map((firstName, index) => ({
    firstName,
    lastName: personLastName[index],
    city: personCity[index],
  }));

  const pageRecords = 3;

  const [actuallyPage, setActuallyPage] = useState(1);

  const amountPages = Math.ceil(mergedData.length / pageRecords);

  const changeInsurencePage = (numberPage) => {
    setActuallyPage(numberPage);
  };

  function changeInsurencePagePlus(actuallyPage) {
    setActuallyPage(actuallyPage + 1);
  }

  function changeInsurencePageMinus(actuallyPage) {
    setActuallyPage(actuallyPage - 1);
  }

  const startIndex = (actuallyPage - 1) * pageRecords;
  const finishIndex = startIndex + pageRecords;
  const showInsurence = mergedData.slice(startIndex, finishIndex);

  return (
    <div className="table-container">
      <div className="title-container">
        <h2 className="table-title">Pojištěnci</h2>
        <button className="new-policyholder">Nový pojištěnec</button>
      </div>
      <div className="table">
        <div className="table-row">
          <div className="table-name" style={{ fontWeight: "bold" }}>
            Jméno
          </div>
          <div className="table-name" style={{ fontWeight: "bold" }}>
            Bydliště
          </div>
          <button className="btn-editovat disabled" style={{ opacity: 0 }}>
            Editovat
          </button>
          <button className="btn-odstranit disabled" style={{ opacity: 0 }}>
            Odstranit
          </button>
        </div>
      </div>
      <div className="table">
        {showInsurence.map((pojistenec, index) => (
          <div className="table-row" key={index}>
            <div className="table-name">{pojistenec.firstName}</div>
            <div className="table-name">{pojistenec.city}</div>
            <div className="action button">
              <button className="btn-editovat">Editovat</button>
              <button className="btn-odstranit">Odstranit</button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button
          className={`pagination-item ${actuallyPage === 1 ? "disabled" : ""}`}
          onClick={() => changeInsurencePageMinus(actuallyPage)}
        >
          Předchozí
        </button>
        {Array.from({ length: amountPages }, (v, i) => i + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              className={`pagination-item ${
                actuallyPage === pageNumber ? "active" : ""
              }`}
              onClick={() => changeInsurencePage(pageNumber)}
            >
              {pageNumber}
            </button>
          )
        )}
        <button
          className={`pagination-item ${
            actuallyPage === amountPages ? "disabled" : ""
          }`}
          onClick={() => changeInsurencePagePlus(actuallyPage)}
        >
          Další
        </button>
      </div>
    </div>
  );
}
