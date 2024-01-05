import React from "react";
import "./gpaywidget.css";

const GpayWidget = () => {
  return (
    <>
      <div className="gpaymain-container">
        <div className="gpay-payment-div">
          <div className="gpayicondiv"></div>
          <p>Enter UPI ID</p>
          <div className="gpay-input-btn">
            <input type="text" placeholder="userName@upi" />
            <button>VERIFY & PAY</button>
          </div>
        </div>
        <p className="amounttopay">₹ 5,655</p>
        <p className="gpay-termsandconditions">
          By continuing to pay, I understand and agree with the{" "}
          <span>privacy policy</span>, the <span>user agreement</span> and{" "}
          <span>terms of service</span> of makemytrip.
        </p>
      </div>
    </>
  );
};

export default GpayWidget;
