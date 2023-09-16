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
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('show-menu');
}


function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <p>Pojišťovna React</p>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
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
      <Register />
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
        <label htmlFor="age">Věk</label>
        <input type="number" id="age" />
      </div>
      <div className="form-group">
        <label htmlFor="telephonNumber">Telefonní číslo</label>
        <input type="tel" id="telephonNumber" />
      </div>
      <div className="form-group">
        <label htmlFor="insuranceNumber">Číslo pojištěnce</label>
        <input type="text" id="InsuranceNumber" />
      </div>
      <div className="form-group">
        <label htmlFor="kodContract">Kód smlouvy</label>
        <input type="text" id="kodContract" />
      </div>
      <div className="form-group">
        <label htmlFor="anotherField1">Další pole 1</label>
        <input type="text" id="anotherField1" />
      </div>
      <div className="form-group">
        <label htmlFor="anotherField2">Další pole 2</label>
        <input type="text" id="anotherField2" />
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


