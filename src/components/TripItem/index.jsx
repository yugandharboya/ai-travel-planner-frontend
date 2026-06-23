import "./index.css";
import { Link } from "react-router-dom";

const TripItem = ({ trip }) => {
  const { destination, duration_days, budget_tier, total_cost, status } = trip;

  return (
    <li className="trip-item">
      <div className="trip-item-header">
        <h2 className="destination">{destination}</h2>

        <span className="trip-status">{status}</span>
      </div>

      <div className="trip-details">
        <p>
          <span className="label">Duration:</span> {duration_days} Days
        </p>

        <p>
          <span className="label">Budget:</span> {budget_tier}
        </p>

        <p>
          <span className="label">Estimated Cost:</span> ${total_cost}
        </p>
      </div>
      <Link to={`/trips/${trip.id}`}>
        <button className="view-trip-btn" type="button">
          View Trip
        </button>
      </Link>
    </li>
  );
};

export default TripItem;
