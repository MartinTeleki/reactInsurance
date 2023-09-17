import "./newRegister.css";

export default function NewRegister() {
  return (
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
          <input
            type="radio"
            name="Gender"
            value="Other"
            required
            style={{ marginLeft: "40px" }}
          />{" "}
          Other
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
