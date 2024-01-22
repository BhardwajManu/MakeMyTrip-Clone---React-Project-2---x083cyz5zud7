import React, { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useSearchParams } from "react-router-dom";

const Flighttopsection = () => {
  const [fromAirportData, setFromAirportData] = useState({
    city: "Pune",
    iata_code: "PNQ",
    name: "Pune Airport",
  });
  const [toAirportData, setToAirportData] = useState({
    city: "Jaipur",
    iata_code: "JAI",
    name: "Jaipur International Airport",
  });
  const { data: dropDownData, get: getDropdownData } = useFetch([]);
  const [params] = useSearchParams();
  const date = decodeURI(params.get("date"));
  const source = params.get("source");
  const destination = params.get("destination");

  useEffect(() => {
    getDropdownData("/bookingportals/airport?limit=30");
  }, []);

  useEffect(() => {
    if (!dropDownData) return;
    const fromData = dropDownData?.data?.airports.find(
      (airport) => airport.iata_code === source
    );
    const toData = dropDownData?.data?.airports.find(
      (airport) => airport.iata_code === destination
    );
    setFromAirportData(fromData);
    setToAirportData(toData);
  }, [dropDownData]);

  return (
    <>
      <div className="flightsearch-topdiv">
        <div className="tripdetails-div">
          <div>
            <p>
              FROM <MdKeyboardArrowDown size={20} />
            </p>
            <p className="fd-selecteditem">
              {fromAirportData?.city}, {fromAirportData?.country}
            </p>
          </div>
          <div>
            <p>
              TO <MdKeyboardArrowDown size={20} />
            </p>
            <p className="fd-selecteditem">
              {toAirportData?.city}, {toAirportData?.country}
            </p>
          </div>
          <div>
            <p>
              DEPART <MdKeyboardArrowDown size={20} />
            </p>
            <p className="fd-selecteditem">
              {new Date(date).toString().split(" ").slice(0, 4).join(" ")}
            </p>
          </div>
          <div>
            <p>
              PASSENGERS & CLASS <MdKeyboardArrowDown size={20} />
            </p>
            <p className="fd-selecteditem">1 Adult,Economy</p>
          </div>
          <button className="flight-search-btn">SEARCH</button>
        </div>
      </div>
    </>
  );
};

export default Flighttopsection;
