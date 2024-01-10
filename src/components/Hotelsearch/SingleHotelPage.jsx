import React from "react";
import "./singlehotel.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import ImageCarousel from "./ImageCarousel";
import hotelroomsize from "../../assets/images/hotelroomsize.png";
import hotelroombed from "../../assets/images/hotelroombed.png";
import { TbMathGreater } from "react-icons/tb";
import { Link } from "react-router-dom";
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
          <div className="topcontainer-crou">
            <div className="text-[#008cff] font-bold flex -mt-2">
              <Link to="/">
                <h6>Home</h6>
              </Link>
              <span className="mx-1 my-2 text-xs text-[#9b9b9b]">
                <TbMathGreater />
              </span>
              <Link to="/hotels">
                <h6>Hotels</h6>
              </Link>
              <span className="mx-1 my-2 text-xs text-[#9b9b9b]">
                <TbMathGreater />
              </span>
              <h6 className="text-[#9b9b9b]">
                Dr. Rajkumar International Hotel
              </h6>
            </div>

            <ImageCarousel />
            <div className="hotel-name-div">
              <h1>Dr. Rajkumar International Hotel</h1>
              <p>Gandhi Nagar, Bangalore</p>
              <div className="bus-rating-div">
                <span className="ratingstar-img"></span>
                <p>4.9</p>
              </div>
            </div>
            <div className="prmDtl__bottom">
              <ul>
                <li>
                  <a className="navLink">OVERVIEW</a>
                </li>
                <li>
                  <a className="navLink">ROOMS</a>
                </li>
                <li>
                  <a className="navLink">AMENITIES</a>
                </li>
                <li>
                  <a className="navLink">PROPERTY RULES</a>
                </li>
              </ul>
            </div>

            <div className="rooms-maindiv">
              <h1 className="pt-6  text-[#000] font-extrabold text-[22px]">
                About The Roa Hotel
              </h1>
              <span className="text-[#505B61] pt-1 pb-7 text-[14px]">
                Standing in the bustling city of Mumbai, The Roa Hotel is an
                affordable stay choice featuring guest-friendly amenities and
                vicinity to famous landmarks.Bask in the comfort of rooms,
                furnished with elegant decor with an expansive living area.
              </span>
              <p className="rooms-heading">Select Rooms</p>
              <div className="roomtype-head-div">
                <div className="roomtype-dropdown">3 ROOM TYPES</div>
                <div className="rooms-option-head">OPTIONS</div>
                <div className="rooms-price-head">PRICE</div>
              </div>
              <div className="suiteroom-details-maindiv">
                <div className="suite-aboutroom">
                  <h2>Deluxe Queen Room</h2>
                  <div className="roomsize-div">
                    <img
                      src={hotelroomsize}
                      alt="room"
                      className="roomsizeimg"
                    />
                    <p>roomsize sq.ft</p>
                  </div>
                  <div className="roombed-div">
                    <img src={hotelroombed} alt="bed" className="bedimg" />
                    <p>bed details</p>
                  </div>
                </div>

                <div className="suite-optionsdiv">
                  <p className="cancellation-head">
                    Room With Free Cancellation
                  </p>
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
                  <div>
                    <p>Per Night</p>
                    <p>₹ 1,800</p>
                    <p>+₹ 473 taxes & fees</p>
                  </div>
                  <div>
                    <button className="selectroom-btn">SELECT ROOM</button>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-[#000000] text-[22px] mt-7 font-bold">
                  Amenities at The Roa Hotel
                </h2>
                <h2 className="text-[#4a4a4a] text-[16px] font-semibold mt-1 ml-2">
                  Highlighted Amenities
                </h2>
                <div className="high-borderline"></div>
                <ul className="text-[#4a4a4a] ml-4">
                  <li>-Restaurant</li>
                  <li>-24-hour Room Service</li>
                  <li>-Lounge</li>
                  <li>-Bar</li>
                </ul>
              </div>
              <div>
                <h2 className="text-[#000000] text-[22px] mt-7 font-bold">
                  Property Rules
                </h2>

                <div className="high-borderline"></div>
                <ul className="text-[#4a4a4a] ">
                  <div className="flex">
                    <span className="greyDot"></span>
                    <li>
                      Guests below 18 years of age are not allowed at the
                      property.
                    </li>
                  </div>
                  <div className="flex">
                    <span className="greyDot"></span>
                    <li>Passport and Aadhar are accepted as ID proof(s)</li>
                  </div>
                  <div className="flex">
                    <span className="greyDot"></span>
                    <li>Pets are not allowed.</li>
                  </div>
                  <div className="flex">
                    <span className="greyDot"></span>
                    <li>Outside food is not allowed</li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleHotelPage;
