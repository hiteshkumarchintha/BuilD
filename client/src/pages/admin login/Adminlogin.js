/* eslint-disable no-unused-vars */
import "./adminlogin.css";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { adminloginCall } from "../apiCalls";
import { AuthContext } from "../../context/AuthContext";

export default function Adminlogin() {
  const username = useRef();
  const password = useRef();
  const { user, isFetching, error, adminDispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    adminloginCall(
      { username: username.current.value, password: password.current.value },
      adminDispatch
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
          <form className="adminloginBox" onSubmit={handleClick}>
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
            <button className="loginButton" type="submit">
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
