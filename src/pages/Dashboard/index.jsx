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
      <div className="dashbord-header">
        <h1 className="dashboard-title">Welcome Back, Yugandhar!</h1>
        <button
          className="create-trip-btn"
          onClick={() => setOpenTripForm((prev) => !prev)}
        >
          {openTripForm ? "Close Form" : "+ Create New Trip"}
        </button>
      </div>

      {openTripForm && <CreateTripForm />}
      {generatedTrip && <TripDetailsCard tripData={generatedTrip} />}
    </div>
  );
};
export default Dashboard;
