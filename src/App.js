import "./index.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />

      <Main />

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
    <div className="main">
      <div>
        <Register />
      </div>
      <div>
        <Evidence />
      </div>
    </div>
  );
}

function Register() {
  return (
    <div className="register-container">
      <div className="form-group">
        <label htmlFor="name">Jméno</label>
        <input type="text" id="name" />
      </div>
      <div className="form-group">
        <label htmlFor="surname">Příjmení</label>
        <input type="text" id="surname" />
      </div>
      <div className="form-group">
        <label htmlFor="password-register">Heslo</label>
        <input type="password" id="password-register" />
      </div>
      <div className="form-group">
        <label htmlFor="password-control-register">Heslo kontrola</label>
        <input type="password" id="password-control-register" />
      </div>
      <div className="form-group">
        <label htmlFor="age">Věk</label>
        <input type="number" id="age" />
      </div>
      <div className="form-group">
        <label htmlFor="telephon-number">Telefonní číslo</label>
        <input type="tel" id="telephon-number" />
      </div>
      <div className="form-group">
        <label htmlFor="insurance-number">Číslo pojištěnce</label>
        <input type="text" id="Insurance-number" />
      </div>
      <div className="form-group">
        <label htmlFor="kod-contract">Kód smlouvy</label>
        <input type="text" id="kod-contract" />
      </div>
    </div>
  );
}

function Evidence() {
  return (
    <div className="evidence-container">
      <h2>Jméno</h2>
      <p>Jan</p>
      <h2>Příjmení</h2>
      <p>Novák</p>

      <h2>Věk</h2>
      <p>26</p>
      <h2>Telefonní číslo</h2>
      <p>555 555 555</p>
      <h2>Číslo pojištěnce</h2>
      <p>5484484884</p>
      <h2>kód smlouvy</h2>
      <p>nfnfe49</p>
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
