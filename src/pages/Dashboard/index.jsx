import "./index.css";
import Header from "../../components/Header";
import SiderBar from "../../components/SiderBar";
import { useContext, useState } from "react";
import { AppContext } from "../../context/context";
import CreateTripForm from "../../components/CreateTripForm";
import TripDetailsCard from "../../components/TripDetailsCard";

const Dashboard = () => {
  const {
    isSidebarOpen,
    generatedTrip,
    setGeneratedTrip,
    destination,
    setDestination,
    durationDays,
    setDurationDays,
    budgetTier,
    setBudgetTier,
    interests,
    setInterests,
    openTripForm,
    setOpenTripForm,
  } = useContext(AppContext);

  return (
    <div className="dashboard-page">
      {/* <div className="dashboard-wrapper"> */}
      <div className="dashboard-content">
        <h1 className="dashboard-title">Welcome Back, Yugandhar!</h1>
        <button
          className="create-trip-btn"
          onClick={() => setOpenTripForm((prev) => !prev)}
        >
          {openTripForm ? "Close Form" : "+ Create New Trip"}
        </button>
        {openTripForm && <CreateTripForm />}
        {generatedTrip && <TripDetailsCard tripData={generatedTrip} />}
      </div>
      {/* </div> */}
    </div>
  );
};
export default Dashboard;
