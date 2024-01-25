import React from "react";
import "./mytrip.css";
import { MdOutlineFlight } from "react-icons/md";
import { RiBookmarkFill } from "react-icons/ri";

const TripCard = () => {
  const paymentCart = JSON.parse(localStorage.getItem("paymentStatus"));
  console.log(paymentCart);

  return (
    <>
      <div className="Trip-container">
        <RiBookmarkFill size={25} className="mt-flight-icon" />

        <div className="T-A-D-text">
          <p>{paymentCart?.bookingId?.booking_type}</p>
          <p>Booking Id:{paymentCart?.bookingId?.user}</p>
        </div>

        <div className="dates-1">
          <div className="end-date">
            <span>Departure Date:</span>
            <span>{paymentCart?.bookingId?.start_date}</span>
          </div>
          <div className="myTrip-dates">
            <span>Time:</span>
            <span>11:45</span>
          </div>
        </div>

        <div className="dates-2">
          <div className="Start-date">
            <span>Arrival Date :</span>
            <span>{paymentCart?.bookingId?.end_date}</span>
          </div>
          <div className="myTrip-dates">
            <span>Time:</span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TripCard;
