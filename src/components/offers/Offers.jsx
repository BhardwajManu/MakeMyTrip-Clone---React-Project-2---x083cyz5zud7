import React from "react";
import "./offers.css";
import { Button, Container } from "@mui/material";
import offers1 from "../../assets/images/offers1.png";
import offers2 from "../../assets/images/offers2.png";
import offers3 from "../../assets/images/offers3.png";
import offers4 from "../../assets/images/offers4.png";
import offers5 from "../../assets/images/offers5.png";
import offers6 from "../../assets/images/offers6.png";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

const Offers = () => {
  return (
    <>
      <Container>
        <div className="offers-main">
          <div className="offers-topdiv">
            <h2 className="mr-16 text-3xl font-bold leading-3 cursor-default">
              Offers
            </h2>
            <ul className="offers-topdiv-list">
              <li>All Offers</li>
              <li>Flights</li>
              <li>Hotels</li>
              <li>Holidays</li>
              <li>Trains</li>
              <li>Cabs</li>
              <li>Bank Offers</li>
            </ul>
            <div className="ml-24 great-less flex">
              <Button className="">
                <FaLessThan className=" text-blue-500 rounded-s-full  h-6 w-8 " />
              </Button>
              <Button className="">
                <FaGreaterThan className=" text-blue-500 rounded-e-full  h-6 w-8 " />
              </Button>
            </div>
          </div>

          <div className="offers-bottomdiv">
            <div className="offers-btmdiv-griditem">
              <div className="griditem1-topdiv">
                <img src={offers1} alt="offersimg1" />
                <div>
                  <h3>For Your 1st Hotel Booking!</h3>
                  <p>Upto 20% OFF</p>
                </div>
              </div>
              <div className="griditem1-bottomdiv">
                <ul>
                  <li>T&C's Apply</li>
                </ul>
              </div>
            </div>

            {/* <div className="offers-btmdiv-griditem">
              <div className="griditem1-topdiv">
                <img src={offers3} alt="offersimg3" />
                <div>
                  <h3>For Your 1st Train Booking!</h3>
                  <p>Zero Convenience Fee</p>
                </div>
              </div>
              <div className="griditem1-bottomdiv">
                <ul>
                  <li>T&C's Apply</li>
                  
                </ul>
              </div>
            </div> */}

            {/* <div className="offers-btmdiv-griditem">
              <div className="griditem1-topdiv">
                <img src={offers5} alt="offersimg5" />
                <div>
                  <h3>For Your 1st Holiday Booking!</h3>
                  <p>Up to 30% OFF</p>
                </div>
              </div>
              <div className="griditem1-bottomdiv">
                <ul>
                  <li>T&C's Apply</li>
                 
                </ul>
              </div>
            </div> */}

            {/* <div className="offers-btmdiv-griditem">
              <div className="griditem1-topdiv">
                <img src={offers2} alt="offersimg3" />
                <div>
                  <h3>For Your 1st Bus Booking!</h3>
                  <p>Flat 10% OFF</p>
                </div>
              </div>
              <div className="griditem1-bottomdiv">
                <ul>
                  <li>T&C's Apply</li>
                  <li>code:WELCOMEMMT</li>
                  <li>VIEW DETAILS</li>
                </ul>
              </div>
            </div> */}

            {/* <div className="offers-btmdiv-griditem">
              <div className="griditem1-topdiv">
                <img src={offers4} alt="offersimg4" />
                <div>
                  <h3>For Your 1st Outstaion Cab Booking!</h3>
                  <p>Upto Rs.200 OFF</p>
                </div>
              </div>
              <div className="griditem1-bottomdiv">
                <ul>
                  <li>T&C's Apply</li>
                  <li>code:WELCOMEMMT</li>
                  <li>VIEW DETAILS</li>
                </ul>
              </div>
            </div> */}

            {/* <div className="offers-btmdiv-griditem">
              <div className="griditem1-topdiv">
                <img src={offers6} alt="offersimg6" />
                <div>
                  <h3>A Welcome Surprise For You!</h3>
                  <p>
                    Upto 30% OFF on your first flight, hotel and more booking!
                  </p>
                </div>
              </div>
              <div className="griditem1-bottomdiv">
                <ul>
                  <li>T&C's Apply</li>
                  <li>code:WELCOMEMMT</li>
                  <li>VIEW DETAILS</li>
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Offers;
