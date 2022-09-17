/* eslint-disable no-unused-vars */
import "./mentorlogin.css";
import { Link } from "react-router-dom";

import { useContext, useRef } from "react";
import { mentorloginCall } from "../apiCalls";
import { AuthContext } from "../../context/AuthContext";

export default function Mentorlogin() {
  const username = useRef();
  const password = useRef();
  const { mentorError, mentorDispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    mentorloginCall(
      { username: username.current.value, password: password.current.value },
      mentorDispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          {/* <h3 className="loginLogo">BuilD</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span> */}
          <div className="loginlogo">
            <img
              className="loginimg"
              src={require("../../assets/Modified Logo.png")}
              alt="Logo"
            />
          </div>
          <span className="loginDesc">This is way of LIFE</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              className="loginInput"
              ref={username}
              required
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              ref={password}
              required
            />
            <span className="errorMsg">{mentorError}</span>
            <button className="loginButton" type="submit">
              Mentor Login
            </button>
            <span className="loginForgot">
              --------------- OR ---------------
            </span>
            <button className="loginRegisterButton">
              <Link
                to="/mentorregister"
                style={{ textDecoration: "none", color: "white" }}
              >
                Become a Mentor
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
