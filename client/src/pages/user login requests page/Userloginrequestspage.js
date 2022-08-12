import Admintopbar from "../../components/admin topbar/Admintopbar";
import Userloginrequest from "../../components/user login request/Userloginrequest";
import "./userloginrequestspage.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Userloginrequestspage() {
  const [userloginrequests, setUserloginrequests] = useState([]);

  useEffect(() => {
    const fetchrequests = async () => {
      const res = await axios.get(
        "http://localhost:8800/api/userAuth/userloginrequests"
      );
      setUserloginrequests(res.data);
    };
    fetchrequests();
  }, []);
  return (
    <>
      <Admintopbar />
      <div className="userrequestsContainer">
        {userloginrequests.map((u) => (
          <Userloginrequest key={u._id} request={u} />
        ))}
      </div>
    </>
  );
}
