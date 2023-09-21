import React, { useState, useEffect } from "react";
import "./pojistenci.css";

export default function Pojistenci({ evidenceList, setEvidenceList }) {
  const [mergedData, setMergedData] = useState([]);
  const [actuallyPage, setActuallyPage] = useState(1);
  const pageRecords = 3;

  useEffect(() => {
    const storedEvidence =
      JSON.parse(localStorage.getItem("evidenceTEST")) || [];

    const personFirstName = storedEvidence.map((info) => info.firstName);
    const personLastName = storedEvidence.map((info) => info.lastName);
    const personCity = storedEvidence.map((info) => info.city);

    const mergedData = personFirstName.map((firstName, index) => ({
      firstName,
      lastName: personLastName[index],
      city: personCity[index],
      isHidden: false, // Přidáme nový stav pro určení, zda je řádek skrytý
    }));

    setMergedData(mergedData);
  }, []);

  function handleDeleteEvidenceList(index) {
    const updatedEvidenceList = [...evidenceList];
    updatedEvidenceList.splice(index, 1);

    // Nastavíme isHidden na true pro skrytí řádku
    const updatedMergedData = [...mergedData];
    updatedMergedData[index].isHidden = true;

    // Aktualizace stavu komponenty a localStorage
    setEvidenceList(updatedEvidenceList);
    localStorage.setItem("evidenceTEST", JSON.stringify(updatedEvidenceList));
    setMergedData(updatedMergedData);
  }

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
      <h2 className="table-title">Pojištěnci</h2>
      <button className="new-policyholder">Nový pojištěnec</button>

      <div className="table">
        <div className="table-row header-row">
          <div className="table-cell header-cell">Jméno</div>
          <div className="table-cell header-cell">Bydliště</div>
          <div className="table-cell header-cell">Akce</div>
        </div>

        {showInsurence.map((pojistenec, index) => (
          <div
            className={`table-row ${pojistenec.isHidden ? "hidden" : ""}`}
            key={index}
          >
            <div className="table-cell">{pojistenec.firstName}</div>
            <div className="table-cell">{pojistenec.city}</div>
            <div className="table-cell">
              <button
                className="btn-editovat"
                onClick={() => handleDeleteEvidenceList(index)}
              >
                Editovat
              </button>
              <button
                className="btn-odstranit"
                onClick={() => handleDeleteEvidenceList(index)}
              >
                Odstranit
              </button>
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
