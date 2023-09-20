import React, { useState, useEffect } from "react";
import NewRegister from "./register";
import NewEvidence from "./evidence";
import NewLogin from "./NewLogin";
import { NewInformation } from "./NewInformation";
import { NewContact } from "./NewContact";

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

  const [currentPage, setCurrentPage] = useState("contact");
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
  const [emailList, setEmailList] = useState([]);
  const [passwordList, setPasswordList] = useState([]);
  const [passwordControlList, setPasswordControlList] = useState([]);

  // console.log(evidenceList);
  // console.log(evidenceList[1]);
  // console.log(loginData.email);
  //console.log(loginData.email === evidenceList.email);

  //console.log(emailList, passwordList, passwordControlList);
  console.log(isLoggedIn);

  useEffect(() => {
    const storedEvidence =
      JSON.parse(localStorage.getItem("evidenceTEST")) || [];
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

    const evidenceList = JSON.parse(localStorage.getItem("evidenceTEST")) || [];

    const emails = [];
    const passwords = [];
    const passwordControls = [];

    evidenceList.forEach((item) => {
      if (item.email && item.email.trim() !== "") {
        emails.push(item.email);
      }
      if (item.password && item.password.trim() !== "") {
        passwords.push(item.password);
      }
      if (item.controlPassword && item.controlPassword.trim() !== "") {
        passwordControls.push(item.controlPassword);
      }
    });

    processLogin(emails, passwords, passwordControls);
  }

  function processLogin(emails, passwords, passwordControls) {
    const { email, password, controlPassword } = loginData;
    let isLoggedIn = false;

    for (let i = 0; i < emails.length; i++) {
      if (
        emails[i] === email &&
        passwords[i] === password &&
        passwordControls[i] === controlPassword
      ) {
        isLoggedIn = true;
      }
    }

    if (isLoggedIn) {
      alert("Úspěšně jste se přihlásili!");
      changePage("evidence");
      setIsLoggedIn(true);
    } else {
      changePage("login");
      alert("Nesprávný email, heslo nebo kontrolní heslo.");
    }
  }

  return (
    <div>
      <NavBar
        toggleMenu={toggleMenu}
        changePage={changePage}
        isLoggedIn={isLoggedIn}
      />
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
        emailList={emailList}
        setEmailList={setEmailList}
        passwordList={passwordList}
        setPasswordList={setPasswordList}
      />
      <Footer />
    </div>
  );
}

function NavBar({ toggleMenu, changePage, isLoggedIn }) {
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
          <NavInformation changePage={changePage} isLoggedIn={isLoggedIn} />

          <NavRegister changePage={changePage} isLoggedIn={isLoggedIn} />

          <NavLogin changePage={changePage} isLoggedIn={isLoggedIn} />

          <NavEvidence changePage={changePage} isLoggedIn={isLoggedIn} />

          <NavContact changePage={changePage} isLoggedIn={isLoggedIn} />
        </ul>
      </nav>
    </div>
  );
}

function NavInformation({ changePage, isLoggedIn }) {
  return (
    <div>
      {!isLoggedIn && (
        <li>
          <a href="#" alt="informace" onClick={() => changePage("informace")}>
            Informace
          </a>
        </li>
      )}
    </div>
  );
}
function NavRegister({ changePage, isLoggedIn }) {
  return (
    <div>
      {!isLoggedIn && (
        <li>
          <a href="#" alt="registrace" onClick={() => changePage("register")}>
            Registrace
          </a>
        </li>
      )}
    </div>
  );
}
function NavLogin({ changePage, isLoggedIn }) {
  return (
    <div>
      {!isLoggedIn && (
        <li>
          <a href="#" alt="login" onClick={() => changePage("login")}>
            Login
          </a>
        </li>
      )}
    </div>
  );
}
function NavEvidence({ changePage, isLoggedIn }) {
  return (
    <div>
      {isLoggedIn && (
        <li>
          <a href="#" alt="evidence" onClick={() => changePage("evidence")}>
            Evidence
          </a>
        </li>
      )}
    </div>
  );
}
function NavContact({ changePage, isLoggedIn }) {
  return (
    <div>
      <li>
        <a href="#" alt="kontakt" onClick={() => changePage("contact")}>
          Contact
        </a>
      </li>
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
  emailList,
  setEmailList,
  passwordList,
  setPasswordList,
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
      {/* pak dát vykřičník před isLoggedIn v prvnm řádku */}

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
            emailList={emailList}
            setEmailList={setEmailList}
            passwordList={passwordList}
            setPasswordList={setPasswordList}
          />
        </div>
      )}
      {isLoggedIn && currentPage === "evidence" && (
        <div className="evidence-margin">
          <NewEvidence
            evidenceList={evidenceList}
            setEvidenceList={setEvidenceList}
            userLogin={userLogin}
          />
        </div>
      )}

      {currentPage === "contact" && (
        <div className="contact-margin">
          <NewContact />
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
          Mgr. Martin Teleki
        </a>
      </p>
    </div>
  );
}
