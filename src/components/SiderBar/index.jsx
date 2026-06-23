import "./index.css";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import SavedTrips from "../../pages/SavedTrips";

const SiderBar = () => {
  const navigate = useNavigate();
  const { isSidebarOpen } = useContext(AppContext);

  return (
    <aside className={`sidebar-overlay ${isSidebarOpen ? "open" : ""}`}>
      <nav className="sidebar-top">
        <Link className="nav-link">Completed Trips</Link>
        <Link className="nav-link" to="/trips/saved">
          Saved Trips
        </Link>
        <Link className="nav-link">Create Trip</Link>
      </nav>
      <div className="sidebar-bottom">
        <button
          className="sidebar-logout-btn"
          onClick={() => {
            navigate("/login");
            Cookies.remove("jwt_token");
          }}
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default SiderBar;
