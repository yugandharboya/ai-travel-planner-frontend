import "./index.css";
import { BASE_URL } from "../../constants/constants";
import { useContext } from "react";
import { AppContext } from "../../context/context";
import Cookies from "js-cookie";

const SavedTripDetailsCard = ({ tripData }) => {
  const { interests, hotels, packing, itinerary } = tripData;
  const trip = tripData.trip;

  return (
    <div className="trip-details-container">
      <section className="trip-info-section">
        <h2>{`Trip: ${trip.destination}`}</h2>

        <p>
          {trip.duration_days} Days | {trip.budget_tier} Budget |{" "}
          {interests.map((interest) => interest.interest_name).join(",")}
        </p>
      </section>
      <section className="budget-section">
        <h2 className="section-heading">Estimated Budget Summary</h2>

        <div className="budget-card">
          <p className="budget-item">
            Flights: <span>${trip.flights_cost}</span>
          </p>

          <p className="budget-item">
            Accommodation:
            <span>${trip.accommodation_cost}</span>
          </p>

          <p className="budget-item">
            Food: <span>${trip.food_cost}</span>
          </p>

          <p className="budget-item">
            Activities:
            <span>${trip.activities_cost}</span>
          </p>

          <p className="budget-item total-budget">
            Total: <span>${trip.total_cost}</span>
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
    </div>
  );
};

export default SavedTripDetailsCard;
