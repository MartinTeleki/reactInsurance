import React from "react";
import "./pojistenci.css";

export default function Pojistenci() {
  const pojistenciData = [
    { jmeno: "Jan Novák", bydliste: "Praha" },
    { jmeno: "Marie Svobodová", bydliste: "Brno" },
    { jmeno: "Petr Dvořák", bydliste: "Ostrava" },
  ];

  return (
    <div className="table-container">
      <h2 className="table-title">Pojištěnci</h2>
      <button className="new-policyholder">Nový pojištěnec</button>
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
        {pojistenciData.map((pojistenec, index) => (
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
    </div>
  );
}
