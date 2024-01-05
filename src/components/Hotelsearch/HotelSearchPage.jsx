import React, { useEffect } from "react";
import "./hotelsearch.css";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import { Container } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import hotelspagemap from "../../assets/images/hotelspagemap.png";
import hotelimagemain from "../../assets/images/hotelimagemain.png";
import hotelimage1 from "../../assets/images/hotelimage1.png";
import hotelimage2 from "../../assets/images/hotelimage2.png";
import hotelimage3 from "../../assets/images/hotelimage3.png";
import { Link } from "react-router-dom";

const HotelSearchPage = () => {
  return (
    <>
      <Stickyheader />
      <div className="maindiv">
        <div className="filldetailslist">
          <div>
            <p>
              CITY, AREA OR PROPERTY <MdKeyboardArrowDown size={20} />
            </p>

            <p className="selecteditem">Bengaluru</p>
          </div>
          <div>
            <p>
              CHECK-IN <MdKeyboardArrowDown size={20} />
            </p>
            <p className="selecteditem">Wed,6 Dec 2023</p>
          </div>
          <div>
            <p>
              CHECK-OUT <MdKeyboardArrowDown size={20} />
            </p>
            <p className="selecteditem">Tuesday,12 Dec 2023</p>
          </div>
          <div>
            <p>
              ROOMS & GUESTS
              <MdKeyboardArrowDown size={20} />
            </p>
            <p className="selecteditem">1 Room,2 Adults</p>
          </div>
          <button>SEARCH</button>
        </div>

        <div className="searchresult-linktohome">
          <div className="para-div">
            <p className="direct-to-home">Home</p>
            <IoIosArrowForward className="para-div-arrowicon" />
            <p className="searchresultshead">Hotels and more in Bangalore</p>
          </div>
          <h3>1455 Properties in Bangalore</h3>
        </div>

        <div className="hotels-sortandsearchdiv">
          <div className="sort-by-div">
            <span className="sort-by-head">SORT BY:</span>
            <ul>
              <li>Popular</li>
              <li>
                User Rating<span>(Highest First)</span>
              </li>
              <li>
                Price <span>(Highest First)</span>
              </li>
              <li>
                Price <span>(Lowest First)</span>
              </li>
            </ul>
          </div>

          <div className="search-inputbox-div">
            <div className="searchicon-hotels"></div>
            <input placeholder="Search for locality / hotel name" />
          </div>
        </div>

        {/* <Container> */}
        <div className="hotelsearchbottomdiv">
          <div className="applyfilters-sidebar">
            <div className="exploremapdiv">
              <button className="exploremap-btn">
                EXPLORE ON MAP
                <span className="map-icon"></span>
              </button>
              <img className="map-image" src={hotelspagemap} alt="map" />
            </div>
            <div className="selectfiltersdiv">
              <p className="selectfilters-heading">Select Filters</p>
              <div className="filtercategorydiv">
                <p className="filtercategory-heading">Suggested For You</p>
                <ul>
                  <li>
                    <input type="checkbox" />
                    <p>Last Minute Deals</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>Rated Good by Travellers</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>Unmarried Couples Allowed</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>5 Star</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>Swimming Pool</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>Highly Recommended by Travellers</p>
                  </li>
                </ul>
              </div>

              <div className="filtercategorydiv">
                <p className="filtercategory-heading">Price per night</p>
                <ul>
                  <li>
                    <input type="checkbox" />
                    <p>₹ 0 - ₹ 1500</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>₹ 1500 - ₹ 2500</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>₹ 2500 - ₹ 6000</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>₹ 6000 - ₹ 9500</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>₹ 9500 - ₹ 13000</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>₹ 13000 - ₹ 15000</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>₹ 15000 - ₹ 30000</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>₹ 30000+</p>
                  </li>
                </ul>
              </div>

              <div className="filtercategorydiv">
                <p className="filtercategory-heading">Star Category</p>
                <ul>
                  <li>
                    <input type="checkbox" />
                    <p>3 Star</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>4 Star</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>5 Star</p>
                  </li>
                </ul>
              </div>

              <div className="filtercategorydiv">
                <p className="filtercategory-heading">User Rating</p>
                <ul>
                  <li>
                    <input type="checkbox" />
                    <p>Excellent: 4.2+</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>Very Good: 3.5+</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>Good: 3+</p>
                  </li>
                </ul>
              </div>

              <div className="filtercategorydiv">
                <p className="filtercategory-heading">Property Type</p>
                <ul>
                  <li>
                    <input type="checkbox" />
                    <p>Hotel</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>Apartment</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>Homestay</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mainsearchresultspage">
            <h3>Popular in Bangalore</h3>
            <Link to="/singlehotel" style={{ textDecoration: "none" }}>
              <div className="showhoteldiv">
                <div className="hotelsdetailsdiv">
                  <div className="hoteldetails-leftdiv">
                    <div className="hotelimagesdiv">
                      <div className="mainimagediv">
                        <img src={hotelimagemain} />
                      </div>
                      <div className="subimagediv">
                        <img src={hotelimagemain} />
                        <img src={hotelimage1} />
                        <img src={hotelimage2} />
                        <img src={hotelimage3} />
                      </div>
                    </div>
                    <div className="hoteldescriptiondiv">
                      <div className="hotelname-rating-div">
                        <h4>West Fort Hotel</h4>
                        {/* <span className="blackstar"></span>
                      <span className="greystar"></span> */}
                      </div>
                      <p className="hotellocation">
                        <span>Near Bangalore Train Station </span>| 540m from
                        Bangalore City Junction Railway Station
                      </p>
                      <div className="couplefriendly">Couple Friendly</div>
                    </div>
                  </div>
                  <div className="hoteldetails-rightdiv">
                    <div className="ratingpointdiv">
                      <span>Very Good</span>
                      <span>4.0</span>
                    </div>
                    <p className="numberofratings">266 Ratings</p>
                    <div className="hotelbookingprice">
                      <h2>₹ 3,040</h2>
                      <p>+ ₹ 224 taxes & fees</p>
                      <p>Per Night</p>
                    </div>
                    <p className="linktologin">
                      Login to Book Now & Pay Later!
                    </p>
                  </div>
                </div>
                <p className="offerplan">
                  Exclusive Offer on SBI Credit Cards. Get INR 1264 Off
                </p>
              </div>
            </Link>
          </div>
        </div>
        {/* </Container> */}
      </div>
    </>
  );
};

export default HotelSearchPage;
