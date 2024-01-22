import React, { useEffect } from "react";
import "./hotelsearch.css";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import hotelspagemap from "../../assets/images/hotelspagemap.png";

import { Link, useSearchParams } from "react-router-dom";
import HotelTopSection from "./HotelTopSection";
import HotelCard from "./HotelCard";
import useFetch from "../../Hooks/useFetch";

const HotelSearchPage = () => {
  const [params, setParams] = useSearchParams();
  const location = params.get("location");
  const stops = params.get("stops");
  const sort = params.get("sort");
  const departureTime = params.get("departureTime");
  const { get, data } = useFetch([]);

  // const handleCheckboxChange = (key, value) => {
  //   if (value === "") {
  //     params.delete(key);
  //     setParams(params);
  //     return;
  //   }

  //   const newSearchParams = { ...Object.fromEntries(params), [key]: value };
  //   setParams(newSearchParams);
  // };

  useEffect(() => {
    get(
      `/bookingportals/hotel?search={"location":"${location}"}${
        stops ? `&filter={"stops":"${stops}"}` : ""
      }${sort ? `&sort={"ticketPrice":${sort}}` : ""}${
        departureTime
          ? `&filter={"departureTime":{"$lte":"15:00","$gte":"06:00"}}`
          : ""
      }`
    );
  }, [params]);
  return (
    <>
      <Stickyheader />
      <div className="maindiv">
        <HotelTopSection data={data} />
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
                <p className="filtercategory-heading">Room Type</p>
                <ul>
                  <li>
                    <input type="checkbox" />
                    <p>Single</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>Suite</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>Double</p>
                  </li>
                  <li>
                    <input type="checkbox" />
                    <p>Deluxe</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mainsearchresultspage">
            <h3>Popular in Bangalore</h3>
            <HotelCard data={data} />
          </div>
        </div>
        {/* </Container> */}
      </div>
    </>
  );
};

export default HotelSearchPage;
