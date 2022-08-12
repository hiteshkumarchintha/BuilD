import "./requestform.css";
import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Requestform() {
  const [field, setField] = useState("");
  const [interest, setInterest] = useState("");
  const { user } = useContext(AuthContext);

  const handleField = (e) => {
    setField(e.target.value);
  };

  const handleInterest = (e) => {
    setInterest(e.target.value);
  };

  const handleSubmit = (e) => {
    axios
      .post(`http://localhost:8800/api/request/newrequest/${user._id}`, {
        field: field,
        desc: interest,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
    setField("");
    setInterest("");
    e.preventDefault();
  };
  return (
    <div className="bodycontainer">
      <div className="container contact-form">
        <div className="contact-image">
          <img
            src="https://image.ibb.co/kUagtU/rocket_contact.png"
            alt="rocket_contact"
          />
        </div>
        <form method="post">
          <h3>Request Form</h3>
          <div className="row">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  name="txtName"
                  className="form-control"
                  placeholder="Interested field? *"
                  value={field}
                  onChange={handleField}
                  style={{ height: "65px" }}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group">
                <textarea
                  name="txtMsg"
                  className="form-control"
                  placeholder="Elaborate your interest *"
                  style={{ width: "100%", height: "65px" }}
                  value={interest}
                  onChange={handleInterest}
                ></textarea>
              </div>
            </div>
            <div className="form-group">
              <input
                type="submit"
                name="btnSubmit"
                className="btnContact"
                value="Send Request"
                style={{ marginLeft: "210px", marginTop: "20px" }}
                onClick={handleSubmit}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
