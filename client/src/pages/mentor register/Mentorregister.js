/* eslint-disable no-unused-vars */
import "./mentorregister.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
export default function Mentorregister() {
  const name = useRef();
  const username = useRef();
  const password = useRef();
  const email = useRef();
  const expertise = useRef();
  const ydesc = useRef();
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");

  const { user, isFetching, error, mentorDispatch } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    const mentor = {
      name: name.current.value,
      username: username.current.value,
      password: password.current.value,
      email: email.current.value,
      expertise: expertise.current.value,
      ydesc: ydesc.current.value,
    };
    try {
      const res = await axios.post(
        "http://localhost:8800/api/mentorAuth/register",
        mentor
      );
      setMsg(res.data);
      if (!(typeof res.data._id === "undefined")) {
        navigate("/mentorlogin");
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
              placeholder="Expertise"
              className="loginInput"
              ref={expertise}
              required
            />
            <input
              placeholder="Why here?"
              className="loginInput"
              ref={ydesc}
              required
            />
            <span className="errorMsg">{msg}</span>
            <button className="loginButton" type="submit">
              Register
            </button>
            <span className="loginForgot">
              --------------- OR ---------------
            </span>
            <button className="loginRegisterButton">
              <Link
                to="/mentorlogin"
                style={{ textDecoration: "none", color: "white" }}
              >
                Log Into Account
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
