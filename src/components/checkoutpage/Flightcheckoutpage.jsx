import React from "react";
import "./Flightcheckoutpage.css";
import { Stickyheader } from "../stickeyheader/Stickyheader";

const Flightcheckoutpage = () => {
  return (
    <>
      <Stickyheader />
      <div className="pageStickyHder">
        <div className=""></div>
        <h2 className="headerTitle">Complete your booking</h2>
      </div>
      <div className="flightsContainer">
        <div className="pageLeftConainer"></div>
        <div className="fareSummary"></div>
      </div>
    </>
  );
};

export default Flightcheckoutpage;
