import React from "react";
import "./airportsearch.css";
import FlightDropdown from "./FlightDropdown";

const AirportToSearch = ({ updateSelectedToAirport, setShowToDropdown }) => {
  return (
    <div className="airportto-search-maindiv">
      <FlightDropdown
        setShowToDropdown={setShowToDropdown}
        updateSelectedToAirport={updateSelectedToAirport}
      />
    </div>
  );
};

export default AirportToSearch;
