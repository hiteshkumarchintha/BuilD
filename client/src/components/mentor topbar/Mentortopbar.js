import "./mentortopbar.css";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Mentortopbar() {
  const { mentorDispatch } = useContext(AuthContext);

  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("mentor");
    mentorDispatch({
      type: "MENTOR_LOGOUT",
    });
    navigate("/mentorlogin");
  };
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
              <Link to="/mentormessenger" className="nav__link active-link">
                Messenger
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
