import "./guesttopbar.css";

import { Link } from "react-router-dom";

export default function GuestTopbar() {
  return (
    <header className="header" id="header">
      <nav className="nav navcontainer">
        <div className="navlogo">
          <Link to="/guest" className="nav__link active-link">
            <img
              className="navimg"
              src={require("../../assets/Modified Logo.png")}
              alt="Logo"
            />
          </Link>
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
          </ul>
        </div>
      </nav>
    </header>
  );
}
