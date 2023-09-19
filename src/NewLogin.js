import React from "react";
import "./newLogin.css";

export default function NewLogin({
  changePage,
  loginData,
  setLoginData,
  handleLogin,
  evidenceList,
  emailList,
  setEmailList,
  passwordList,
  setPasswordList,
}) {
  //console.log(emailList);
  return (
    <div className="container">
      <form method="post" autoComplete="on">
        {/* First name */}
        <div className="box">
          <div className="register-title">
            <h2>Login</h2>
          </div>
          <label htmlFor="firstName" className="fl fontLabel">
            {" "}
            Email:{" "}
          </label>
          <div className="new iconBox">
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="email"
              name="email"
              placeholder="jannovak@seznam.cz"
              autoFocus="on"
              required
              className="textBox"
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="clr"></div>
        </div>
        {/* First name */}
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
              placeholder="*******"
              className="textBox"
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  password: e.target.value,
                })
              }
            />
          </div>
          <div className="clr"></div>
        </div>
        {/* Password */}
        {/* Repassword */}
        <div className="box">
          <label htmlFor="controlPassword" className="fl fontLabel">
            {" "}
            Re-Password:{" "}
          </label>
          <div className="fl iconBox">
            <i className="fa fa-key" aria-hidden="true"></i>
          </div>
          <div className="fr">
            <input
              type="password"
              required
              name="controlPassword"
              placeholder="*******"
              className="textBox"
              onChange={(e) =>
                setLoginData({
                  ...loginData,
                  controlPassword: e.target.value,
                })
              }
            />
          </div>
          <div className="clr"></div>
        </div>
        {/* Repassword */}

        <div className="swap-register">
          <p style={{ color: "#fff" }}>
            Dont you have an acc yet?{" "}
            <span onClick={() => changePage("register")}>
              <strong
                className="btn-register-swap"
                style={{ color: "#2496ff" }}
              >
                Register
              </strong>
            </span>
          </p>
        </div>

        {/* Submit Button */}
        <div className="box" style={{ background: "#2d3e3f" }}>
          <input
            type="submit"
            name="Submit"
            className="submit"
            value="Login"
            onClick={handleLogin}
          />
        </div>
        {/* Submit Button */}
      </form>
    </div>
  );
}
