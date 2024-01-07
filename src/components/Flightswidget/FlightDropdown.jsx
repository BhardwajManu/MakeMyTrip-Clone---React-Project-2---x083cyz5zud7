import React, { useEffect } from "react";
import "./flightdropdown.css";
import { IoSearch } from "react-icons/io5";
import flightsearch from "../../assets/images/flightsearch.png";
import useFetch from "../../Hooks/useFetch";

const FlightDropdown = ({
  setShowFromDropdown,
  setShowToDropdown,
  updateSelectedToAirport,
  updateSelectedFromAirport,
}) => {
  const { data, get } = useFetch([]);

  useEffect(() => {
    get("/bookingportals/airport");
  }, []);
  // console.log(data);

  const handleAirportSelect = (e) => {
    const airport = e.target.closest("li").dataset;
    if (updateSelectedFromAirport) updateSelectedFromAirport(airport);
    if (updateSelectedToAirport) updateSelectedToAirport(airport);
    if (setShowFromDropdown) setShowFromDropdown(false);
    if (setShowToDropdown) setShowToDropdown(false);
    // setShowFromDropdown(false);
    // setShowToDropdown(false);
  };

  return (
    <div className="flightdropdown-maindiv">
      <div className="search-from-div">
        <IoSearch className="dd-from-search-icon" />
        <input type="text" placeholder="" className="dd-search-input" />
      </div>

      <div className="list-for-place-search-div">
        <ul className="from-search-list">
          {data?.data?.airports.map((airport, index) => (
            <li
              key={index}
              data-city={airport.city}
              data-country={airport.country}
              data-name={airport.name}
              data-iata_code={airport.iata_code}
              onClick={handleAirportSelect}
            >
              <img src={flightsearch} alt="flight" />
              <div className="airport-name-div">
                <h3>
                  {airport.city},{airport.country}
                </h3>
                <p>{airport.name}</p>
              </div>
              <p className="airport-code">{airport.iata_code}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FlightDropdown;
