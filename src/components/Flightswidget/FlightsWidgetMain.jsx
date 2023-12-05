import { Container } from "@mui/material";
import React, { useState } from "react";
import "./flightwidgetmain.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import Searchbutton from "../Searchbutton/Searchbutton";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import FwChooseOption from "./FwChooseOption";

const FlightsWidgetMain = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedFaretype, setSelectedFaretype] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const handleFaretypeChange = (e) => {
    setSelectedFaretype(e.target.value);
  };

  return (
    <div className="flightwidget">
      <div className="flightwidgetmaindiv">
        <Container>
          <div className="fw-upperdiv">
            <div>
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
            </div>
            <p>Book International and Domestic Flights</p>
          </div>

          <div className="fw-middlediv">
            <div className="fw-fromdiv">
              <p>From</p>
              <p>Delhi</p>
              <p>DEL, Delhi Airport India</p>
            </div>
            <div className="fw-todiv">
              <p>To</p>
              <p>Bengaluru</p>
              <p>BLR, Bengaluru International Airport</p>
            </div>
            <div className="fw-departurediv">
              <p>Departure</p>
              <p>
                <span>5</span> Dec23
              </p>
              <p>Tuesday</p>
            </div>
            <div className="fw-returndiv">
              <p>Return</p>
              <p>
                <span>14</span> Dec23
              </p>
              <p>Thursday</p>
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
            <div className="fw-faretypes">
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
            </div>
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
          <Searchbutton />
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
