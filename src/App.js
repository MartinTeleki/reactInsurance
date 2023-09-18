import "./index.css";
import React, { useState } from "react";
import NewRegister from "./register";
import NewEvidence from "./evidence";

export default function App() {
  const initialRegistrationInfo = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    age: "",
    password: "",
    controlPassword: "",
    insuranceNumber: "",
    insuranceCode: "",
    gender: "",
    termsAccepted: false,
  };
  const [currentPage, setCurrentPage] = useState("register");
  const [registrationInfo, setRegistrationInfo] = useState(
    initialRegistrationInfo
  );

  function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show-menu");
  }

  function changePage(page) {
    setCurrentPage(page);
  }

  return (
    <div>
      <NavBar toggleMenu={toggleMenu} changePage={changePage} />
      <Main
        currentPage={currentPage}
        registrationInfo={registrationInfo}
        setRegistrationInfo={setRegistrationInfo}
        initialRegistrationInfo={initialRegistrationInfo}
      />
      <Footer />
    </div>
  );
}

function NavBar({ toggleMenu, changePage }) {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <p>Pojišťovna React</p>
        </div>
        <div className="bar-container" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className="nav-links" id="nav-links">
          <li>
            <a href="#" onClick={() => changePage("informace")}>
              Informace
            </a>
          </li>
          <li>
            <a href="#" onClick={() => changePage("register")}>
              Registrace
            </a>
          </li>
          <li>
            <a href="#" onClick={() => changePage("evidence")}>
              Evidence
            </a>
          </li>
          <li>
            <a href="#" onClick={() => changePage("kontakt")}>
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function Main({ currentPage, registrationInfo, setRegistrationInfo }) {
  return (
    <div className="">
      {currentPage === "register" && (
        <div className="register-margin">
          <NewRegister
            registrationInfo={registrationInfo}
            setRegistrationInfo={setRegistrationInfo}
          />
        </div>
      )}
      {currentPage === "evidence" && (
        <div className="evidence-margin">
          <NewEvidence
            registrationInfo={registrationInfo}
            setRegistrationInfo={setRegistrationInfo}
          />
        </div>
      )}
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>
        &copy; Created by{" "}
        <a href="#" className="footer-link">
          Mgr.MartinTeleki
        </a>
      </p>
    </div>
  );
}
