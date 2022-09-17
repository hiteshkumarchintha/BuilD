/* eslint-disable no-unused-vars */
import "./login.css";
import { useContext, useRef } from "react";
import { loginCall } from "../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export default function Login() {
  const username = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();

    loginCall(
      { username: username.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
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
            <span className="errorMsg">{error}</span>
            <button className="loginButton" type="submit">
              {isFetching ? "...Loding" : "Log In"}
            </button>
            <span className="loginForgot">
              --------------- OR ---------------
            </span>

            <button className="loginRegisterButton">
              <Link
                to="/userregister"
                style={{ textDecoration: "none", color: "white" }}
              >
                Register for New Account
              </Link>
            </button>
            <button className="loginRegisterButton">
              {" "}
              <Link
                to="/mentorlogin"
                style={{ textDecoration: "none", color: "white" }}
              >
                Mentor Login{" "}
              </Link>
            </button>
            <button className="loginRegisterButton">
              <Link
                to="/mentorregister"
                style={{ textDecoration: "none", color: "white" }}
              >
                Become a Mentor
              </Link>
            </button>

            <button className="loginRegisterButton">
              <Link
                to="/guest"
                style={{ textDecoration: "none", color: "white" }}
              >
                Login as Guest
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
