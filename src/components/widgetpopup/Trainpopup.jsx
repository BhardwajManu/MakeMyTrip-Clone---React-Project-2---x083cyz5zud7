import React from "react";
import "./widgetpopup.css";

const Trainpopup = ({ setShowFlightPopup, updateFlightPopupData }) => {
  const handleTrainPopuptSelect = (e) => {
    const popup = e.target.closest("li").dataset;
    if (updateFlightPopupData) updateFlightPopupData(popup);
    if (setShowFlightPopup) setShowFlightPopup(false);
  };
  return (
    <div>
      <ul className="travelForPopup" onClick={handleTrainPopuptSelect}>
        <li>All Class</li>
        <li>Sleeper Class</li>
        <li>Third AC</li>
        <li>Second AC</li>
        <li>First AC</li>
        <li>Second Seating</li>
        <li>Vistadome AC</li>
        <li>AC Chair Car</li>
        <li>First Class</li>
        <li>Third AC Economy</li>
      </ul>
    </div>
  );
};

export default Trainpopup;
