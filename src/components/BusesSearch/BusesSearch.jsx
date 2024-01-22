import React, { useEffect, useState } from "react";
import "./busessearch.css";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import BusTopSection from "./BusTopSection";
import BusCard from "./BusCard";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const BusesSearch = () => {
  const [params, setParams] = useSearchParams();
  const source = params.get("source");
  const destination = params.get("destination");
  const day = params.get("day");
  const stops = params.get("stops");
  const sort = params.get("sort");
  const departureTime = params.get("departureTime");
  const { get, data } = useFetch([]);
  const [sortActive, setSortActive] = useState("relevance");

  // const handleCheckboxChange = (key, value) => {
  //   // setSelectedOption(value === selectedOption ? null : value);
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
      `/bookingportals/bus?search={"source":"${source}","destination":"${destination}"}&day=${day}&limit=1000${
        stops ? `&filter={"stops":"${stops}"}` : ""
      }${sort ? `&sort={"ticketPrice":${sort}}` : ""}${
        departureTime
          ? `&filter={"departureTime":{"$lte":"15:00","$gte":"06:00"}}`
          : ""
      }`
    );
  }, [params]);

  const handleRelevanceList = () => {
    setSortActive("relevance");
  };
  const handleFastestList = () => {
    setSortActive("fastest");
  };
  const handleCheapestList = () => {
    setSortActive("cheapest");
  };
  const handleRatingList = () => {
    setSortActive("rating");
  };
  const handleArrivalList = () => {
    setSortActive("arrival");
  };
  const handleDepartureList = () => {
    setSortActive("departure");
  };

  return (
    <div className="busessearch">
      <Stickyheader />
      <BusTopSection />
      <div className="busessearch-bottomdiv">
        <div className="bs-bottom-leftdiv">
          <div className="bs-filters-heading">
            <h3>Filters</h3>
          </div>

          <div className="AC-filter-div">
            <p className="ac-filter-div-title">AC</p>
            <div className="ac-category-div">
              <div className="ac-category">
                <div className="ac-img"></div>
                <p>AC</p>
              </div>
              <div className="non-ac-catogory">
                <div className="nonac-img"></div>
                <p>Non AC</p>
              </div>
            </div>
          </div>

          <div className="departure-time-div">
            <p className="departure-time-title">Departure Time</p>
            <div className="departuretime-limit-maindiv">
              <div>
                <div className="dt-6amto11pm-img"></div>
                <p>6 AM to 11 AM</p>
              </div>
              <div>
                <div className="dt-11amto6pm-img"></div>
                <p>11 AM to 6 PM</p>
              </div>
              <div>
                <div className="dt-6pmto11pm-img"></div>
                <p>6 PM to 11 PM</p>
              </div>
              <div>
                <div className="dt-11pmto6am-img"></div>
                <p>11 PM to 6 AM</p>
              </div>
            </div>
          </div>

          <div className="arrival-time-div">
            <p className="arrival-time-title">Arrival Time</p>
            <div className="arrivaltime-limit-maindiv">
              <div>
                <div className="at-6amto11pm-img"></div>
                <p>6 AM to 11 AM</p>
              </div>
              <div>
                <div className="at-11amto6pm-img"></div>
                <p>11 AM to 6 PM</p>
              </div>
              <div>
                <div className="at-6pmto11pm-img"></div>
                <p>6 PM to 11 PM</p>
              </div>
              <div>
                <div className="at-11pmto6am-img"></div>
                <p>11 PM to 6 AM</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bs-bottom-rightdiv">
          <div className="bus-sortby-div">
            <p>sort by</p>
            <ul>
              <li
                className={sortActive == "relevance" ? "sortactive" : ""}
                onClick={handleRelevanceList}
              >
                Relevance
              </li>
              <li
                className={sortActive == "fastest" ? "sortactive" : ""}
                onClick={handleFastestList}
              >
                Fastest
              </li>
              <li
                className={sortActive == "cheapest" ? "sortactive" : ""}
                onClick={handleCheapestList}
              >
                Cheapest
              </li>
              <li
                className={sortActive == "rating" ? "sortactive" : ""}
                onClick={handleRatingList}
              >
                Rating
              </li>
              <li
                className={sortActive == "arrival" ? "sortactive" : ""}
                onClick={handleArrivalList}
              >
                Arrival
              </li>
              <li
                className={sortActive == "departure" ? "sortactive" : ""}
                onClick={handleDepartureList}
              >
                Departure
              </li>
            </ul>
          </div>
          <BusCard data={data} />
        </div>
      </div>
    </div>
  );
};

export default BusesSearch;
