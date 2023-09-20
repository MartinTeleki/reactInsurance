import React, { useState } from "react";
import "./pojistenci.css";

export default function Pojistenci() {
  const insurenceInformation = [
    { jmeno: "Jan Novák", bydliste: "Praha" },
    { jmeno: "Marie Svobodová", bydliste: "Brno" },
    { jmeno: "Petr Dvořák", bydliste: "Ostrava" },
    { jmeno: "Marie Svobodová", bydliste: "Brno" },
    { jmeno: "Marie Svobodová", bydliste: "Brno" },
    { jmeno: "Jan Novák", bydliste: "Praha" },
    { jmeno: "Marie Svobodová", bydliste: "Brno" },
    { jmeno: "Petr Dvořák", bydliste: "Ostrava" },
    { jmeno: "Jan Novák", bydliste: "Praha" },
    { jmeno: "Marie Svobodová", bydliste: "Brno" },
    { jmeno: "Marie Svobodová", bydliste: "Brno" },
    { jmeno: "Petr Dvořák", bydliste: "Ostrava" },
    { jmeno: "Marie Svobodová", bydliste: "Brno" },
    { jmeno: "Marie Svobodová", bydliste: "Brno" },
    { jmeno: "Jan Novák", bydliste: "Praha" },
    { jmeno: "Marie Svobodová", bydliste: "Brno" },
    { jmeno: "Marie Svobodová", bydliste: "Brno" },
    { jmeno: "Petr Dvořák", bydliste: "Ostrava" },
    { jmeno: "Jan Novák", bydliste: "Praha" },
    { jmeno: "Marie Svobodová", bydliste: "Brno" },
    { jmeno: "Petr Dvořák", bydliste: "Ostrava" },
    { jmeno: "Marie Svobodová", bydliste: "Brno" },
    { jmeno: "Marie Svobodová", bydliste: "Brno" },
    { jmeno: "Jan Novák", bydliste: "Praha" },
    { jmeno: "Marie Svobodová", bydliste: "Brno" },
    { jmeno: "Petr Dvořák", bydliste: "Ostrava" },
    { jmeno: "Jan Novák", bydliste: "Praha" },
    { jmeno: "Marie Svobodová", bydliste: "Brno" },
    { jmeno: "Marie Svobodová", bydliste: "Brno" },
    { jmeno: "Petr Dvořák", bydliste: "Ostrava" },
    { jmeno: "Marie Svobodová", bydliste: "Brno" },
    { jmeno: "Marie Svobodová", bydliste: "Brno" },
    { jmeno: "Jan Novák", bydliste: "Praha" },
    { jmeno: "Marie Svobodová", bydliste: "Brno" },
    { jmeno: "Marie Svobodová", bydliste: "Brno" },
    { jmeno: "Petr Dvořák", bydliste: "Ostrava" },
  ];
  const pageRecords = 10;

  const [actuallyPage, setActuallyPage] = useState(1);

  const amountPages = Math.ceil(insurenceInformation.length / pageRecords);

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
  const showInsurence = insurenceInformation.slice(startIndex, finishIndex);

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
            <div className="table-name">{pojistenec.jmeno}</div>
            <div className="table-name">{pojistenec.bydliste}</div>
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
