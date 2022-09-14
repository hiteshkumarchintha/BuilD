import "./topbar.css";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("user");
    dispatch({
      type: "USER_LOGOUT",
    });
    navigate("/userlogin");
  };
  return (
    <header className="header" id="header">
      <nav className="nav navcontainer">
        <div className="navlogo">
          <Link to="/" className="nav__link active-link">
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
              <Link to="/" className="nav__link active-link">
                Home
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/request" className="nav__link active-link">
                Request
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/myrequests" className="nav__link">
                My Requests
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/messenger" className="nav__link">
                Chat
              </Link>
            </li>
          </ul>
        </div>

        <button onClick={() => logOut()} className="navbutton button__header">
          Sign out
        </button>
      </nav>
    </header>
  );
}
