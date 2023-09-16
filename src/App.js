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
        <input type="text" id="name" placeholder="Jan" />
      </div>
      <div className="form-group">
        <label htmlFor="surname">Příjmení</label>
        <input type="text" id="surname" placeholder="Novák" />
      </div>
      <div className="form-group">
        <label htmlFor="password-register">Heslo</label>
        <input type="password" id="password-register" placeholder="******" />
      </div>
      <div className="form-group">
        <label htmlFor="password-control-register">Heslo kontrola</label>
        <input
          type="password"
          id="password-control-register"
          placeholder="*******"
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Věk</label>
        <input type="number" id="age" placeholder="26" />
      </div>
      <div className="form-group">
        <label htmlFor="telephon-number">Telefonní číslo</label>
        <input type="tel" id="telephon-number" placeholder="555 774 777" />
      </div>
      <div className="form-group">
        <label htmlFor="insurance-number">Číslo pojištěnce</label>
        <input type="text" id="Insurance-number" placeholder="55151518" />
      </div>
      <div className="form-group">
        <label htmlFor="kod-contract">Kód smlouvy</label>
        <input type="text" id="kod-contract" placeholder="jnfjnkdfk" />
      </div>
    </div>
  );
}

function Evidence() {
  return (
    <div className="evidence-container">
      <div className="evidence-item">
        <h3>Jméno</h3>
        <p>Jan</p>
      </div>
      <div className="evidence-item">
        <h3>Příjmení</h3>
        <p>Novák</p>
      </div>
      <div className="evidence-item">
        <h3>Věk</h3>
        <p>26</p>
      </div>
      <div className="evidence-item">
        <h3>Telefonní číslo</h3>
        <p>555 555 555</p>
      </div>
      <div className="evidence-item">
        <h3>Číslo pojištěnce</h3>
        <p>5484484884</p>
      </div>
      <div className="evidence-item">
        <h3>kód smlouvy</h3>
        <p>nfnfe49</p>
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
