import React from "react";
import Offers from "../../components/offers/Offers";
import ForexWidget from "../../components/forexwidget/ForexWidget";
import fwad from "../../assets/images/fwad.png";

const TrainWidgetBottom = () => {
  return (
    <div>
      <div className="fw-mainbtmdiv">
        <img className="fw-adv" src={fwad} alt="ad" />
      </div>
      <Offers />
      <ForexWidget />
    </div>
  );
};

export default TrainWidgetBottom;
