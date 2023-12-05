import React, { useState } from "react";
import "./hotelswidget.css";
import { Container } from "@mui/material";
import Searchbutton from "../Searchbutton/Searchbutton";

const HotelsWiget = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };
  
  return (
    <>
      <div className="hotelwidgetmaindiv">
        <Container>
          <div className="hw-upperdiv">
            <div>
              <ul>
                <li>
                  <input
                    type="radio"
                    value="Upto 4 Rooms"
                    checked={selectedOption === "Upto 4 Rooms"}
                    onChange={handleChange}
                  />
                  <label>Upto 4 Rooms</label>
                </li>
                <li>
                  <input
                    type="radio"
                    value="Group Deals"
                    checked={selectedOption === "Group Deals"}
                    onChange={handleChange}
                  />
                  <label>Group Deals</label>
                </li>
              </ul>
            </div>
            <p>
              Book Domestic and International Property Online. To list your
              property Click Here
            </p>
          </div>

          <div className="hw-middlediv">
            <div className="hw-cityname">
              <p>City, Property Name Or Location</p>
              <p>Dubai</p>
              <p>United Arab Emirates</p>
            </div>
            <div className="hw-addcheckin">
              <p>Check-In</p>
              <p>
                <span>19</span> Nov23
              </p>
              <p>Sunday</p>
            </div>
            <div className="hw-addcheckout">
              <p>Check-Out</p>
              <p>
                <span>12</span> Dec23
              </p>
              <p>Tuesday</p>
            </div>
            <div className="hw-roomsandguest">
              <p>Rooms & Guests</p>
              <p>
                <span>1</span> Room <span> 2</span> Adults
              </p>
            </div>
            <div className="hw-priceperight">
              <p>Price Per Night</p>
              <p>₹0-₹1500, ₹1500-₹2500,...</p>
            </div>
          </div>

          <div className="hw-bottomdiv">
            <p>Trending Searches:</p>
            <span>New York, United States</span>
            <span>Dubai, United Arab Emirates</span>
            <span>Bangkok, Thailand</span>
          </div>
          <Searchbutton />
        </Container>
      </div>
    </>
  );
};

export default HotelsWiget;
