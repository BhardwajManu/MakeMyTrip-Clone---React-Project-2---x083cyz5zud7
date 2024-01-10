import React from "react";
import "./buscheckoutpage.css";
import { Stickyheader } from "../stickeyheader/Stickyheader";

const Buscheckoutpage = () => {
  return (
    <>
      <Stickyheader />
      <div className="reviewHeaderWrapper makeFlex vrtlCenter">
        <div className="reviewHeaderContainer  makeFlex spaceBetween ">
          <h1 className="latoBlack lineHeight29 font24">
            Complete your booking
          </h1>
        </div>
      </div>
      <div className="busTravellersWrapper">
        <div className="busTravellersContainer">
          <section className="leftSection appendRight20">
            <div className="travellerBusInfoDetails makeFlex column card">
              <div className="cardPadding">
                <div className="makeFlex spaceBetween appendBottom6 blackText">
                  <p className="latoBlack font18">
                    Raj Kalpana Travels Pvt.Ltd
                  </p>
                  <span className="latoBold font14">
                    Seat No:
                    <span>
                      <span>U3</span>
                    </span>
                  </span>
                </div>
                <div className="makeFlex spaceBetween appendBottom10 font14">
                  <span className="defaultGreyText font14">
                    VE A/C Sleeper (2+1)
                  </span>
                </div>
              </div>
              <div className="makeFlex spaceBetween hrtlCenter appendBottom2 busFacilityStrip">
                <div className="bus-rating-div">
                  <span className="ratingstar-img"></span>
                  <p>4.9</p>
                </div>
              </div>
              <div className="makeFlex row blackText reviewBusInfoWrapper cardPadding spaceBetween">
                <div>
                  <span className="makeRelative font18 latoBold">
                    23:30
                    <span className="font16 latoRegular darkGreyText ml-2">
                      10 Jan' 24, Wed
                    </span>
                  </span>
                  <div className="makeFlex column maxWidth200 maxHeight200 appendTop8">
                    <span className="font16 latoRegular appendBottom8 lineHeight18 blackText">
                      Delhi
                    </span>
                    <span className="lineHeight20 colorGrey">
                      <div className="latoRegular">Isbt kashmiri gate</div>
                      <span className="latoRegular">
                        Shop No 7 Kashmiri Gate Near Mandir Wali Parking{" "}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="makeFlex column hrtlCenter">
                  <span className="font14 defaultGreyText"> 8h 40m</span>
                  <div className="dottedLine"></div>
                </div>
                <div>
                  <span className="makeRelative font18 latoBold">
                    23:30
                    <span className="font16 latoRegular darkGreyText ml-2">
                      10 Jan' 24, Wed
                    </span>
                  </span>
                  <div className="makeFlex column maxWidth200 maxHeight200 appendTop8">
                    <span className="font16 latoRegular appendBottom8 lineHeight18 blackText">
                      Delhi
                    </span>
                    <span className="lineHeight20 colorGrey">
                      <div className="latoRegular">Isbt kashmiri gate</div>
                      <span className="latoRegular">
                        Shop No 7 Kashmiri Gate Near Mandir Wali Parking{" "}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="rightSection">
            <div className="busrightcontainer">
              <div id="FARE_SUMMARY">
                <section className="fareSummary">
                  <div>
                    <p className="fontSize18 blackFont">Price details</p>
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
                        <span className="fontSize14 darkText">₹ 699</span>
                      </div>
                    </div>
                    <div className="fareTypeWrap">
                      <div className="fareRow">
                        <div className="makeFlex  pointer flexOne">
                          <span className="appendRight10">
                            <span className="iconPlusImg bgProperties"></span>
                          </span>
                          <span className="fareHeader">Amount</span>
                        </div>
                        <span className="fontSize14 darkText">₹ 699</span>
                      </div>
                    </div>
                  </div>
                  <div className="fareFooter">
                    <p className="totalprice">
                      <span className="fontSize16 blackFont">Total Amount</span>
                      <span className="fontSize16 blackFont">₹ 699</span>
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Buscheckoutpage;
