import React, { useState } from "react";
import "./trainswidget.css";
import { Container } from "@mui/material";
import Searchbutton from "../Searchbutton/Searchbutton";
import { MdKeyboardArrowDown, MdKeyboardDoubleArrowDown } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";

const TrainsWidget = () => {
  const [selectTrainOption, setselectTrainOption] = useState("");
  const [showTravelDate, setShowTravelDate] = useState(false);
  const [selectedTravelDate, setSelectedTravelDate] = useState(null);

  const handleTravelIconClick = () => {
    setShowTravelDate(!showTravelDate);
  };
  const handleTravelDate = (date) => {
    setSelectedTravelDate(date);
    setShowTravelDate(false);
    const tday = date.getDate();
    const tmonth = date.toLocaleString("default", { month: "short" });
    const tyear = date.getFullYear().toString().slice(-2);
    const tdayName = date.toLocaleDateString("default", { weekday: "long" });
    document.getElementById("tday").innerText = tday;
    document.getElementById("tmonth").innerText = tmonth;
    document.getElementById("tyear").innerText = tyear;
    document.getElementById("tdayName").innerText = tdayName;
  };
  return (
    <>
      <div className="trainswidgetmaindiv">
        <Container>
          <div className="tw-upperdiv">
            <p> Train Ticket Booking IRCTC Authorized e-ticketing</p>
          </div>
          <div className="tw-bottomdiv">
            <div className="tw-from">
              <p>From</p>
              <p>New Delhi</p>
              <p>NDLS, New Delhi Railway Station</p>
            </div>
            <div className="tw-to">
              <p>To</p>
              <p>Kanpur</p>
              <p>CNB, Kanpur Central</p>
            </div>
            <div className="tw-traveldate">
              <div className="traveldateheaddiv">
                <p>Travel Date</p>
                <MdKeyboardArrowDown
                  size={20}
                  onClick={handleTravelIconClick}
                  color="#008CFF"
                />
              </div>
              {showTravelDate && (
                <OutsideClickHandler
                  onOutsideClick={() => setShowTravelDate(false)}
                >
                  <DatePicker
                    selected={selectedTravelDate}
                    onChange={handleTravelDate}
                    inline
                  />
                </OutsideClickHandler>
              )}
              <p>
                <span id="tday"></span>
                <span id="tmonth"></span>
                <span id="tyear"></span>
              </p>
              <p id="tdayName"></p>
            </div>
            <div className="tw-class">
              <p>class</p>
              <p>ALL</p>
              <p>All class</p>
            </div>
          </div>
          <Link to="/trains">
            <div className="tw-searchbtndiv">
              <Searchbutton />
              <div className="fw-exploremore">
                <MdKeyboardDoubleArrowDown size={20} />
                <p>Explore More</p>
                <MdKeyboardDoubleArrowDown size={20} />
              </div>
            </div>
          </Link>
        </Container>
      </div>
    </>
  );
};

export default TrainsWidget;
