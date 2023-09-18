import React from "react";
import "./newInformation.css";

export function NewInformation({ evidenceList, numberOfContracts }) {
  const info = {
    numberOfClients: evidenceList.length,
    numberOfContracts: numberOfContracts.length,
    companySetUp: 1996,
    contractValue: 200000,
  };

  return (
    <div className="informace-container">
      <p>Dobrý den, srdečně Vás vítáme v naší React pojišťovně.</p>
      {info.numberOfClients > 0 && info.numberOfContracts > 0 ? (
        <p>
          Naše pojišťovna už se stará o {info.numberOfClients} klientů. Bylo
          uzavřeno {info.numberOfContracts} smluv.
        </p>
      ) : (
        <div>
          <p>
            Momentálně nebyla s nikým sjednána smlouva. Buďte prvním klientem a
            získejte pojištění se slevou až 80%.
          </p>
          <p>
            Naše pojišťovna existuje již od roku {info.companySetUp}. Již jsme
            našim klientům vyplatili {info.contractValue}$.
          </p>
          <p>
            Pokud hledáte férovou pojišťovnu, která Vám vyplatí nejpozději do X
            dnů vaši pohledávku.
          </p>
          <p>Dnes je den měsíc rok a hodiny</p>
        </div>
      )}
    </div>
  );
}
