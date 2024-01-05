import React, { useState } from "react";
import "./flightsearch.css";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Slider } from "@mui/material";
import { Container } from "@mui/material";

const FlightSearch = () => {
  const [selectedFare, setSelectedFare] = useState("");

  const handleFareChange = (e) => {
    setSelectedFare(e.target.value);
  };
  return (
    <>
      <Stickyheader />

      <div className="flightsearch">
        <div className="flightsearch-maindiv">
          <div className="flightsearch-topdiv">
            <div className="tripdetails-div">
              {/* <div>
              <p>
                TRIP TYPE <MdKeyboardArrowDown size={20} />
              </p>
              <p className="fd-selecteditem">One Way</p>
            </div> */}
              <div>
                <p>
                  FROM <MdKeyboardArrowDown size={20} />
                </p>
                <p className="fd-selecteditem">Bengaluru,India</p>
              </div>
              <div>
                <p>
                  TO <MdKeyboardArrowDown size={20} />
                </p>
                <p className="fd-selecteditem"> New Delhi,India</p>
              </div>
              <div>
                <p>
                  DEPART <MdKeyboardArrowDown size={20} />
                </p>
                <p className="fd-selecteditem">Mon,Feb 12,2024</p>
              </div>
              {/* <div>
              <p>
                RETURN <MdKeyboardArrowDown size={20} />
              </p>
              <p className="fd-selecteditem">Wed,Feb 14,2024</p>
            </div> */}
              <div>
                <p>
                  PASSENGERS & CLASS <MdKeyboardArrowDown size={20} />
                </p>
                <p className="fd-selecteditem">1 Adult,Economy</p>
              </div>
            </div>
            {/* </div>
          <div className="faretypes-div">
            <span>Fare Type:</span>
            <ul>
              <li>
                <input
                  type="radio"
                  value="Regular"
                  checked={selectedFare === "Regular"}
                  onChange={handleFareChange}
                />
                <label>Regular</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="Armed Forces"
                  checked={selectedFare === "Armed Forces"}
                  onChange={handleFareChange}
                />
                <label>Armed Forces</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="Student"
                  checked={selectedFare === "Student"}
                  onChange={handleFareChange}
                />
                <label>Student</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="Senior Citizen"
                  checked={selectedFare === "Senior Citizen"}
                  onChange={handleFareChange}
                />
                <label>Senior Citizen</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="Doctors & Nurses"
                  checked={selectedFare === "Doctors & Nurses"}
                  onChange={handleFareChange}
                />
                <label>Double Seat</label>
              </li>
              <li>
                <input
                  type="radio"
                  value="Double Seat"
                  checked={selectedFare === "Double Seat"}
                  onChange={handleFareChange}
                />
                <label>Double Seat</label>
              </li>
            </ul>
          </div> */}
          </div>
          <div className="partitiondiv"></div>

          <div className="flightsearch-btmdiv">
            {/* <span className="bgcolor-span"></span> */}
            <div className="flightsearch-btmleftdiv">
              <div className="popularfilters-div">
                <p className="popularfilters-head">Popular Filters</p>
                <ul>
                  <li>
                    <div>
                      <input className="filter-checkbox" type="checkbox" />
                      <p>Non Stop</p>
                    </div>
                    <p className="rate">₹ 6,699</p>
                  </li>
                  <li>
                    <div>
                      <input className="filter-checkbox" type="checkbox" />
                      <div className="airline-image-indigo"></div>
                      <p>IndiGo</p>
                    </div>
                    <p className="rate">₹ 6,933</p>
                  </li>
                  <li>
                    <div>
                      <input className="filter-checkbox" type="checkbox" />
                      <div className="airline-image-vistara"></div>
                      <p>Vistara</p>
                    </div>
                    <p className="rate">₹ 6,934</p>
                  </li>
                  <li>
                    <div>
                      <input className="filter-checkbox" type="checkbox" />
                      <div className="airline-image-airindia"></div>
                      <p>Air India</p>
                    </div>
                    <p className="rate">₹ 7,393</p>
                  </li>
                </ul>
              </div>

              <div className="onewayprice-div">
                <p className="onewayprice-head">One Way Price</p>
                <div className="pricerange-slider">
                  <Slider
                    size="large"
                    min={6111}
                    max={8600}
                    valueLabelDisplay="auto"
                  />
                </div>
                <div className="raterange">
                  <p>₹6,111</p>
                  <p>₹8,600</p>
                </div>
              </div>

              <div className="departurefromdestination">
                <p className="departurefromdest-head">
                  Departure From Bengaluru
                </p>
                <div className="departure-times-maindiv">
                  <div className="departure-times-individualdiv">
                    <div className="departuretime-img-1"></div>
                    <p>Before 6 AM</p>
                  </div>
                  <div className="departure-times-individualdiv">
                    <div className="departuretime-img-2"></div>
                    <p>6 AM - 12 PM</p>
                  </div>
                  <div className="departure-times-individualdiv">
                    <div className="departuretime-img-3"></div>
                    <p>12 PM - 6 PM</p>
                  </div>
                  <div className="departure-times-individualdiv">
                    <div className="departuretime-img-4"></div>
                    <p>After 6 PM</p>
                  </div>
                </div>
              </div>

              <div className="arrivalto">
                <p className="arrivalto-head">Arrival at New Delhi</p>
                <div className="arrival-times-maindiv">
                  <div className="arrival-times-individualdiv">
                    <div className="arrivaltime-img-1"></div>
                    <p>Before 6 AM</p>
                  </div>
                  <div className="arrival-times-individualdiv">
                    <div className="arrivaltime-img-2"></div>
                    <p>6 AM - 12 PM</p>
                  </div>
                  <div className="arrival-times-individualdiv">
                    <div className="arrivaltime-img-3"></div>
                    <p>12 PM - 6 PM</p>
                  </div>
                  <div className="arrival-times-individualdiv">
                    <div className="arrivaltime-img-4"></div>
                    <p>After 6 PM</p>
                  </div>
                </div>
              </div>

              <div className="airlines-filter-maindiv">
                <p className="airlinesfilter-head">Airlines</p>
                <ul>
                  <li>
                    <div>
                      <input type="checkbox" className="airline-checkbox" />
                      <div className="airindia-logo"></div>
                      <p>Air India</p>
                    </div>
                    <p className="airline-rate">₹ 7,393</p>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" className="airline-checkbox" />
                      <div className="airindiaexpress-logo"></div>
                      <p>Air India Express</p>
                    </div>
                    <p className="airline-rate">₹ 6,111</p>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" className="airline-checkbox" />
                      <div className="akasaair-logo"></div>
                      <p>Akasa Air</p>
                    </div>
                    <p className="airline-rate">₹ 7,263</p>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" className="airline-checkbox" />
                      <div className="allianceair-logo"></div>
                      <p>Alliance Air</p>
                    </div>
                    <p className="airline-rate">₹ 8,536</p>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" className="airline-checkbox" />
                      <div className="indigo-logo"></div>
                      <p>IndiGo</p>
                    </div>
                    <p className="airline-rate">₹ 6,933</p>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" className="airline-checkbox" />
                      <div className="spicejet-logo"></div>
                      <p>SpiceJet</p>
                    </div>
                    <p className="airline-rate">₹ 7,068</p>
                  </li>
                  <li>
                    <div>
                      <input type="checkbox" className="airline-checkbox" />
                      <div className="vistara-logo"></div>
                      <p>Vistara</p>
                    </div>
                    <p className="airline-rate">₹ 6,934</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flightsearch-btmrightdiv">
              {/* <div className="date-rate-carosel-div">
            </div> */}
              <div className="flightdetails-maindiv">
                <div className="available-flightdetails">
                  <div className="flight-details-div">
                    <div className="airlinelogo"></div>
                    <div className="airline-nameandno-div">
                      <p>Air India Express</p>
                      <p>I5 613</p>
                    </div>
                  </div>

                  <div className="departure-details-div">
                    <p>18:10</p>
                    <p>Bengaluru</p>
                  </div>

                  <div className="flyingtime-div">
                    <p>02 h 55 m</p>
                    <div></div>
                    <p>Non stop</p>
                  </div>

                  <div className="arrival-details-div">
                    <p>21:05</p>
                    <p>New Delhi</p>
                  </div>

                  <div className="price-details-div">
                    <p>₹ 6,111</p>
                    <p>per adult</p>
                  </div>

                  <button className="flight-booknow-btn">Book Now</button>
                </div>
                {/* <div className="offertext">Get Rs 150 off using MMTBONUS*</div> */}
                <p className="linktoflightdetails">View Flight Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlightSearch;
