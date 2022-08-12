import { useState, useEffect, useContext } from "react";
import Sentrequest from "../../components/sentrequest/Sentrequest";
import Topbar from "../../components/topbar/Topbar";
import "./submittedrequests.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Submittedrequests() {
  const [requests, setRequests] = useState([]);
  const { user } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    const fetchrequests = async () => {
      const res = await axios.get(
        "http://localhost:8800/api/request/fetchallrequests/" + user._id
      );
      setRequests(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchrequests();
  }, [user._id]);
  return (
    <>
      <Topbar />
      <div className="requestsContainer">
        {requests.map((r) => (
          <Sentrequest key={r._id} request={r} />
        ))}
      </div>
    </>
  );
}
