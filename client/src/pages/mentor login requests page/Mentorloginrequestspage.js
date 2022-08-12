import Admintopbar from "../../components/admin topbar/Admintopbar";
import Mentorloginrequest from "../../components/mentor login request/Mentorloginrequest";
import "./mentorloginrequestspage.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Mentorloginrequestspage() {
  const [mentorloginrequests, setMentorloginrequests] = useState([]);

  useEffect(() => {
    const fetchrequests = async () => {
      const res = await axios.get(
        "http://localhost:8800/api/mentorAuth/mentorloginrequests"
      );
      setMentorloginrequests(res.data);
    };
    fetchrequests();
  }, []);
  return (
    <>
      <Admintopbar />
      <div className="mentorrequestsContainer">
        {mentorloginrequests.map((m) => (
          <Mentorloginrequest key={m._id} request={m} />
        ))}
      </div>
    </>
  );
}
