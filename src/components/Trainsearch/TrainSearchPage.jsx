import React, { useEffect } from "react";
import "./trainsearchpage.css";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import { Link, useSearchParams } from "react-router-dom";
import Traintopsection from "./Traintopsection";
import useFetch from "../../Hooks/useFetch";
import TrainCard from "./TrainCard";
// import CarouselDate from "./CarouselDate";

const TrainsSearchPage = () => {
  const [params, setParams] = useSearchParams();
  const source = params.get("source");
  const destination = params.get("destination");
  const day = params.get("day");
  const stops = params.get("stops");
  const sort = params.get("sort");
  const departureTime = params.get("departureTime");
  const { get, data } = useFetch([]);

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
      `/bookingportals/train?search={"source":"${source}","destination":"${destination}"}&day=${day}${
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
      <div className="trainspagemaindiv">
        <Traintopsection />
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

          <TrainCard data={data} />
        </div>
      </div>
    </>
  );
};

export default TrainsSearchPage;
