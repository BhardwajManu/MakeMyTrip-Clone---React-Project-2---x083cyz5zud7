import React from "react";
import "./mytrip.css";
import { FaHotel } from "react-icons/fa6";

const HotelTrip = () => {
  return (
    <>
      <div className="Trip-container">
        <FaHotel size={25} className="mt-hotel-icon" />

        <div className="T-A-D-text">
          <p>HOTEL</p>
          <p>Booking id:</p>
        </div>

        <div className="dates-1">
          <div className="Start-date">
            <span>Check-In Date:</span>
            <span>10/12/2024</span>
          </div>
          <div className="myTrip-dates">
            <span>Time:</span>
            <span>11:45</span>
          </div>
        </div>

        <div className="dates-2-checkout">
          <div className="end-date">
            <span>Check-Out Date:</span>
            <span>10/12/2024</span>
          </div>
          <div className="myTrip-dates">
            <span>Time:</span>
            <span>11:45</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelTrip;
