import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);
  const [generatedTrip, setGeneratedTrip] = useState(null);
  const [destination, setDestination] = useState("");
  const [durationDays, setDurationDays] = useState(1);
  const [budgetTier, setBudgetTier] = useState("low");
  const [interests, setInterests] = useState([]);
  const [savedTripsList, setSavedTripsList] = useState([]);
  const [openTripForm, setOpenTripForm] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen,
        setIsSidebarOpen,
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
        savedTripsList,
        setSavedTripsList,
        openTripForm,
        setOpenTripForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
