import "./message.css";
import Moment from "moment";

export default function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={require("../../assets/noAvatar.png")}
          alt=""
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{Moment(message.createdAt).fromNow()}</div>
    </div>
  );
}
