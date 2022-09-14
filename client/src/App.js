import Adminlogin from "./pages/admin login/Adminlogin";
import Adminrequestspage from "./pages/admin requests page/Adminrequestspage";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Mentorloginrequestspage from "./pages/mentor login requests page/Mentorloginrequestspage";
import Mentorlogin from "./pages/mentor login/Mentorlogin";
import Mentorregister from "./pages/mentor register/Mentorregister";
import Register from "./pages/register/Register";
import RequestPage from "./pages/request page/RequestPage";
import Submittedrequests from "./pages/submitted requests page/Submittedrequests";
import Userloginrequestspage from "./pages/user login requests page/Userloginrequestspage";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import MentorHome from "./components/MentorHome";
import Messenger from "./pages/messenger/Messenger";
import MentorMessenger from "./pages/mentor messenger/MentorMessenger";
import Guest from "./pages/guest page/Guest";

function App() {
  const { user, mentor, admin } = useContext(AuthContext);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* User Pages */}
          <Route path="/" element={user ? <Home /> : <Register />} />
          <Route path="/guest" element={<Guest />} />
          <Route
            path="/userlogin"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/userregister"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route
            path="/request"
            element={user ? <RequestPage /> : <Navigate to="/" />}
          />
          <Route
            path="/myrequests"
            element={user ? <Submittedrequests /> : <Navigate to="/" />}
          />

          {/* Mentor Pages */}
          {/* <Route path="/mentorhome" element={<MentorHome />} /> */}
          <Route
            path="/mentorhome"
            element={mentor ? <MentorHome /> : <Mentorregister />}
          />

          <Route
            path="/mentorlogin"
            element={
              mentor ? <Navigate to="/mentormessenger" /> : <Mentorlogin />
            }
          />
          <Route
            path="/mentorregister"
            element={
              mentor ? <Navigate to="/mentormessenger" /> : <Mentorregister />
            }
          />

          {/* Admin Pages */}
          <Route
            path="/adminlogin"
            element={admin ? <Navigate to="/adminrequests" /> : <Adminlogin />}
          />
          <Route
            path="/adminrequests"
            element={admin ? <Adminrequestspage /> : <Adminlogin />}
          />
          <Route
            path="/userloginrequests"
            element={admin ? <Userloginrequestspage /> : <Adminlogin />}
          />
          <Route
            path="/mentorloginrequests"
            element={admin ? <Mentorloginrequestspage /> : <Adminlogin />}
          />

          <Route
            path="/messenger"
            element={user ? <Messenger /> : <Navigate to="/" />}
          />

          <Route
            path="/mentormessenger"
            element={
              mentor ? <MentorMessenger /> : <Navigate to="/mentorregister" />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
