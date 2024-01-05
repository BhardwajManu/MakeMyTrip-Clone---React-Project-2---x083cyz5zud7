import React from "react";
import "./singlehotel.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import ImageCarousel from "./ImageCarousel";
import hotelroomsize from "../../assets/images/hotelroomsize.png";
import hotelroombed from "../../assets/images/hotelroombed.png";
const SingleHotelPage = () => {
  return (
    <>
      <Stickyheader />
      <div className="singlehotelpage-maindiv">
        <div className="singlehotel-headerdiv">
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
        <div className="hoteldetails-maindiv">
          <div className="hotel-name-div">
            <h1>Dr. Rajkumar International Hotel</h1>
            <p>Gandhi Nagar, Bangalore</p>
            <p>Rating : 3.5</p>
          </div>
          <div className="hotel-image-div">
            <ImageCarousel />
          </div>
          <div className="aminities-div">
            <p className="aminities-head">Amenities</p>
            <ul>
              <li>Resturant</li>
              <li>swimming pool</li>
            </ul>
          </div>
          <div className="rooms-maindiv">
            <p className="rooms-heading">Select Rooms</p>
            <div className="roomtype-head-div">
              <div className="roomtype-dropdown">3 ROOM TYPES</div>
              <div className="rooms-option-head">OPTIONS</div>
              <div className="rooms-price-head">PRICE</div>
            </div>
            <div className="suiteroom-details-maindiv">
              <div className="suite-aboutroom">
                <h2>Room name</h2>
                <div className="roomsize-div">
                  <img src={hotelroomsize} alt="room" className="roomsizeimg" />
                  <p>roomsize sq.ft</p>
                </div>
                <div className="roombed-div">
                  <img src={hotelroombed} alt="bed" className="bedimg" />
                  <p>bed details</p>
                </div>
              </div>
              <div className="suite-optionsdiv">
                <p className="cancellation-head">Room With Free Cancellation</p>
                <div className="cancellation-criteria-div">
                  <div className="tickmark-icon"></div>
                  <p>cancellationPolicy</p>
                </div>
                <div className="meals-div">
                  <div className="tickmark-icon"></div>
                  <p>No meals included</p>
                </div>
              </div>
              <div className="suite-pricediv">
                <p>Per Night</p>
                <p>₹ 1,800</p>
                <p>+₹ 473 taxes & fees</p>
                <button className="selectroom-btn">SELECT ROOM</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleHotelPage;
