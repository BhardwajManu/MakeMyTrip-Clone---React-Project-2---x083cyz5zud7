import React from "react";
import "./mytrip.css";
import { FaBusAlt } from "react-icons/fa";

const BusTrip = () => {
  const paymentCart = JSON.parse(localStorage.getItem("paymentStatus"));
  console.log(paymentCart);
  return (
    <>
      <div className="Trip-container">
        <FaBusAlt size={25} className="mt-flight-icon" />

        <div className="T-A-D-text">
          <p>BUS</p>
          <p>Booking Id:</p>
        </div>

        <div className="dates-1">
          <div className="end-date">
            <span>Departure Date :</span>
            <span>10/12/2024</span>
          </div>
          <div className="myTrip-dates">
            <span>Time:</span>
            <span>11:45</span>
          </div>
        </div>

        <div className="dates-2">
          <div className="Start-date">
            <span>Arrival Date :</span>
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

export default BusTrip;
