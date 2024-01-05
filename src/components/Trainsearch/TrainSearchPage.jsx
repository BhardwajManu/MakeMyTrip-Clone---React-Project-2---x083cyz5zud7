import React from "react";
import "./trainsearchpage.css";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import { IoIosArrowUp } from "react-icons/io";
// import CarouselDate from "./CarouselDate";

const TrainsSearchPage = () => {
  return (
    <>
      <Stickyheader />

      <div className="trainspagemaindiv">
        <div className="trainspage-topdiv">
          <div className="trains-searchdetails-div">
            <div className="fromcity-div">
              <p>FROM CITY</p>
              <p>NDLS,New Delhi</p>
            </div>
            <div className="tocity-div">
              <p>TO CITY</p>
              <p>CNB,Kanpur</p>
            </div>
            <div className="traveldate-div">
              <p>TRAVEL DATE</p>
              <p>Sun,17 Dec 23</p>
            </div>
            <div className="class-div">
              <p>CLASS</p>
              <p>All Classes</p>
            </div>
            <button className="trains-searchbtn">SEARCH</button>
          </div>

          <div className="sortedby-div">
            <p>Sorted By :</p>
            <p>
              <span>Availability(Default)</span>
              <IoIosArrowUp size={16} color="#008cff" />
            </p>
            <p>| Showing 48 out of 48 trains.</p>
          </div>
        </div>

        <div className="trainspage-bottomdiv">
          <div className="filters-div">
            <div className="flitercategory">
              <p>Quick Filters</p>
              <ul>
                <li>
                  <input type="checkbox" />
                  <p>AC</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Available</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Departure after 6 PM</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Arrival before 12 PM</p>
                </li>
              </ul>
            </div>
            <div className="flitercategory">
              <p>Ticket Types</p>
              <ul>
                <li>
                  <input type="checkbox" />
                  <p>Free Cancellation</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Trip Gurantee</p>
                </li>
              </ul>
            </div>
            <div className="flitercategory">
              <p>Journey Class Filters</p>
              <ul>
                <li>
                  <input type="checkbox" />
                  <p>1st Class AC - 1A</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>2 Tier AC - 2A</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>3 Tier AC - 3A</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>AC three tier(economy)-3E</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Sleeper - SL</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>AC Chair Car - CC</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Executive Chair Car - EC</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Second Sitting - 2S</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Executive Anubhuti - EA</p>
                </li>
              </ul>
            </div>
            <div className="flitercategory">
              <p>Train Types</p>
              <ul>
                <li>
                  <input type="checkbox" />
                  <p>Others - O</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Shatabdi - S</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Rajdhani - R</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Special Trains - SP</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Special Tatkal Trains - ST</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>Garib Rath - G</p>
                </li>
                <li>
                  <input type="checkbox" />
                  <p>MEX - MEX</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="searchresults-div">
            {/* <div className="datecarousal">
              <CarouselDate />
            </div> */}

            <div className="showtrains">
              <div className="showtrains-topdiv">
                <div className="trainname-and-details">
                  <p className="trainname">Shram Shkti Exp</p>
                  <div className="traindetails-div">
                    <p className="train-number">#12452</p>
                    <p>
                      <span className="departure-dates">Departs on :</span>
                      <span>S</span>
                      <span>S</span>
                      <span>M</span>
                      <span>T</span>
                      <span>W</span>
                      <span>T</span>
                      <span>F</span>
                      <span>S</span>
                    </p>
                  </div>
                </div>
                <div className="departuredetails-div">
                  <p>11:55 PM, Sun</p>
                  <p>New Delhi Railway Station (NDLS)</p>
                </div>
                <div className="traveltime-div">
                  <div>
                    <p>6 hrs 20 mins</p>
                  </div>
                  {/* <p className="linktoviewroute">View route</p> */}
                </div>
                <div className="arrivaldetails-div">
                  <p>6:15 AM, Mon</p>
                  <p>Kanpur Central Railway Station (CNB)</p>
                </div>
              </div>

              <div className="showtrains-btmdiv">
                <div className="sl-card">
                  <div>
                    <p>SL</p>
                    <p>₹ 300</p>
                  </div>
                  <p className="rac-nmbr">RAC 28</p>
                  <p className="cancellation">Free Cancellation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrainsSearchPage;
