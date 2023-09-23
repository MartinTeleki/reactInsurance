import React from "react";
import "./pojisteni.css";

export function Pojisteni({ changePage }) {
  const insuranceTypes = {
    type1: "Pojištění osob",
    type2: "Životní pojištění",
    type3: "Cestovní pojištění",
    type4: "Úrazové pojištění",
    type5: "Nemocenské a sociální pojištění",
    type6: "Zdravotní pojištění",
    type7: "Pojištění majetku (zejména budov a nemovitého majetku)",
    type8: "Živelní pojištění",
    type9: "Technická pojištění",
    type10: "Pojištění přerušení provozu",
    type11: "Pojištění proti odcizení či krádeži",
    type12: "Dopravní pojištění",
    type13: "Pojištění vozidel",
    type14: "Pojištění budov",
    type15: "Pojištění podnikání",
    type16: "Pojištění odpovědnosti",
    type17: "Pojištění profesní odpovědnosti",
    type18: "Pojištění odpovědnosti za škodu",
    type19: "Pojištění odpovědnosti při podnikání",
    type20: "Pojištění odpovědnosti zaměstnanců",
    type21: "Pojištění schopnosti splácet",
    type22: "Pojištění právní ochrany",
    type23: "Pojištění finančních ztrát",
    type24: "Pojištění pohledávek",
    type25: "Pojištění odpovědnosti za produkt",
  };

  return (
    <div className="insurance-police-holder-container">
      <h2 className="insurance-police-holder-title">Pojištění</h2>
      <p className="insurance-police-holder-description">
        Zde Vám nabízíme typy pojištění, které nabízíme. Pokud máte o některý
        typ zájem, určitě se ozvěte našim specialistům{" "}
        <a
          className="insurance-police-holder-nav"
          href="X"
          alt="Odkaz na kontakt"
          onClick={(e) => {
            e.preventDefault();
            changePage("contact");
          }}
        >
          zde
        </a>
        .{" "}
      </p>
      {Object.entries(insuranceTypes).map(([key, value]) => (
        <div className="insurance-police-holder-box" key={key}>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
}
