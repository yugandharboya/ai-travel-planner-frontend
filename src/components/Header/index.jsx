import "./index.css";
import Cookies from "js-cookie";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useContext } from "react";
import { AppContext } from "../../context/context";

const Header = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const { isSidebarOpen, setIsSidebarOpen } = useContext(AppContext);

  const handleLogout = () => {
    navigate("/login");
    Cookies.remove("jwt_token");
  };
  return (
    <div className="header">
      <div className="desktop-view">
        <h1 className="logo">AI Travel Planner</h1>
        <nav className="nav-links">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <GiHamburgerMenu className="hamburger-menu" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
