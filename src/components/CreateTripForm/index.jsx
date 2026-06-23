import { useState, useContext } from "react";
import "./index.css";
import { BASE_URL } from "../../constants/constants";
import { AppContext } from "../../context/context";

const interest = [
  "Adventure",
  "Culture",
  "Nature",
  "Food",
  "Relaxation",
  "Nightlife",
  "History",
  "Art",
  "Shopping",
  "Sports",
  "Wildlife",
];
const CreateTripForm = () => {
  const {
    generatedTrip,
    setGeneratedTrip,
    destination,
    durationDays,
    budgetTier,
    interests,
    setDestination,
    setDurationDays,
    setBudgetTier,
    setInterests,
    setOpenTripForm,
  } = useContext(AppContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (interests.length === 0) {
      alert("Please select at least one interest.");
      return;
    }

    const tripData = {
      destination,
      durationDays: Number(durationDays),
      budgetTier,
      interests,
    };
    const url = `${BASE_URL}/api/gemini/generate`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tripData),
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
        setGeneratedTrip(data);
        setOpenTripForm(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-trip-container">
      <form className="create-trip-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input
            id="destination"
            type="text"
            value={destination}
            placeholder="Ex: Tokyo, Japan"
            onChange={(e) => setDestination(e.target.value)}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="days">Number of Days</label>
          <input
            id="days"
            type="number"
            placeholder="Ex: 5"
            value={durationDays}
            onChange={(e) => setDurationDays(parseInt(e.target.value))}
            required
          ></input>
        </div>
        <div className="form-group">
          <label htmlFor="budget">Budget Tier</label>
          <select
            id="budget"
            value={budgetTier}
            onChange={(e) => setBudgetTier(e.target.value)}
            required
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="interests">Interests</label>
          <div className="interests-container">
            {interest.map((item) => (
              <div key={item} className="interest-item">
                <input
                  type="checkbox"
                  id={`interest-${item}`}
                  value={item}
                  checked={interests.includes(item)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setInterests([...interests, item]);
                    } else {
                      setInterests(interests.filter((i) => i !== item));
                    }
                  }}
                />
                <label htmlFor={`interest-${item}`}>{item}</label>
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className="generate-trip-btn">
          Create Trip
        </button>
      </form>
    </div>
  );
};

export default CreateTripForm;
