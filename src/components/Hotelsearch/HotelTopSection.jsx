import React from "react";
import "./hotelsearch.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const HotelTopSection = ({ data }) => {
  return (
    <>
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

        <button>SEARCH</button>
      </div>

      <div className="searchresult-linktohome">
        <div className="para-div">
          <p className="direct-to-home">Home</p>
          <IoIosArrowForward className="para-div-arrowicon" />
          <p className="searchresultshead">
            Hotels and more in {data?.data?.location}
          </p>
        </div>
        <h3>1455 Properties in {data?.data?.location}</h3>
      </div>
    </>
  );
};

export default HotelTopSection;
