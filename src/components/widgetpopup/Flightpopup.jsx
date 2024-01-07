import React, { useState } from "react";
import "./widgetpopup.css";

const Flightpopup = () => {
  const [count, setCount] = useState("1");

  return (
    <>
      <div className="fltTravellers">
        <div className="gbTravellers">
          <p>Travellers</p>
          <div className="guestCounter">
            <span className="font-bold">-</span>
            {count}
            <span className="font-bold">+</span>
          </div>
        </div>
        <div className="travelClass">
          <p>Choose Travel Class</p>
          <ul className="travelClassList">
            <li>Economy/Premium Economy</li>
            <li>Premium Economy</li>
            <li>Business</li>
          </ul>
        </div>
        <button className="travellerApplyBtn">Apply</button>
      </div>
    </>
  );
};

export default Flightpopup;
