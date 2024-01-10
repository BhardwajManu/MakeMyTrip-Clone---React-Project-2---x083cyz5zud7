import React from "react";
import "./flightdetails.css";

const Flightdetails = () => {
  return (
    <>
      <div className="flightDetailsOuter">
        <div className="flightDetailsInfo">
          <p className="hrtlCenter">
            <span className="bg-Properties"></span>
            <span className="airlineHeadng">
              <font className="text-[#000000]">
                <b>IndiGo</b>
              </font>
              <font className="text-[#6d7278]">6E | 2224</font>
            </span>
            <span className="aircraftType">Airbus A321</span>
          </p>

          <div className="airlineInfo">
            <div className="airlineDTInfoCol">
              <p className="fontSize18">23:15</p>
              <p className="fontSize12 text-xs">Wed, 10 Jan 24</p>
              <font className="text-[#4a4a4a]">Terminal 2</font>
              <p className="text-xs">Mumbai, India</p>
            </div>
            <div className="airlineDtlDuration fontSize12">
              "02"
              <font className="text-[#757575]">h</font>
              "05"
              <font className="text-[#757575]">m</font>
              <div className="fliStopsSep">
                <p className="fliStopsSepLine"></p>
              </div>
            </div>
            <div className="airlineDTInfoCol">
              <p className="fontSize18">01:20</p>
              <p className="fontSize12 text-xs">Thu, 11 Jan 24</p>
              <font className="text-[#4a4a4a]">Terminal 2</font>
              <p className=" text-xs">New Delhi, India</p>
            </div>
            <div className="baggageInfo">
              <p className="appendBottom3">
                <span className="baggageInfoText">AMENTIES</span>
              </p>
              <p className="appendBottom3">
                <span className="darkText">
                  Charging Point, Blanket, Water Bottle
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flightdetails;
