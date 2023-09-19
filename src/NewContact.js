import React from "react";
import "./newContact.css";

export function NewContact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Kontakt na pojišťovnu</h2>
      <div className="contact-box">
        <p className="">
          Jana Nováková{" "}
          <i className="fa fa-phone-square" aria-hidden="true"></i>
          <span>+420 774 887 999</span>{" "}
          <i className="fa fa-envelope" aria-hidden="true"></i> email:
          jirinanovakova@reactpojistovna.cz
        </p>
      </div>
      <div className="contact-box">
        <p>
          Buka Zázračná{" "}
          <i className="fa fa-phone-square" aria-hidden="true"></i>
          <span>+420 774 887 998</span>{" "}
          <i className="fa fa-envelope" aria-hidden="true"></i>email:
          jirinagorbalova@reactpojistovna.cz
        </p>
      </div>
      <div className="contact-box">
        <p>
          Falka Věčná <i className="fa fa-phone-square" aria-hidden="true"></i>
          <span>+420 774 887 997</span>{" "}
          <i className="fa fa-envelope" aria-hidden="true"></i>email:
          jirinavecna@reactpojistovna.cz
        </p>
      </div>
      <div className="contact-box">
        <p>
          Petra Konečná{" "}
          <i className="fa fa-phone-square" aria-hidden="true"></i>{" "}
          <span>+420 774 887 996</span>{" "}
          <i className="fa fa-envelope" aria-hidden="true"></i>email:
          jirinakonecna@reactpojistovna.cz
        </p>
      </div>
      <div className="contact-box">
        <p>
          Jiřina Peřinová{" "}
          <i className="fa fa-phone-square" aria-hidden="true"></i>{" "}
          <span>+420 774 887 996</span>{" "}
          <i className="fa fa-envelope" aria-hidden="true"></i>email:
          jirinaperinova@reactpojistovna.cz
        </p>
      </div>
    </div>
  );
}
