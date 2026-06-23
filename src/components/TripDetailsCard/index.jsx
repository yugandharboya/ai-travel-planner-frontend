import "./index.css";
import { BASE_URL } from "../../constants/constants";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import Cookies from "js-cookie";

const TripDetailsCard = ({ tripData }) => {
  const { budget, hotels, packing, itinerary } = tripData;
  console.log("TripDetailsCard rendered");
  const {
    destination,
    durationDays,
    budgetTier,
    interests,
    setGeneratedTrip,
    generatedTrip,
  } = useContext(AppContext);
  console.log("generatedTrip:", generatedTrip);
  const handleSaveTrip = async () => {
    const token = Cookies.get("jwt_token");
    const tripDetails = {
      destination,
      durationDays,
      budgetTier,
      interests,
      tripPlan: tripData,
    };
    const url = `${BASE_URL}/trips`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(tripDetails),
    };

    try {
      const response = await fetch(url, options);
      console.log("response :", response);

      if (response.ok) {
        console.log(data.message);
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <div className="trip-details-container">
      <section className="budget-section">
        <h2 className="section-heading">Estimated Budget</h2>

        <div className="budget-card">
          <p className="budget-item">
            Flights: <span>${budget.flights}</span>
          </p>

          <p className="budget-item">
            Accommodation:
            <span>${budget.accommodation}</span>
          </p>

          <p className="budget-item">
            Food: <span>${budget.food}</span>
          </p>

          <p className="budget-item">
            Activities:
            <span>${budget.activities}</span>
          </p>

          <p className="budget-item total-budget">
            Total: <span>${budget.total}</span>
          </p>
        </div>
      </section>

      <section className="itinerary-section">
        <h2 className="section-heading">Day-by-Day Itinerary</h2>

        {itinerary.map((day) => (
          <div className="day-card" key={day.day}>
            <h3 className="day-heading">Day {day.day}</h3>

            <ul className="activities-list">
              {day.activities.map((activity) => (
                <li className="activity-item" key={activity.title}>
                  <h4>{activity.title}</h4>

                  <p>{activity.description}</p>

                  <p>{activity.time_of_day}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="hotels-section">
        <h2 className="section-heading">Hotel Suggestions</h2>

        <div className="hotels-list">
          {hotels.map((hotel) => (
            <div className="hotel-card" key={hotel.hotel_name}>
              <h4>{hotel.hotel_name}</h4>

              <p>{hotel.hotel_type}</p>

              <p>{hotel.rating} Stars</p>

              <p>${hotel.price_per_night}/night</p>
            </div>
          ))}
        </div>
      </section>

      <section className="packing-section">
        <h2 className="section-heading">Packing List</h2>

        <ul className="packing-list">
          {packing.map((item) => (
            <li className="packing-item" key={item.item_name}>
              <span>{item.item_name}</span>

              <span className="packing-category">{item.category}</span>
            </li>
          ))}
        </ul>
      </section>

      <button className="save-trip-btn" type="button" onClick={handleSaveTrip}>
        Save Trip
      </button>
      <button
        className="cancel-trip-btn"
        type="button"
        onClick={() => setGeneratedTrip({})}
      >
        Cancel
      </button>
    </div>
  );
};

export default TripDetailsCard;
