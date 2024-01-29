import React, { useEffect, useState } from "react";
import "./hotelsearch.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { useSearchParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";

const HotelTopSection = ({ data }) => {
  const [selectedCity, setSelectedCity] = useState({
    location: "Pune",
  });
  const { data: dropDownData, get: getDropdownData } = useFetch([]);
  const [params] = useSearchParams();
  const date = decodeURI(params.get("date"));
  const location = params.get("location");

  useEffect(() => {
    getDropdownData("/bookingportals/hotel");
  }, []);
  useEffect(() => {
    if (!dropDownData || !dropDownData.data || !dropDownData.data.hotels)
      return;

    const fromData = dropDownData.data.hotels.find(
      (hotel) => hotel.location === location
    );
    setSelectedCity(fromData || { location: "Pune" });
  }, [dropDownData]);

  return (
    <>
      <div className="filldetailslist">
        <div>
          <p>
            CITY, AREA OR PROPERTY <MdKeyboardArrowDown size={20} />
          </p>

          <p className="selecteditem">{selectedCity.location}</p>
        </div>
        <div>
          <p>
            CHECK-IN <MdKeyboardArrowDown size={20} />
          </p>
          <p className="selecteditem">
            {new Date(date).toString().split(" ").slice(0, 4).join(" ")}
          </p>
        </div>
        <div>
          <p>
            CHECK-OUT <MdKeyboardArrowDown size={20} />
          </p>
          <p className="selecteditem">
            {new Date(date).toString().split(" ").slice(0, 4).join(" ")}
          </p>
        </div>
        <button>SEARCH</button>
      </div>
      <div className="searchresult-linktohome">
        <div className="para-div">
          <p className="direct-to-home">Home</p>
          <IoIosArrowForward className="para-div-arrowicon" />
          <p className="searchresultshead">
            Hotels and more in {selectedCity.location}
          </p>
        </div>
        <h3>Properties in {selectedCity.location}</h3>
      </div>
    </>
  );
};

export default HotelTopSection;
