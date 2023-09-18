import React, { useState, useEffect } from "react";
import "./newInformation.css";

export function NewInformation({ evidenceList, numberOfContracts }) {
  const info = {
    numberOfClients: evidenceList.length,
    numberOfContracts: numberOfContracts.length,
    companySetUp: 1996,
    contractValue: 200000,
    discount: 80,
    moneyPayout: 3,
    insuranceAmount: 845457546,
  };

  const styles = {
    textColor: "#a2ff00",
  };

  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const currentHour = currentDateTime.getHours();

    if (currentHour >= 6 && currentHour < 12) {
      setGreeting("Dobré ráno");
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting("Dobré odpoledne");
    } else {
      setGreeting("Dobrý večer");
    }
  }, [currentDateTime]);

  return (
    <div className="informace-container">
      <p>
        <span style={{ color: styles.textColor }}>{greeting}</span>, srdečně Vás
        vítáme v naší React pojišťovně.
      </p>
      {info.numberOfClients > 0 && info.numberOfContracts > 0 ? (
        <p>
          Naše pojišťovna už se stará o{" "}
          <span style={{ color: styles.textColor }}>
            {info.numberOfClients}
          </span>{" "}
          klientů. Bylo uzavřeno{" "}
          <span style={{ color: styles.textColor }}>
            {info.numberOfContracts}
          </span>{" "}
          smluv.
        </p>
      ) : (
        <div>
          <p>
            Momentálně nebyla s nikým sjednána smlouva. Buďte prvním klientem a
            získejte pojištění se slevou až{" "}
            <span style={{ color: styles.textColor }}>{info.discount}% </span>.
          </p>
          <p>
            Naše pojišťovna existuje již od roku {info.companySetUp}. Již jsme
            našim klientům vyplatili{" "}
            <styles style={{ color: styles.textColor }}>
              {info.contractValue}
            </styles>
            $. Naši klienti jsou pojištěni celkově do výše{" "}
            <span style={{ color: styles.textColor }}>
              {" "}
              {info.insuranceAmount}
            </span>
            $.
          </p>
          <p>
            Pokud hledáte férovou pojišťovnu, která Vám vyplatí nejpozději do{" "}
            <span style={{ color: styles.textColor }}>{info.moneyPayout}.</span>{" "}
            dne vaši pohledávku.
          </p>
          <p className="time">Dnes je: {currentDateTime.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}
