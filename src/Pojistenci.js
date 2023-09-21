import React, { useState, useEffect } from "react";
import "./pojistenci.css";

export default function Pojistenci() {
  const [evidenceList, setEvidenceList] = useState([]);
  const [mergedData, setMergedData] = useState([]);
  const [actuallyPage, setActuallyPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
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
      isHidden: false,
    }));

    setMergedData(mergedData);
    setEvidenceList(storedEvidence);
  }, []);

  function handleDeleteEvidenceList(index) {
    const updatedEvidenceList = [...evidenceList];
    updatedEvidenceList.splice(index, 1);

    const updatedMergedData = [...mergedData];
    updatedMergedData[index].isHidden = true;

    setEvidenceList(updatedEvidenceList);
    localStorage.setItem("evidenceTEST", JSON.stringify(updatedEvidenceList));
    setMergedData(updatedMergedData);
  }

  const addPolicyholder = (newPolicyholder) => {
    const updatedEvidenceList = [...evidenceList, newPolicyholder];
    setEvidenceList(updatedEvidenceList);

    localStorage.setItem("evidenceTEST", JSON.stringify(updatedEvidenceList));
  };

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
      <h2 className="table-title">
        {showForm ? "Nový pojištěnec" : "Pojištěnci"}
      </h2>
      <button
        className="new-policyholder"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Skrýt formulář" : "Nový pojištěnec"}
      </button>

      {showForm && (
        <NewPolicyholderForm
          addPolicyholder={addPolicyholder}
          handleDeleteEvidenceList={handleDeleteEvidenceList}
          actuallyPage={actuallyPage}
          changeInsurencePageMinus={changeInsurencePageMinus}
          changeInsurencePage={changeInsurencePage}
          changeInsurencePagePlus={changeInsurencePagePlus}
          amountPages={amountPages}
          showInsurence={showInsurence}
          setShowForm={setShowForm}
          showForm={showForm}
        />
      )}

      {!showForm && (
        <PolicyholderForm
          addPolicyholder={addPolicyholder}
          handleDeleteEvidenceList={handleDeleteEvidenceList}
          actuallyPage={actuallyPage}
          changeInsurencePageMinus={changeInsurencePageMinus}
          changeInsurencePage={changeInsurencePage}
          changeInsurencePagePlus={changeInsurencePagePlus}
          amountPages={amountPages}
          showInsurence={showInsurence}
        />
      )}
    </div>
  );
}

function PolicyholderForm({
  showInsurence,
  handleDeleteEvidenceList,
  actuallyPage,
  changeInsurencePageMinus,
  changeInsurencePage,
  changeInsurencePagePlus,
  amountPages,
}) {
  return (
    <div>
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

function NewPolicyholderForm({ addPolicyholder, showForm, setShowForm }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [insuranceNumber, setInsuranceNumber] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");

  const handleAddNewInsurancePolicy = (e) => {
    e.preventDefault();

    if (
      firstName &&
      lastName &&
      phoneNumber &&
      insuranceNumber &&
      age &&
      gender &&
      city
    ) {
      const newPolicyholder = {
        firstName,
        lastName,
        phoneNumber,
        insuranceNumber,
        age,
        gender,
        city,
      };

      addPolicyholder(newPolicyholder);
      alert("Registrace proběhla úspěšně");
      setShowForm(false);

      setFirstName("");
      setLastName("");
      setPhoneNumber("");
      setInsuranceNumber("");
      setAge("");
      setGender("");
      setCity("");
    } else {
      alert("Vyplňte prosím všechna pole");
    }
  };

  return (
    <form className="policyholder-form">
      <h2>Přidat nového pojištěnce</h2>
      <div className="form-group">
        <label>Jméno:</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Příjmení:</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Telefon:</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Číslo smlouvy:</label>
        <input
          type="text"
          value={insuranceNumber}
          onChange={(e) => setInsuranceNumber(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Věk:</label>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Pohlaví:</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Vyberte pohlaví</option>
          <option value="Male">Muž</option>
          <option value="Female">Žena</option>
          <option value="Other">Jiné</option>
        </select>
      </div>
      <div className="form-group">
        <label>Bydliště:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <button
        className="btn-add-insurance-person"
        type="submit"
        onClick={handleAddNewInsurancePolicy}
      >
        Přidat pojištěnce
      </button>
    </form>
  );
}
