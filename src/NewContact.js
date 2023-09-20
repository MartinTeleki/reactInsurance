import React from "react";
import "./newContact.css"; // Ponecháme import tvojí stávajícího CSS

export function NewContact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Kontakt na pojišťovnu</h2>
      <div className="contact-box">
        <p className="contact-paragraph">
          <span className="fl fontLabel">Jana Nováková</span>
          <i className="iconBox square-box fa fa-phone-square box-phone-contact"></i>
          <span className="phone-nummer-contact">+420 774 887 999</span>
          <i className="iconBox square-box  fa fa-envelope box-email-contact"></i>
          <span className="email-contact">jananovakova@reactpojistovna.cz</span>
        </p>
      </div>
      <div className="contact-box">
        <p className="contact-paragraph">
          <span className="fl fontLabel">Buka Zázračná</span>
          <i className="iconBox square-box fa fa-phone-square box-phone-contact"></i>
          <span className="phone-nummer-contact">+420 774 887 998</span>
          <i className="iconBox square-box fa fa-envelope box-email-contact"></i>
          <span className="email-contact">bukazazracna@reactpojistovna.cz</span>
        </p>
      </div>
      <div className="contact-box">
        <p className="contact-paragraph">
          <span className="fl fontLabel">Falka Věčná</span>
          <i className="iconBox square-box fa fa-phone-square box-phone-contact"></i>
          <span className="phone-nummer-contact">+420 774 887 997</span>
          <i className="iconBox square-box fa fa-envelope box-email-contact"></i>
          <span className="email-contact">falkavecna@reactpojistovna.cz</span>
        </p>
      </div>
      <div className="contact-box">
        <p className="contact-paragraph">
          <span className="fl fontLabel">Petra Konečná</span>
          <i className="iconBox square-box fa fa-phone-square box-phone-contact"></i>
          <span className="phone-nummer-contact">+420 774 887 996</span>
          <i className="iconBox square-box fa fa-envelope box-email-contact"></i>
          <span className="email-contact">petrakonecna@reactpojistovna.cz</span>
        </p>
      </div>
      <div className="contact-box">
        <p className="contact-paragraph">
          <span className="fl fontLabel">Jiřina Peřinová</span>
          <i className="iconBox square-box fa fa-phone-square box-phone-contact"></i>
          <span className="phone-nummer-contact">+420 774 887 996</span>
          <i className="iconBox square-box fa fa-envelope box-email-contact"></i>
          <span className="email-contact">
            jirinaperinova@reactpojistovna.cz
          </span>
        </p>
      </div>
    </div>
  );
}
