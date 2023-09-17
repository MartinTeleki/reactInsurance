import "./index.css";
import NewRegister from "./register";

export default function App() {
  return (
    <div className="">
      <NavBar />

      <Register />

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
        <NewRegister />
      </div>
      <div>
        <Evidence />
      </div>
    </div>
  );
}

function Register() {
  return (
    // <div className="register-container">
    //   <div className="form-group">
    //     <label htmlFor="name">Jméno</label>
    //     <input type="text" id="name" placeholder="Jan" />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="surname">Příjmení</label>
    //     <input type="text" id="surname" placeholder="Novák" />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="password-register">Heslo</label>
    //     <input type="password" id="password-register" placeholder="******" />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="password-control-register">Heslo kontrola</label>
    //     <input
    //       type="password"
    //       id="password-control-register"
    //       placeholder="*******"
    //     />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="age">Věk</label>
    //     <input type="number" id="age" placeholder="26" />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="telephon-number">Telefonní číslo</label>
    //     <input type="tel" id="telephon-number" placeholder="555 774 777" />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="insurance-number">Číslo pojištěnce</label>
    //     <input type="text" id="Insurance-number" placeholder="55151518" />
    //   </div>
    //   <div className="form-group">
    //     <label htmlFor="kod-contract">Kód smlouvy</label>
    //     <input type="text" id="kod-contract" placeholder="jnfjnkdfk" />
    //   </div>
    // </div>

    <div className="container">
      <form method="post" autoComplete="on">
        {/* First name */}
        <div className="box">
          <label htmlFor="firstName" className="fl fontLabel">
            {" "}
            First Name:{" "}
          </label>
          <div className="new iconBox">
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              autoFocus="on"
              required
              className="textBox"
            />
          </div>
          <div className="clr"></div>
        </div>
        {/* First name */}

        {/* Second name */}
        <div className="box">
          <label htmlFor="secondName" className="fl fontLabel">
            {" "}
            Second Name:{" "}
          </label>
          <div className="fl iconBox">
            <i className="fa fa-user" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="text"
              required
              name="secondName"
              placeholder="Last Name"
              className="textBox"
            />
          </div>
          <div className="clr"></div>
        </div>
        {/* Second name */}

        {/* Phone No. */}
        <div className="box">
          <label htmlFor="phone" className="fl fontLabel">
            {" "}
            Phone No.:{" "}
          </label>
          <div className="fl iconBox">
            <i className="fa fa-phone-square" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="text"
              required
              name="phoneNo"
              maxLength="10"
              placeholder="Phone No."
              className="textBox"
            />
          </div>
          <div className="clr"></div>
        </div>
        {/* Phone No. */}

        {/* Email ID */}
        <div className="box">
          <label htmlFor="email" className="fl fontLabel">
            {" "}
            Email ID:{" "}
          </label>
          <div className="fl iconBox">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="email"
              required
              name="email"
              placeholder="Email Id"
              className="textBox"
            />
          </div>
          <div className="clr"></div>
        </div>
        {/* Email ID */}

        {/* Password */}
        <div className="box">
          <label htmlFor="password" className="fl fontLabel">
            {" "}
            Password{" "}
          </label>
          <div className="fl iconBox">
            <i className="fa fa-key" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="password"
              required
              name="password"
              placeholder="Password"
              className="textBox"
            />
          </div>
          <div className="clr"></div>
        </div>
        {/* Password */}

        {/* Gender */}
        <div className="box radio">
          <label htmlFor="gender" className="fl fontLabel">
            {" "}
            Gender:{" "}
          </label>
          <input type="radio" name="Gender" value="Male" required /> Male &nbsp;
          &nbsp; &nbsp; &nbsp;
          <input type="radio" name="Gender" value="Female" required /> Female
        </div>
        {/* Gender */}

        {/* Terms and Conditions */}
        <div className="box terms">
          <input type="checkbox" name="Terms" required /> &nbsp; I accept the
          terms and conditions
        </div>
        {/* Terms and Conditions */}

        {/* Submit Button */}
        <div className="box" style={{ background: "#2d3e3f" }}>
          <input
            type="submit"
            name="Submit"
            className="submit"
            value="SUBMIT"
          />
        </div>
        {/* Submit Button */}
      </form>
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
