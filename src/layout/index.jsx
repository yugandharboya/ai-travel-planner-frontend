import "./index.css";
import Header from "../components/Header";
import SiderBar from "../components/SiderBar";
import { useContext } from "react";
import { AppContext } from "../context/context";
const Layout = ({ children }) => {
  const { isSidebarOpen } = useContext(AppContext);
  return (
    <div className="app-layout">
      <Header />
      <div className="layout-wrapper">
        {isSidebarOpen && <SiderBar />}
        <main className="main-content-layout">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
