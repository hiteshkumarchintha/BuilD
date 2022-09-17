/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { useContext, useRef, useState } from "react";
import { loginCall } from "../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Register() {
  const name = useRef();
  const username = useRef();
  const password = useRef();
  const email = useRef();
  const favBook = useRef();
  const movieQuote = useRef();
  const dob = useRef();
  const ydesc = useRef();
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    const user = {
      name: name.current.value,
      username: username.current.value,
      password: password.current.value,
      email: email.current.value,
      favBook: favBook.current.value,
      movieQuote: movieQuote.current.value,
      dob: dob.current.value,
      ydesc: ydesc.current.value,
    };
    try {
      const res = await axios.post(
        "http://localhost:8800/api/userAuth/register",
        user
      );

      setMsg(res.data);
      // console.log(typeof res.data._id === "undefined");
      if (!(typeof res.data._id === "undefined")) {
        navigate("/userlogin");
      }
    } catch (error) {
      console.log(error);
    }
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
              placeholder="Name"
              className="loginInput"
              ref={name}
              required
            />

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

            <input
              placeholder="Email"
              type="email"
              className="loginInput"
              ref={email}
              required
            />

            <input
              placeholder="Favorite Book"
              className="loginInput"
              ref={favBook}
              required
            />

            <input
              placeholder="Favorite Movie Quote"
              className="loginInput"
              ref={movieQuote}
              required
            />

            <input type="date" className="loginInput" ref={dob} required />

            <input
              placeholder="Why here?"
              className="loginInput"
              ref={ydesc}
              required
            />

            <span className="errorMsg">{msg}</span>

            <button className="loginButton" type="submit">
              {isFetching ? "...Loding" : "Register"}
            </button>
            <span className="loginForgot">
              --------------- OR ---------------
            </span>
            <button className="loginRegisterButton">
              <Link
                to="/userlogin"
                style={{ textDecoration: "none", color: "white" }}
              >
                Log Into Account
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
