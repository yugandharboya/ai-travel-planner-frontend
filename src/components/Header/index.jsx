import "./index.css";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useContext } from "react";
import { AppContext } from "../../context/context";

const Header = () => {
  const navigate = useNavigate();

  const { isSidebarOpen, setIsSidebarOpen } = useContext(AppContext);

  const handleLogout = () => {
    navigate("/login");
    Cookies.remove("jwt_token");
  };
  return (
    <div className="header">
      <div className="header-content">
        <div className="desktop-view">
          <h1 className="logo">AI Travel Planner</h1>
          <nav className="nav-links">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
              <RxHamburgerMenu className="hamburger-menu" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
