import React from "react";
import "./Flightcheckoutpage.css";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import Userdetails from "./Userdetails";

const Flightcheckoutpage = () => {
  return (
    <>
      <Stickyheader />
      <div className="reviewTravellerAddons">
        <div className="pageStickyHder">
          <div className="flightsContainer pageHeaderWrap">
            <div className="pageHeader">
              <h2 className="fontSize20 blackFont whiteText headerTitle">
                Complete your booking
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flightBody">
        <span className="bgGradient"></span>
        <div className="flightsContainer footerSpace">
          <div className="makeFlex spaceBetween">
            <div className="pageLeftConainer">
              <div className="componentContainer padding20">
                <section className="flightDetailBlk undefined">
                  <div className="flDetailHdr">
                    <div>
                      <h2 className="blackFont">
                        <b>Mumbai → New Delhi</b>
                      </h2>
                      <p className="appendTop10 makeFlex">
                        <span className="scheduleDay">Wednesday, Jan 10</span>
                        <span className="fontSize14 ml-3">
                          Non Stop · 2h 5m
                        </span>
                      </p>
                    </div>
                    <div className="makeFlex column">
                      <p className="refundTag">
                        <font className="text-[#ffffff]">
                          Cancellation Fees Apply
                        </font>
                      </p>
                      <p className="fontSize14 linkText appendTop10 textRight">
                        <span>View Fare Rules</span>
                      </p>
                    </div>
                  </div>
                  <div className="flightItenaryWrap 0">
                    <div className="flightItenaryHdr">
                      <div className="makeFlex ">
                        <span className="bgPropertiess icon24"></span>
                        <p className="makeFlex hrtlCenter gap-x-10">
                          <span className="fontSize14 boldFont">IndiGo</span>
                          <span className="fontSize14">6E 2224</span>
                          <span className="aircraftType">Airbus A321</span>
                        </p>
                      </div>
                    </div>
                    <div className="flightItenary">
                      <div className="flightItineraryDetails">
                        <div className="flexOne">
                          <div className="itenaryLeft">
                            <div className=" makeFlex gap-x-10">
                              <div className="makeFlex time-info-ui">
                                <span className="fontSize14 blackFont">
                                  23:15
                                </span>
                                <span className="layoverCircle"></span>
                              </div>
                              <div>
                                <span className="fontSize14 blackFont">
                                  Mumbai
                                </span>
                                <span className="fontSize14">
                                  . Chhatrapati Shivaji International
                                  Airport,Terminal 2
                                </span>
                              </div>
                            </div>
                            <div className="layover-time">
                              <span className="fontSize14">2h 5m</span>
                            </div>
                            <div className="makeFlex gap-x-10 overideBg">
                              <div className="makeFlex time-info-ui">
                                <span className="fontSize14 blackFont">
                                  01:20
                                </span>
                                <span className="layoverCircle"></span>
                              </div>
                              <div>
                                <span className="fontSize14 blackFont">
                                  New Delhi
                                </span>
                                <span className="fontSize14">
                                  . Indira Gandhi International Airport,
                                  Terminal 2
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="pageRightContainer customScroll">
              <div className="appendBottom20">
                <div id="FARE_SUMMARY">
                  <section className="fareSummary">
                    <div>
                      <p className="fontSize18 blackFont">Fare Summary</p>
                    </div>
                    <div className="fareBreakWrapper">
                      <div className="fareTypeWrap">
                        <div className="fareRow">
                          <div className="makeFlex  pointer flexOne">
                            <span className="appendRight10 ">
                              <span className="iconPlusImg bgProperties"></span>
                            </span>
                            <span className="fareHeader">Base Fare</span>
                          </div>
                          <span className="fontSize14 darkText">₹ 4,630</span>
                        </div>
                      </div>
                      <div className="fareTypeWrap">
                        <div className="fareRow">
                          <div className="makeFlex  pointer flexOne">
                            <span className="appendRight10">
                              <span className="iconPlusImg bgProperties"></span>
                            </span>
                            <span className="fareHeader">
                              Taxes and Surcharges
                            </span>
                          </div>
                          <span className="fontSize14 darkText">₹ 691</span>
                        </div>
                      </div>
                    </div>
                    <div className="fareFooter">
                      <p className="fareRow">
                        <span className="fontSize16 blackFont">
                          Total Amount
                        </span>
                        <span className="fontSize16 blackFont">₹ 5,321</span>
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Userdetails />
    </>
  );
};

export default Flightcheckoutpage;
