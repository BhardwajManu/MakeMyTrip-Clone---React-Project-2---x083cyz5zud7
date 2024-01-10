import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./flightwidgetmain.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import Searchbutton from "../Searchbutton/Searchbutton";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import FwChooseOption from "./FwChooseOption";
import { MdKeyboardArrowDown } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import AirportFromSearch from "./AirportFromSearch";
import AirportToSearch from "./AirportToSearch";
import Flightpopup from "../widgetpopup/Flightpopup";

const FlightsWidgetMain = () => {
  const [showFightPopup, setShowFlightPopup] = useState(false);
  const [flightPopupData, setFlightPopupData] = useState();
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [showDepartureDate, setShowDepartureDate] = useState(false);
  const [selectedDepartureDate, setSelectedDepartureDate] = useState(null);
  const [fromAirportData, setFromAirportData] = useState({
    city: "Pune",
    iata_code: "PNQ",
    name: "Pune Airport",
  });
  const [toAirportData, setToAirportData] = useState({
    city: "Jaipur",
    iata_code: "JAI",
    name: "Jaipur International Airport",
  });

  const [locations, setLocations] = useState({
    from: "Pune",
    to: "Jaipur",
    airportB: "Pune Airport",
    airportA: "Jaipur International Airport",
  });

  const handleSwap = () => {
    setLocations({
      from: locations.to,
      to: locations.from,
      airportA: locations.airportB,
      airportB: locations.airportA,
    });
  };

  const handlePopupClick = () => {
    setShowFlightPopup(!showFightPopup);
  };
  const updateFlightPopupData = () => {
    setFlightPopupData(flightPopupData);
  };

  const updateSelectedFromAirport = (fromairportdetails) => {
    setFromAirportData(fromairportdetails);
  };
  const updateSelectedToAirport = (toairportdetails) => {
    setToAirportData(toairportdetails);
  };

  const handleFromCityDropdown = () => {
    setShowFromDropdown(!showFromDropdown);
  };
  const handleToCityDropdown = () => {
    setShowToDropdown(!showToDropdown);
  };

  const handleDepartureIconClick = (e) => {
    setShowDepartureDate(!showDepartureDate);
    e.stopPropagation();
  };
  const handleDepartureDate = (date) => {
    setSelectedDepartureDate(date);
    setShowDepartureDate(false);
    const dday = date.getDate();
    const dmonth = date.toLocaleString("default", { month: "short" });
    const dyear = date.getFullYear().toString().slice(-2);
    const ddayName = date.toLocaleDateString("default", { weekday: "long" });
    document.getElementById("dday").innerText = dday;
    document.getElementById("dmonth").innerText = dmonth;
    document.getElementById("dyear").innerText = dyear;
    document.getElementById("ddayName").innerText = ddayName;
  };

  return (
    <div className="flightwidget">
      <div className="flightwidgetmaindiv">
        <Container>
          <div className="fw-upperdiv">
            <p>Book International and Domestic Flights</p>
          </div>

          <div className="fw-middlediv">
            <div className="fw-fromdiv" onClick={handleFromCityDropdown}>
              <p>From</p>
              <p>{locations.from}</p>
              <p>
                {locations.from}, {locations.airportB}
              </p>
            </div>
            {showFromDropdown && (
              <OutsideClickHandler
                onOutsideClick={() => {
                  setShowFromDropdown(false);
                }}
              >
                <AirportFromSearch
                  updateSelectedFromAirport={updateSelectedFromAirport}
                  setShowFromDropdown={setShowFromDropdown}
                />
              </OutsideClickHandler>
            )}
            <span className="fltSwipCircle" onClick={handleSwap}>
              <span className="flightsSprite"></span>
            </span>
            <div className="fw-todiv" onClick={handleToCityDropdown}>
              <p>To</p>
              <p>{locations.to}</p>
              <p>
                {locations.to}, {locations.airportA}
              </p>
            </div>
            {showToDropdown && (
              <OutsideClickHandler
                onOutsideClick={() => setShowToDropdown(false)}
              >
                <AirportToSearch
                  updateSelectedToAirport={updateSelectedToAirport}
                  setShowToDropdown={setShowToDropdown}
                />
              </OutsideClickHandler>
            )}

            <div className="fw-departurediv" onClick={handleDepartureIconClick}>
              <div className="departureheaddiv">
                <p className="departureheading">Departure</p>
                <MdKeyboardArrowDown size={20} color="#008cff" />
              </div>
              <p>
                <span id="dday"></span>
                <span id="dmonth"></span>
                <span id="dyear"></span>
              </p>
              <p id="ddayName"></p>
              {showDepartureDate && (
                <OutsideClickHandler
                  onOutsideClick={() => setShowDepartureDate(false)}
                >
                  <DatePicker
                    selected={selectedDepartureDate}
                    onChange={handleDepartureDate}
                    inline
                  />
                </OutsideClickHandler>
              )}
            </div>

            <div className="fw-travellersclassdiv" onClick={handlePopupClick}>
              <p className="flex">
                Travellers & class
                <MdKeyboardArrowDown size={20} color="#008cff" />
              </p>
              <p>
                <span>1</span> Traveller
              </p>
              <p>Economy/Premium Economy</p>
            </div>
            {showFightPopup && (
              <OutsideClickHandler
                onOutsideClick={() => setShowFlightPopup(false)}
              >
                <Flightpopup
                  updateFlightPopupData={updateFlightPopupData}
                  setShowFightPopup={setShowFlightPopup}
                />
              </OutsideClickHandler>
            )}
          </div>

          <div className="fw-bottomdiv">
            <div className="fw-trendingsearches">
              <p>Trending Searches:</p>
              <p>
                <span>Chennai</span>
                <FaLongArrowAltRight color="#0084ff" />
                <span>Dubai</span>
              </p>
              <p>
                <span>Delhi</span>
                <FaLongArrowAltRight color="#0084ff" />
                <span>Kolkata</span>
              </p>
            </div>
          </div>
          <Link to="/flights">
            <Searchbutton />
          </Link>
          <div className="fw-exploremore">
            <MdKeyboardDoubleArrowDown size={20} />
            <p>Explore More</p>
            <MdKeyboardDoubleArrowDown size={20} />
          </div>
          <FwChooseOption />
        </Container>
      </div>
    </div>
  );
};

export default FlightsWidgetMain;
