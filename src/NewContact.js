import React from "react";
import "./newContact.css";

export function NewContact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Kontakt na pojišťovnu</h2>
      <div className="contact-box">
        <p className="contact-paragraph">
          <span>Jana Nováková </span>
          <i
            className="fa-contact fa-phone-square-contact black-icon-contact"
            aria-hidden="true"
          ></i>
          <span className="phonenumber-span-contact">+420 774 887 999</span>{" "}
          <i
            className="fa-contact fa-envelope-contact black-icon"
            aria-hidden="true"
          ></i>{" "}
          <span className="email-span">
            email: jirinanovakova@reactpojistovna.cz
          </span>
        </p>
      </div>
      <div className="contact-box">
        <p className="contact-paragraph">
          <span>Buka Zázračná </span>
          <i
            className="fa-contact fa-phone-square-contact black-icon-contact"
            aria-hidden="true"
          ></i>
          <span className="phonenumber-span-contact">+420 774 887 998</span>{" "}
          <i
            className="fa fa-envelope-contact black-icon-contact"
            aria-hidden="true"
          ></i>
          <span className="email-span">
            email: jirinagorbalova@reactpojistovna.cz
          </span>
        </p>
      </div>
      <div className="contact-box">
        <p className="contact-paragraph">
          <span>Falka Věčná </span>
          <i
            className="fa-contact fa-phone-square-contact black-icon-contact"
            aria-hidden="true"
          ></i>
          <span className="phonenumber-span-contact">+420 774 887 997</span>{" "}
          <i
            className="fa fa-envelope-contact black-icon-contact"
            aria-hidden="true"
          ></i>
          <span className="email-span">
            email: jirinavecna@reactpojistovna.cz
          </span>
        </p>
      </div>
      <div className="contact-box">
        <p className="contact-paragraph">
          <span>Petra Konečná </span>
          <i
            className="fa-contact fa-phone-square-contact black-icon-contact"
            aria-hidden="true"
          ></i>
          <span className="phonenumber-span-contact">+420 774 887 996</span>{" "}
          <i
            className="fa fa-envelope-contact black-icon-contact"
            aria-hidden="true"
          ></i>
          <span className="email-span">
            email: jirinakonecna@reactpojistovna.cz
          </span>
        </p>
      </div>
      <div className="contact-box">
        <p className="contact-paragraph">
          <span>Jiřina Peřinová </span>
          <i
            className="fa fa-phone-square-contact black-icon"
            aria-hidden="true"
          ></i>
          <span className="phonenumber-span-contact">+420 774 887 996</span>{" "}
          <i
            className="fa fa-envelope-contact black-icon-contact"
            aria-hidden="true"
          ></i>
          <span className="email-span">
            email: jirinaperinova@reactpojistovna.cz
          </span>
        </p>
      </div>
    </div>
  );
}
