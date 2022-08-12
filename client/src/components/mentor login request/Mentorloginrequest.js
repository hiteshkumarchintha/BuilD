/* eslint-disable no-unused-vars */
import "./mentorloginrequest.css";
import Moment from "moment";
import axios from "axios";

export default function Mentorloginrequest({ request }) {
  const authorizeMentor = async () => {
    const res = await axios.get(
      `http://localhost:8800/api/mentorAuth/authorizementor/${request._id}`
    );
  };

  const handleClick = async (e) => {
    authorizeMentor();
    e.preventDefault();
  };
  return (
    <div className="mentorcardcontainer">
      <div class="card text-center">
        <div class="card-header">Requested mentor details</div>
        <div class="card-body">
          <h5 class="card-title">Name : {request.name}</h5>
          <p class="card-text">Username : {request.username}</p>
          <p class="card-text">Email : {request.email}</p>
          <p class="card-text">Expertise : {request.expertise}</p>
          <p class="card-text">Why Here? : {request.ydesc}</p>
          <button
            onClick={handleClick}
            type="button"
            class="btn btn-outline-success"
          >
            Authorize Mentor
          </button>
        </div>
        <div class="card-footer text-muted">
          {Moment(request.createdAt).fromNow()}
        </div>
      </div>
    </div>
  );
}
