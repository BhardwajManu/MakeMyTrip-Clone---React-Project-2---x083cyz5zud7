import React, { useState } from "react";
import "./paymentoptions.css";
// import gpaylogo from "../../assets/images/Gpaylogo.png";
import CardWidget from "./CardWidget";
import GpayWidget from "./GpayWidget";
import EmiWidget from "./EmiWidget";
import UpiWidget from "./UpiWidget";

const PaymentOptions = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showUpiWidget, setShowUpiWidget] = useState(true);
  const [showCardWidget, setShowCardWidget] = useState(false);
  const [showNetBankingWidget, setShowNetBankingWidget] = useState(false);
  const [showGpayWidget, setShowGpayWidget] = useState(false);
  const [activeWidget, SetActiveWidget] = useState("upi");

  const handleShowCardWidget = () => {
    setShowCardWidget(true);
    setShowUpiWidget(false);
    setShowNetBankingWidget(false);
    setShowGpayWidget(false);
    SetActiveWidget("cards");
  };
  const handleShowUpiWidget = () => {
    setShowCardWidget(false);
    setShowUpiWidget(true);
    setShowNetBankingWidget(false);
    setShowGpayWidget(false);
    SetActiveWidget("upi");
  };

  const handleShowGpay = () => {
    setShowCardWidget(false);
    setShowUpiWidget(false);
    setShowNetBankingWidget(false);
    setShowGpayWidget(true);
    SetActiveWidget("gpay");
  };

  return (
    <>
      <div className="paymentoptions-maindiv">
        <div className="paymentoptionslist">
          <p className="paymentoption-head">Payment options</p>
          <ul>
            <li
              onClick={handleShowUpiWidget}
              className={activeWidget === "upi" ? "activewidget" : ""}
            >
              <div className="upioptions-img"></div>
              <div className="options-text">
                <p>UPI Options</p>
                <p>Pay Directly From Your Bank Account</p>
              </div>
            </li>

            <li
              onClick={handleShowCardWidget}
              className={activeWidget === "cards" ? "activewidget" : ""}
            >
              <div className="cardoptions-img"></div>
              <div className="options-text">
                <p>Credit/Debit/ATM Card</p>
                <p>Visa,MasterCard,Amex,Rupay And More</p>
              </div>
            </li>

            <li>
              <div className="paylater-img cursor-not-allowed"></div>
              <div className="options-text cursor-not-allowed">
                <p>Book Now Pay Later</p>
                <p>Tripmoney, Lazypay, Simpl, ZestMoney, ICICI, HDFC</p>
              </div>
            </li>

            <li className={activeWidget === "netbanking" ? "activewidget" : ""}>
              <div className="netbanking-img cursor-not-allowed"></div>
              <div className="options-text cursor-not-allowed">
                <p>Net Banking</p>
                <p>All Major Banks Available</p>
              </div>
            </li>

            <li>
              <div className="giftcards-img cursor-not-allowed"></div>
              <div className="options-text cursor-not-allowed">
                <p>Gift Cards, Wallets & More</p>
                <p>Gift cards, AmazonPay</p>
              </div>
            </li>

            <li
              onClick={handleShowGpay}
              className={activeWidget === "gpay" ? "activewidget" : ""}
            >
              <img className="gpay-img" src={gpaylogo} alt="gpay" />
              <div className="options-text">
                <p>GooglePay</p>
                <p>Pay with Google Pay</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="paymentoptions-paywindow">
          {showUpiWidget && (
            <UpiWidget
              setShowConfirmation={setShowConfirmation}
              showConfirmation={showConfirmation}
            />
          )}
          {showCardWidget && (
            <CardWidget
              setShowConfirmation={setShowConfirmation}
              showConfirmation={showConfirmation}
            />
          )}
          {showNetBankingWidget && (
            <EmiWidget
              setShowConfirmation={setShowConfirmation}
              showConfirmation={showConfirmation}
            />
          )}
          {showGpayWidget && (
            <GpayWidget
              setShowConfirmation={setShowConfirmation}
              showConfirmation={showConfirmation}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default PaymentOptions;
