import React, { useState } from "react";
import "./gpaywidget.css";

const GpayWidget = () => {
  const [upiID, setUpiID] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [upiIDError, setUpiIDError] = useState("");

  const handleChange = (field, event) => {
    setUpiID(event.target.value);
    const upiRegex = /^[^@]+@\w+$/; // Updated regex to ensure '@'
    if (!upiRegex.test(event.target.value)) {
      setUpiIDError("Enter Invalid UPI ID format*");
    } else {
      setUpiIDError(""); // Clear the error if the format is valid
    }
    setIsValid(!upiIDError);
  };

  return (
    <>
      <div className="gpaymain-container">
        <div className="gpay-payment-div">
          <div className="gpayicondiv"></div>
          <p>Enter UPI ID</p>
          <div className="gpay-input-btn">
            <div>
              <input
                type="text"
                placeholder="userName@upi"
                className="upiid-inputfield"
                onChange={(event) => handleChange("upiID", event)}
              />
              {upiIDError && <div className="error-message">{upiIDError}</div>}
            </div>
            <button
              className={isValid ? "enabled" : "disabled"}
              disabled={!isValid}
            >
              VERIFY & PAY
            </button>
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
