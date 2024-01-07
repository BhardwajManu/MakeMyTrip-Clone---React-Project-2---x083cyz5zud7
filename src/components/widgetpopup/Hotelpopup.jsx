import React, { useState } from "react";
import "./widgetpopup.css";

const Hotelpopup = () => {
  const [count, setCount] = useState("1");
  return (
    <>
      <div className="rmsGst">
        <div className="rmsGst-hw">
          <p>Rooms</p>
          <div className="guestCounter">
            <span className="font-bold">-</span>
            {count}
            <span className="font-bold">+</span>
          </div>
        </div>
        <div className="rmsGst-hw">
          <p>Guests</p>
          <div className="guestCounter">
            <span className="font-bold">-</span>
            {count}
            <span className="font-bold">+</span>
          </div>
        </div>
        <p className="text-slate-800">
          Please provide right number of Guests for best options and prices.
        </p>
        <button className="travellerApplyBtn">Apply</button>
      </div>
    </>
  );
};

export default Hotelpopup;
