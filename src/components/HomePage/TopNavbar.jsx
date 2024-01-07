import React, { useState } from "react";
import logowhite from "../../assets/images/logowhite.png";
import { Link, useNavigate } from "react-router-dom";
import "./topnavbar.css";
import { BsChevronDown } from "react-icons/bs";
import TabforLogin from "../Login/TabforLogin";
import { useAuthContext } from "../../Context/AuthContext";

const TopNavbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const { user, authenticated, logoutUser } = useAuthContext();

  const handleOpenLogin = () => {
    setShowLogin(true);
  };

  // const handleSignout = () => {
  //   logoutUser();
  //   navigate("/");
  // };

  return (
    <>
      <div className="topnavbarmaindiv">
        <div className="mmtwhitelogo">
          <Link to="/">
            <img className="whitelogoimage" src={logowhite} alt="logo" />
          </Link>
        </div>
        <div className="middlenavdiv">
          <div className="superoffers">
            <div className="superofferlogo">%</div>
            <div className="superofferdescription">
              <h3>super offers</h3>
              <p>Explore great deals & offers</p>
            </div>
          </div>

          <div className="mybiz">
            <div className="mybizlogo"></div>
            <div className="mybizdescription">
              <h3>Introducing myBiz</h3>
              <p>Business Travel Solution</p>
            </div>
          </div>

          <div className="mytrips">
            <div className="mytripslogo"></div>
            <div className="mytripsdescription">
              <h3>My Trips</h3>
              <p>Manage your bookings</p>
            </div>
          </div>

          <div className="rightnavdiv">
            {authenticated ? (
              <div
                className="afterloginorcreateaccnt"
                onClick={handleOpenLogin}
              >
                <div className="loginlogoafterlogin">
                  <p>T</p>
                </div>
                <div>Hi Traveller</div>
                <BsChevronDown />
              </div>
            ) : (
              <div className="loginorcreateaccnt" onClick={handleOpenLogin}>
                <BsChevronDown />
                <div className="loginlogo"></div>
                <div>Login or Create Account</div>
              </div>
            )}

            <div className="languageselector">
              <div className="flaglogo"></div>
              <div>IN|ENG|INR</div>
              <div className="languageselectordownarror">
                {/* <BsChevronDown /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {showLogin && (
        <TabforLogin showLogin={showLogin} setShowLogin={setShowLogin} />
      )}
    </>
  );
};

export default TopNavbar;
