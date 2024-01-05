import React from "react";
import "./mytripspage.css";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import { Container } from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import mytriplistimage from "../../assets/Images/mytriplistimage.png";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
const MytripsPage = () => {
  return (
    <>
      <Stickyheader />
      <div className="mytripsbanner">
        <ul>
          <li>My Account</li>
          <li>
            <span className="forwardicon">
              <IoIosArrowForward />
            </span>
            My Trips
          </li>
        </ul>
      </div>
      <Container>
        <div className="mytripsstatus">
          <div className="mytripststusinnerul">
            <ul>
              <li>
                <div className="upcomingtripimg"></div>
                <p>UPCOMING</p>
              </li>
              <li>
                <div className="cancelledtripimg"></div>
                <p>CANCELLED</p>
              </li>
              <li>
                <div className="completedtripimg"></div>
                <p>COMPLETED</p>
              </li>
            </ul>
          </div>
          <div className="mytripselectdiv">
            <input type="text" placeholder="Search for a booking" />
            <IoSearchOutline className="mytripssearchbtn" />
          </div>
        </div>
        <div className="mytriplistcontainer">
          <img src={mytriplistimage} alt="mytrip" />
          <div>
            <h3>Looks empty, you've no upcoming bookings.</h3>
            <p>When you book a trip, you will see your itinerary here.</p>
            <Link to="/">
              <button>PLAN A TRIP</button>
            </Link>
          </div>
        </div>
        <div className="scrollupbtn">
          <MdKeyboardDoubleArrowUp className="scrollupicon" size={40} />
          Back To Top
        </div>
      </Container>
    </>
  );
};
export default MytripsPage;
