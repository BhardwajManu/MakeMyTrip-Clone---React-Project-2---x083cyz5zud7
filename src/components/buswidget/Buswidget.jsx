import React, { useState } from "react";
import "./buswidget.css";
import { Container } from "@mui/material";
import { MdKeyboardArrowDown, MdKeyboardDoubleArrowDown } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Searchbutton from "../Searchbutton/Searchbutton";

const Buswidget = () => {
  const [showDate, setShowDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleTravelDateonClick = () => {
    setShowDate(!showDate);
  };
  const handleTravelDate = (date) => {
    setSelectedDate(date);
    setShowDate(false);

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
      <div className="buseswidgetmaindiv">
        <Container>
          <div className="bw-upperdiv">
            <p>Bus Ticket Booking.Travelling with a group? Hire a bus.</p>
          </div>
          <div className="bw-detailsdiv">
            <div className="bw-from">
              <p>From</p>
              <p>Delhi,Delhi</p>
              <p>India</p>
            </div>
            <div className="bw-to">
              <p>To</p>
              <p>Kanpur,Uttar Pradesh</p>
              <p>India</p>
            </div>
            <div className="bw-traveldate">
              <div className="bw-traveldateheaddiv">
                <p>Travel Date</p>
                <MdKeyboardArrowDown
                  size={20}
                  onClick={handleTravelDateonClick}
                  color="#008cff"
                />
              </div>
              <p>
                <span id="tday"></span>
                <span id="tmonth"></span>
                <span id="tyear"></span>
              </p>
              <p id="tdayName"></p>
              {showDate && (
                <DatePicker
                  selected={selectedDate}
                  onChange={handleTravelDate}
                  inline
                />
              )}
            </div>
          </div>
          <div className="bw-searchbtndiv">
            <Searchbutton />
            <div className="fw-exploremore">
              <MdKeyboardDoubleArrowDown size={20} />
              <p>Explore More</p>
              <MdKeyboardDoubleArrowDown size={20} />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Buswidget;
