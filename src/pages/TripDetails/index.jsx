import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

import SavedTripDetailsCard from "../../components/SavedTripDetailsCard";

import { BASE_URL } from "../../constants/constants";

import "./index.css";

const TripDetails = () => {
  const [tripData, setTripData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { tripId } = useParams();

  useEffect(() => {
    getTripDetails();
  }, []);

  const getTripDetails = async () => {
    const token = Cookies.get("jwt_token");

    const url = `${BASE_URL}/trips/${tripId}`;

    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      const response = await fetch(url, options);

      const data = await response.json();

      if (response.ok) {
        setTripData(data);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="trip-details-page">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="trip-details-page">
      {tripData && <SavedTripDetailsCard tripData={tripData} />}
    </div>
  );
};

export default TripDetails;
