import React from "react";
import "./traincheckoutpage.css";
import { Stickyheader } from "../stickeyheader/Stickyheader";

const Traincheckoutpage = () => {
  return (
    <>
      <Stickyheader />
      <div className="travellerInfo">
        <div className="travellerHead">
          <h2>Select Travellers</h2>
        </div>
        <div className="railTravellersWrapper">
          <div className="railTravellersContainer">
            <section className="leftSection appendTop30 appendRight30">
              <div className="trdInfo">
                <div className="trdDetails makeFlex column">
                  <div className="appendBottom30">
                    <div className="makeFlex appendBottom5 spaceBetween">
                      <div className="column appendRight50">
                        <h3 className="font22 latoBlack appendBottom5">
                          Malwa Express
                        </h3>
                        <p>
                          <span className="font12 lightGreyText">#12919</span>
                        </p>
                      </div>
                      <div className="makeFlex hrtlCenter ">
                        <div className="makeFlex column appendRight20 ml-5">
                          <p className="appendBottom10">
                            <span className="latoBlack">5:42 AM</span>
                            <span className="latoBlack">, </span>
                            <span className="lightGreyText">30 Jan</span>
                          </p>
                          <p className="font12 darkGreyText">
                            Panipat Jn (PNP)
                          </p>
                        </div>
                        <span className="bdrTop"></span>
                        <div className="makeFlex column appendRight20">
                          <p className="font12 latoBold appendBottom20">
                            10
                            <span className="lightGreyText"> hrs </span>
                            48
                            <span className="lightGreyText"> mins</span>
                          </p>
                        </div>
                        <span className="bdrTop"></span>
                        <div className="makeFlex column appendBottom10 appendTop15">
                          <p className="appendBottom10">
                            <span className="latoBlack">4:30 PM</span>
                            <span className="latoBlack">, </span>
                            <span className="lightGreyText">30 Jan</span>
                          </p>
                          <p className="font12 darkGreyText">
                            Shmata Vd Katra (SVDK)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="makeFlex makeRelative">
                    <div className="makeFlex column appendRight40">
                      <div className="makeFlex column">
                        <h3 className="latoBold font14 darkGreyText ">
                          Availability Status
                        </h3>
                        <div className="trStatusBlock">
                          <p className="makeFlex appendBottom5 hrtlCenter">
                            <span className="latoBlack font16 appendRight20">
                              SL
                            </span>
                            <span className="latoBold font16">
                              <span className="orangeText">RLWL40/WL33</span>
                            </span>
                          </p>
                          <p className="font12 lightGreyText appendTop10">
                            Updated 11 hrs ago
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="ml-[43px]">
                      <div className="selectedQuotaContainer noSelection selectWrap makeRelative">
                        <p className="labelName appendBottom10 darkGreyText font14 greyed latoBold">
                          Your Boarding Station
                        </p>
                        <p className="selectedQuota cursorPointer latoBold font12 makeFlex">
                          <span className="latoRegular font14 darkGreyText">
                            PANIPAT JN (PNP) - 5:42 AM (30 Jan)
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className=" appendTop30 rightrailSection">
              <div className="appendBottom20">
                <div id="FARE_SUMMARY">
                  <section className="fareSummary">
                    <div>
                      <p className="fontSize18 blackFont payandbook">
                        FARE SUMMARY
                      </p>
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
                          <span className="fontSize14 darkText">₹ 330</span>
                        </div>
                      </div>
                      <div className="fareTypeWrap">
                        <div className="fareRow">
                          <div className="makeFlex  pointer flexOne">
                            <span className="appendRight10">
                              <span className="iconPlusImg bgProperties"></span>
                            </span>
                            <span className="fareHeader">Extra Charges</span>
                          </div>
                          <span className="fontSize14 darkText">30</span>
                        </div>
                      </div>
                    </div>
                    <div className="fareFooter">
                      <p className="payNowWrapper">
                        <span className="fontSize16 blackFont">
                          Total Price
                        </span>
                        <span className="fontSize16 blackFont">₹ 360</span>
                      </p>
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Traincheckoutpage;
