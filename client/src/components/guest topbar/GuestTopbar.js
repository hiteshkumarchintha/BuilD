import "./guesttopbar.css";

import { Link } from "react-router-dom";

export default function GuestTopbar() {
  return (
    <header className="header" id="header">
      <nav className="nav navcontainer">
        <div className="navlogo">
          <img
            className="navimg"
            src={require("../../assets/Modified Logo.png")}
            alt="Logo"
          />
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/guest" className="nav__link active-link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/userregister" className="nav__link active-link">
                Register
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/userlogin" className="nav__link">
                Login
              </Link>
            </li>
            {/* <li className="nav__item">
              <Link to="/messenger" className="nav__link">
                Chat
              </Link>
            </li> */}
          </ul>
        </div>

        {/* <button onClick={() => logOut()} className="navbutton button__header">
          Sign out
        </button> */}
      </nav>
    </header>
  );
}
