import "./guest.css";
import GuestFeed from "../../components/guest feed/GuestFeed";
import GuestTopbar from "../../components/guest topbar/GuestTopbar";

export default function Guest() {
  return (
    <>
      <GuestTopbar />
      <div className="homeContainer">
        <GuestFeed />
      </div>
    </>
  );
}
