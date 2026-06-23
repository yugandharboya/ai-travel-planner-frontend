import "./index.css";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { IoClose } from "react-icons/io5";
import SavedTrips from "../../pages/SavedTrips";

const SiderBar = () => {
  const navigate = useNavigate();
  const { isSidebarOpen, setIsSidebarOpen } = useContext(AppContext);

  return (
    <aside className="sidebar-overlay">
      <button
        className="sidebar-close-btn"
        onClick={() => setIsSidebarOpen((prev) => !prev)}
      >
        <IoClose />
      </button>
      <nav className="sidebar-top">
        {/* <Link className="nav-link">Completed Trips</Link> */}
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link className="nav-link" to="/trips/saved">
          Saved Trips
        </Link>
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
