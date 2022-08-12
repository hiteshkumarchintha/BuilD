/* eslint-disable no-unused-vars */
import "./receivedrequest.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Moment from "moment";

export default function Receivedrequest({ request }) {
  const [mentors, setMentors] = useState([]);
  const [value, setValue] = useState("");
  const handleSelect = (e) => {
    setValue(e.target.value);
  };

  const allocateMentor = async () => {
    const res = await axios.put(
      `http://localhost:8800/api/request/connect/${request.user}/${value}/${request._id}`
    );
  };

  const BuildConversation = async () => {
    const res = await axios.post(
      `http://localhost:8800/api/conversations/${request.user}/${value}`
    );
  };

  const handleClick = async (e) => {
    allocateMentor();
    BuildConversation();
    e.preventDefault();
  };

  useEffect(() => {
    const fetchmentors = async () => {
      const res = await axios.get(
        "http://localhost:8800/api/mentorAuth//fetchallmentors"
      );
      setMentors(res.data);
    };
    fetchmentors();
  }, []);
  return (
    <div className="cardcontainer">
      <div className="card text-center">
        <div className="card-header">Requested</div>
        <div className="card-body">
          <h5 className="card-title">{request.field}</h5>
          <p className="card-text">{request.desc}</p>
          <div className="input-group">
            <select
              className="form-select"
              id="inputGroupSelect04"
              aria-label="Example select with button addon"
              onChange={handleSelect}
              value={value}
            >
              <option selected>Allocate Mentor</option>
              {mentors.map((mentor, key) => {
                return (
                  <option key={key} value={mentor._id}>
                    {mentor.name}, {mentor.expertise}
                  </option>
                );
              })}
            </select>
            <button
              onClick={handleClick}
              className="btn btn-outline-secondary"
              type="button"
            >
              Allocate
            </button>
          </div>
        </div>
        <div className="card-footer text-muted">
          {Moment(request.createdAt).fromNow()}
        </div>
      </div>
    </div>
  );
}
