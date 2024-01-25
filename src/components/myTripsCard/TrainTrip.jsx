import React from "react";
import "./mytrip.css";
import { FaTrainSubway } from "react-icons/fa6";

const TrainTrip = () => {
  return (
    <>
      <div className="Trip-container">
        <FaTrainSubway size={25} className="mt-train-icon" />

        <div className="T-A-D-text">
          <p>TRAIN</p>
          <p>Booking id:</p>
        </div>

        <div className="dates-1">
          <div className="end-date">
            <span>Departure Date:</span>
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

export default TrainTrip;
