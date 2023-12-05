import React, { useState } from "react";
import "./stickyheader.css";
import logoblue from "../../assets/images/logoblue.png";
import headerimages from "../../assets/images/headerimages.png";
import { BsChevronDown } from "react-icons/bs";
import LoginComponent from "../Login/LoginComponent";

export const Stickyheader = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleOpenLogin = () => {
    setShowLogin(true);
  };

  return (
    <div className="stickyheaderpage">
      <div className="stickyheadermaindiv">
        <div className="bluelogodiv">
          <img src={logoblue} alt="mmtbluelogo" />
        </div>
        <div className="stickynavlinks">
          <ul className="navlinkslist">
            <li>
              <div className="sh-flightsimg"></div>
              <div>Flights</div>
            </li>
            <li>
              <div className="sh-hotelimg"></div>
              <div>Hotels</div>
            </li>
            <li>
              <div className="sh-homestaysimg"></div>
              <div>Homestays & Villas</div>
            </li>
            <li>
              <div className="sh-holidayimg"></div>
              <div>Holiday Packages</div>
            </li>
            <li>
              <div className="sh-trainimg"></div>
              <div>Trains</div>
            </li>
            <li>
              <div className="sh-busesimg"></div>
              <div>Buses</div>
            </li>
            <li>
              <div className="sh-cabsimg"></div>
              <div>Cabs</div>
            </li>
            <li>
              <div className="sh-foreximg"></div>
              <div>Forex Card & Currency</div>
            </li>
            <li>
              <div className="sh-travelinsuranceimg"></div>
              <div>Travel Insurance</div>
            </li>
          </ul>
        </div>

        <div className="sh-logindropdown" onClick={handleOpenLogin}>
          <div className="sh-loginlogo">
            <div className="sh-loginlogowhite"></div>
          </div>
          <div className="login-para">Login or Create Account</div>
        </div>
        {showLogin && (
          <LoginComponent showLogin={showLogin} setShowLogin={setShowLogin} />
        )}

        <div className="sh-countryselectmaindiv">
          <div className="country">Country</div>
          <div className="sh-bottomdiv">
            <div className="sh-flag"></div>
            <span className="sh-countryindia">India</span>
            <span>
              <BsChevronDown size={10} color="#008cff" />
            </span>
          </div>
        </div>
        <div className="sh-languageselector">
          <div className="sh-language">Language</div>
          <div className="sh-language-btm">
            <span>ENG</span>
            <BsChevronDown size={10} color="#008cff" />
          </div>
        </div>
      </div>
    </div>
  );
};
