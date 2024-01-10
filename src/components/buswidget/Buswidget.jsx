import React, { useState } from "react";
import "./buswidget.css";
import { Container } from "@mui/material";
import { MdKeyboardArrowDown, MdKeyboardDoubleArrowDown } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Searchbutton from "../Searchbutton/Searchbutton";
import OutsideClickHandler from "react-outside-click-handler";

const Buswidget = () => {
  const [showDate, setShowDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [locations, setLocations] = useState({
    from: "Delhi,Delhi",
    to: "Kanpur,Uttar Pradesh",
    BusStandB: "India",
    BusStandA: "India",
  });

  const handleSwap = () => {
    setLocations({
      from: locations.to,
      to: locations.from,
      BusStandA: locations.BusStandB,
      BusStandB: locations.BusStandA,
    });
  };

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
              <p>{locations.from}</p>
              <p>{locations.BusStandB}</p>
            </div>
            <span className="fltSwipCircle" onClick={handleSwap}>
              <span className="flightsSprite"></span>
            </span>

            <div className="bw-to">
              <p>To</p>
              <p>{locations.to}</p>
              <p>{locations.BusStandA}</p>
            </div>
            <div className="bw-traveldate" onClick={handleTravelDateonClick}>
              <div className="bw-traveldateheaddiv">
                <p>Travel Date</p>
                <MdKeyboardArrowDown size={20} color="#008cff" />
              </div>
              <p>
                <span id="tday"></span>
                <span id="tmonth"></span>
                <span id="tyear"></span>
              </p>
              <p id="tdayName"></p>
              {showDate && (
                <OutsideClickHandler onOutsideClick={() => setShowDate(false)}>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleTravelDate}
                    inline
                  />
                </OutsideClickHandler>
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
