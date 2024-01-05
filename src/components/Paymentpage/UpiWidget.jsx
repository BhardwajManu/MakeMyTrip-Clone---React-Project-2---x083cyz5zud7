import React from "react";
import "./upiwidget.css";
import upiqrcode from "../../assets/images/upiqrcode.png";

const UpiWidget = () => {
  return (
    <>
      <div className="upiwidget-maindiv">
        <div className="phonemsg-div">
          <div className="phone-icon"></div>
          <p>Keep your phone handy!</p>
        </div>

        <div className="upiwidget-middlediv">
          <div className="upi-details-div">
            <div className="upi-qrcode-div">
              <p>Scan and pay</p>
              <div className="qrcode">
                <img src={upiqrcode} />
                <button>VIEW</button>
              </div>
              <p>Scan and pay using any banking app</p>
            </div>
            <div className="upi-or-div">
              <span>OR</span>
            </div>

            <div className="field-to-enter-upiid">
              <p className="enterupiid-msg">Enter UPI ID</p>
              <input
                type="text"
                placeholder="mobileNumber@upi"
                className="upiid-inputfield"
              />
              <button className="upi-verifyandpay-btn">VERIFY & PAY</button>
              <ul className="stepsforupipay">
                <li>Enter your registered VPA</li>
                <li>Receive payment request on bank app</li>
                <li>Authorize payment request</li>
              </ul>
            </div>
          </div>
          <ul className="upiwindow-icons ">
            <li className="upi-gpay-icon"></li>
            <li className="upi-phonepay-icon"></li>
            <li className="upi-upipay-icon"></li>
            <li className="upi-hdfcpay-icon"></li>
            <li className="upi-sbipay-icon"></li>
            <li className="upi-axispay-icon"></li>
            <li className="upi-paytm-icon"></li>
          </ul>
        </div>

        <p className="upi-payamnt">₹ 8,399</p>

        <p className="upi-termsandcondition">
          By continuing to pay, I understand and agree with the{" "}
          <span>privacy policy</span>, the <span>user agreement</span> and{" "}
          <span>terms of service</span> of makemytrip.
        </p>
      </div>
    </>
  );
};

export default UpiWidget;
