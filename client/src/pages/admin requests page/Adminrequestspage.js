import Admintopbar from "../../components/admin topbar/Admintopbar";
import Receivedrequest from "../../components/received request/Receivedrequest";
import "./adminrequestspage.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Adminrequestspage() {
  const [adminrequests, setAdminrequests] = useState([]);

  useEffect(() => {
    const fetchrequests = async () => {
      const res = await axios.get(
        "http://localhost:8800/api/request/fetchallrequests"
      );
      setAdminrequests(res.data);
    };
    fetchrequests();
  }, []);
  return (
    <>
      <Admintopbar />
      <div className="adminrequestsContainer">
        {adminrequests.map((a) => (
          <Receivedrequest key={a._id} request={a} />
        ))}
      </div>
    </>
  );
}
