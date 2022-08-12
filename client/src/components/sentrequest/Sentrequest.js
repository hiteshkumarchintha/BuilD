import "./sentrequest.css";
import Moment from "moment";

export default function Sentrequest({ request }) {
  const dateTimeAgo = Moment(request.createdAt).fromNow();
  return (
    <div className="cardcontainer">
      <div class="card text-center">
        <div class="card-header">Requested</div>
        <div class="card-body">
          <h5 class="card-title">{request.field}</h5>
          <p class="card-text">{request.desc}</p>
        </div>
        <div class="card-footer text-muted">{dateTimeAgo}</div>
      </div>
    </div>
  );
}
