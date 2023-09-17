import "./index.css";
import NewRegister from "./register";
import NewEvidence from "./evidence";

export default function App() {
  return (
    <div>
      <NavBar />

      <Main></Main>

      <Footer />
    </div>
  );
}

function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show-menu");
}

function NavBar() {
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
            <a href="#">Informace</a>
          </li>
          <li>
            <a href="#">Registrace</a>
          </li>
          <li>
            <a href="#">Evidence</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function Main() {
  return (
    <div className="">
      <div className="register-margin">
        <NewRegister />
      </div>
      <div className="evidence-margin">
        <NewEvidence />
      </div>
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
