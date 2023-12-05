// import React from "react";
import "./login.css";
import emptyroad from "../../assets/Images/emptyroad.png";
import valley from "../../assets/Images/valley.png";
import sunrise from "../../assets/Images/sunriseimg.png";
import { FcGoogle } from "react-icons/fc";
import { IoMdClose } from "react-icons/io";

const LoginComponent = ({ showLogin, setShowLogin }) => {
  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  return (
    <>
      <div className="background-blur">
        <div className="loginmaindiv">
          <div className="logintopdiv">
            <button>
              <p>PERSONAL ACCOUNT</p>
            </button>
          </div>
          <form>
            <label>Email or Mobile Number</label>
            <input placeholder="Enter email or mobile number" />
            <button>CONTINUE</button>
            <div className="formbottomdiv">
              <p>Or Login/Signup With</p>
              <FcGoogle size={18} className="googleicon" />
            </div>
          </form>
          <div className="termsandconditions">
            <p>
              By proceeding, you agree to MakeMyTrip's Privacy Policy, User
              Agreement and T&Cs
            </p>
          </div>
          <IoMdClose
            className="logincloseicon"
            size={22}
            onClick={handleCloseLogin}
          />
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
