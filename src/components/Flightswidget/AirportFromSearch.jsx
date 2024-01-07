import React from "react";
import FlightDropdown from "./FlightDropdown";
import "./airportsearch.css";

const AirportFromSearch = ({
  updateSelectedFromAirport,
  setShowFromDropdown,
}) => {
  return (
    <div className="airportfrom-search-maindiv">
      <FlightDropdown
        setShowFromDropdown={setShowFromDropdown}
        updateSelectedFromAirport={updateSelectedFromAirport}
      />
    </div>
  );
};

export default AirportFromSearch;
