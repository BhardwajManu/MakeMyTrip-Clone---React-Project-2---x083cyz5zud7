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
import FlightDropdown from "./FlightDropdown";

const requestOptions = {
  method: "GET",
  headers: new Headers({
    projectId: "wpcgxnhc6j6i",
  }),
};

const FlightsWidgetMain = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedFaretype, setSelectedFaretype] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetch(
      "https://academics.newtonschool.co/api/v1/bookingportals/airport",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        setCityData(data.data.airports);
        console.log(data.data);
      })
      .catch((error) => {
        console.log("error fetching data");
      });
  }, []);

  const [showDepartureDate, setShowDepartureDate] = useState(false);
  const [selectedDepartureDate, setSelectedDepartureDate] = useState(null);

  // const handleChange = (e) => {
  //   setSelectedOption(e.target.value);
  // };

  // const handleFaretypeChange = (e) => {
  //   setSelectedFaretype(e.target.value);
  // };

  const handleDepartureIconClick = () => {
    setShowDepartureDate(!showDepartureDate);
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

  const handleCityDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flightwidget">
      <div className="flightwidgetmaindiv">
        <Container>
          <div className="fw-upperdiv">
            {/* <div>
              <ul>
                <li>
                  <input
                    type="radio"
                    value="oneway"
                    checked={selectedOption === "oneway"}
                    onChange={handleChange}
                  />
                  <label>One Way</label>
                </li>
                <li>
                  <input
                    type="radio"
                    value="roundtrip"
                    checked={selectedOption === "roundtrip"}
                    onChange={handleChange}
                  />
                  <label>Round Trip</label>
                </li>
                <li>
                  <input
                    type="radio"
                    value="multicity"
                    checked={selectedOption === "multicity"}
                    onChange={handleChange}
                  />
                  <label>Multi City</label>
                </li>
              </ul>
            </div> */}
            <p>Book International and Domestic Flights</p>
          </div>

          <div className="fw-middlediv">
            <div className="fw-fromdiv" onClick={handleCityDropdown}>
              <p>From</p>
              <p>Delhi</p>
              <p>DEL, Delhi Airport India</p>
            </div>
            {showDropdown && <FlightDropdown showDropdown={showDropdown} />}
            <div className="fw-todiv">
              <p>To</p>
              <p>Bengaluru</p>
              <p>BLR, Bengaluru International Airport</p>
            </div>

            <div className="fw-departurediv">
              <div className="departureheaddiv">
                <p className="departureheading">Departure</p>
                <MdKeyboardArrowDown
                  size={20}
                  onClick={handleDepartureIconClick}
                  color="#008cff"
                />
              </div>
              <p>
                <span id="dday"></span>
                <span id="dmonth"></span>
                <span id="dyear"></span>
              </p>
              <p id="ddayName"></p>
              {showDepartureDate && (
                <DatePicker
                  selected={selectedDepartureDate}
                  onChange={handleDepartureDate}
                  inline
                />
              )}
            </div>

            <div className="fw-travellersclassdiv">
              <p>Travellers & class</p>
              <p>
                <span>1</span> Traveller
              </p>
              <p>Economy/Premium Economy</p>
            </div>
          </div>

          <div className="fw-bottomdiv">
            {/* <div className="fw-faretypes">
              <p>Select A Fare Type:</p>
              <div>
                <input
                  type="radio"
                  value="Regular Fares"
                  checked={selectedFaretype === "Regular Fares"}
                  onChange={handleFaretypeChange}
                />
                <label>Regular Fares</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="Armed Forces Fares"
                  checked={selectedFaretype === "Armed Forces Fares"}
                  onChange={handleFaretypeChange}
                />
                <label>Armed Forces Fares</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="Student Fares"
                  checked={selectedFaretype === "Student Fares"}
                  onChange={handleFaretypeChange}
                />
                <label>Student Fares</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="Senior Citizen Fares"
                  checked={selectedFaretype === "Senior Citizen Fares"}
                  onChange={handleFaretypeChange}
                />
                <label>Senior Citizen Fares</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="Doctors & Nurses Fares"
                  checked={selectedFaretype === "Doctors & Nurses Fares"}
                  onChange={handleFaretypeChange}
                />
                <label>Doctors & Nurses Fares</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="Double Seat Fares"
                  checked={selectedFaretype === "Double Seat Fares"}
                  onChange={handleFaretypeChange}
                />
                <label>Double Seat Fares</label>
              </div>
            </div> */}
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
