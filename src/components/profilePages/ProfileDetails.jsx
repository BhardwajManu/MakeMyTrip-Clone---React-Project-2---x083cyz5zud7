import React from "react";
import "./profiledetails.css";
import { Stickyheader } from "../stickeyheader/Stickyheader";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Container } from "@mui/material";

const ProfileDetails = () => {
  return (
    <div className="profiledetailspage">
      <Stickyheader />
      <div className="profilemaincontainer">
        <Container>
          <ul className="myaccmyprolist">
            <li>
              <p>My Account</p>
              <MdKeyboardArrowDown size={25} />
            </li>
            <li>
              <MdKeyboardArrowRight size={25} />
              <p>My Profile</p>
            </li>
          </ul>
          <div className="profiledetailsmaindiv">
            <div className="profileandpagenav">
              <div className="profilepic">
                <div className="propicavtar"></div>
                <div className="editoption"></div>
              </div>
              <p>PERSONAL PROFILE</p>
              <ul className="listofpages">
                <li>
                  <div className="profileicon"></div>
                  <p>Profile</p>
                </li>
                <li>
                  <div className="logindetailsicon"></div>
                  <p>Login Details</p>
                </li>
                <li>
                  <div className="savetravellersicon"></div>
                  <p>Save Travellers</p>
                </li>
                <li>
                  <div className="logouticon"></div>
                  <p>Logout</p>
                </li>
              </ul>
            </div>
            <div className="infomaindiv">
              <div className="profilecompletionstatusdiv">
                <p>
                  <span>Complete your Profile</span>
                  <span>60%</span>
                </p>
                <div className="progressbardiv">
                  <div className="progressbarfill"></div>
                </div>
                <p className="profilecompletionmsg">
                  Get the best out of MakeMyTrip by adding the remaining
                  details!
                </p>
                <ul>
                  <li>
                    <div className="emailverification"></div>
                    <p>Verified Email ID</p>
                  </li>
                  <li>
                    <div className="mobilenoverification"></div>
                    <p>Verified mobile Number</p>
                  </li>
                  <li>
                    <div className="basicinfocompleteness"></div>
                    <p>Complete Basic Info</p>
                  </li>
                </ul>
              </div>
              <div className="basicprofileinfodiv">
                <div className="basicprofileinfohead">
                  <div className="basicinfoheadleft">
                    <h3>Profile</h3>
                    <p>Basic info, for a faster booking experience</p>
                  </div>
                  <div className="basicinfoheadright">
                    <button className="basicinfoeditbtn">
                      <span></span>Edit
                    </button>
                  </div>
                </div>
                <ul className="addpersonaldetails">
                  <li>
                    <p>NAME</p>
                    <span>+ Add</span>
                  </li>
                  <li>
                    <p>BIRTHDAY</p>
                    <span>+ Add</span>
                  </li>
                  <li>
                    <p>GENDER</p>
                    <span>+ Add</span>
                  </li>
                  <li>
                    <p>MARITAL STATUS</p>
                    <span>+ Add</span>
                  </li>
                  <li>
                    <p>YOUR ADDRESS</p>
                    <span>+ Add</span>
                  </li>
                  <li>
                    <p>PINCODE</p>
                    <span>+ Add</span>
                  </li>
                  <li>
                    <p>STATE</p>
                    <span>+ Add</span>
                  </li>
                </ul>
              </div>
              <div className="logindetailsdiv">
                <div className="logindetailsheaddiv">
                  <h3>Login Details</h3>
                  <p>Manage your email address mobile number and password</p>
                </div>
                <ul className="logindetailsbottomlists">
                  <li>
                    <p>MOBILE NUMBER</p>
                    <span>+91-9876543210</span>
                  </li>
                  <li>
                    <p>EMAIL ID</p>
                    <span>abcd@gmail.com</span>
                  </li>
                  <li className="passworddetaildiv">
                    <div>
                      <p>PASSWORD</p>
                      <span>*****</span>
                    </div>
                    <p className="linktochangepwd">Change Password?</p>
                  </li>
                </ul>
              </div>
              <div className="savetravellerdiv">
                <div className="savetravellertopdiv">
                  <div>
                    <h3>Save Traveller(s)</h3>
                    <p>You have 1 Traveller(s)</p>
                  </div>
                  <button className="addtravellerbtn">
                    <span className="addtravellericon"></span>Add Traveller
                  </button>
                </div>
                <div className="savetravellerbottomdiv">
                  <div className="travelleravtardiv">
                    <span className="travelleravtar"></span>
                  </div>
                  <p>
                    <span>Abc</span>( FEMALE, 27 years )
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default ProfileDetails;
