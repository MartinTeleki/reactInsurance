import React, { useState, useEffect } from "react";
import NewRegister from "./register";
import NewEvidence from "./evidence";
import NewLogin from "./NewLogin";
import { NewContact, NewInformation } from "./NewInformation";

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

  const [currentPage, setCurrentPage] = useState("");
  const [evidenceList, setEvidenceList] = useState([]);
  const [numberOfContracts, setNumberOfContracts] = useState([]);
  const [registrationInfo, setRegistrationInfo] = useState(
    initialRegistrationInfo
  );

  const [userLogin, setUserLogin] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    controlPassword: "",
  });

  useEffect(() => {
    const storedEvidence = JSON.parse(localStorage.getItem("evidence")) || [];
    setEvidenceList(storedEvidence);
    setNumberOfContracts(storedEvidence);
  }, []);

  function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show-menu");
  }

  function changePage(page) {
    setCurrentPage(page);
  }

  function handleLogin(e) {
    e.preventDefault();
    if (evidenceList.email === loginData.email) {
      changePage("kontakt");
    } else {
      changePage("informace");
    }

    console.log(evidenceList.email, loginData.email);
  }

  return (
    <div>
      <NavBar toggleMenu={toggleMenu} changePage={changePage} />
      <Main
        currentPage={currentPage}
        registrationInfo={registrationInfo}
        setRegistrationInfo={setRegistrationInfo}
        initialRegistrationInfo={initialRegistrationInfo}
        evidenceList={evidenceList}
        setEvidenceList={setEvidenceList}
        numberOfContracts={numberOfContracts}
        setCurrentPage={setCurrentPage}
        changePage={changePage}
        setUserLogin={setUserLogin}
        userLogin={userLogin}
        loginData={loginData}
        setLoginData={setLoginData}
        handleLogin={handleLogin}
        isLoggedIn={isLoggedIn}
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
            <a href="#" onClick={() => changePage("login")}>
              Login
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

function Main({
  currentPage,
  registrationInfo,
  setRegistrationInfo,
  setEvidenceList,
  evidenceList,
  numberOfContracts,
  setCurrentPage,
  changePage,
  setUserLogin,
  userLogin,
  loginData,
  setLoginData,
  handleLogin,
  isLoggedIn,
}) {
  return (
    <div className="">
      {currentPage === "informace" && (
        <div>
          <NewInformation
            evidenceList={evidenceList}
            numberOfContracts={numberOfContracts}
          />
        </div>
      )}
      {currentPage === "register" && (
        <div className="register-margin">
          <NewRegister
            registrationInfo={registrationInfo}
            setRegistrationInfo={setRegistrationInfo}
            setCurrentPage={setCurrentPage}
            changePage={changePage}
          />
        </div>
      )}
      {currentPage === "evidence" && !isLoggedIn ? (
        <div>
          {alert("Prosím, přihlašte se")}
          {changePage("login")}
        </div>
      ) : (
        currentPage === "evidence" &&
        isLoggedIn && (
          <div className="evidence-margin">
            <NewEvidence
              evidenceList={evidenceList}
              setEvidenceList={setEvidenceList}
              userLogin={userLogin}
            />
          </div>
        )
      )}
      {currentPage === "login" && (
        <div className="login-margin">
          <NewLogin
            changePage={changePage}
            setUserLogin={setUserLogin}
            userLogin={userLogin}
            loginData={loginData}
            setLoginData={setLoginData}
            handleLogin={handleLogin}
            evidenceList={evidenceList}
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
