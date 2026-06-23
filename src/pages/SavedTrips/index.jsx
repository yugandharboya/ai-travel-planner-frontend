import "./index.css";
import { AppContext } from "../../context/context";
import { useEffect, useContext } from "react";
import Cookies from "js-cookie";
import { BASE_URL } from "../../constants/constants";
import TripItem from "../../components/TripItem";

const SavedTrips = () => {
  const { savedTrips, setSavedTrips } = useContext(AppContext);

  const getSavedTrips = async () => {
    const token = Cookies.get("jwt_token");
    const url = `${BASE_URL}/trips/saved`;

    const options = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const response = await fetch(url, options);
      let data;
      try {
        data = await response.json();
      } catch (error) {
        data = {};
      }

      if (response.ok) {
        setSavedTrips(data);
      } else {
        console.log(data.message || "Failed to fetch saved trips");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    getSavedTrips();
  }, []);

  return (
    <div className="saved-trips-page">
      <ul className="trips-list">
        {savedTrips.map((trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </ul>
    </div>
  );
};

export default SavedTrips;
