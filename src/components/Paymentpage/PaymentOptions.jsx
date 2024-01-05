import React, { useState } from "react";
import "./paymentoptions.css";
import gpaylogo from "../../assets/images/gpaylogo.png";
import CardWidget from "./CardWidget";
import GpayWidget from "./GpayWidget";
import GiftCardWidget from "./GiftCardWidget";
import BookNowPaylaterWidget from "./BookNowPaylaterWidget";
import EmiWidget from "./EmiWidget";
import UpiWidget from "./UpiWidget";

const PaymentOptions = () => {
  const [showUpiWidget, setShowUpiWidget] = useState(true);
  const [showCardWidget, setShowCardWidget] = useState(false);
  const [showPaylaterWidget, setShowPaylaterWidget] = useState(false);
  const [showNetBankingWidget, setShowNetBankingWidget] = useState(false);
  const [showGiftCardWidget, setShowGiftCardWidget] = useState(false);
  const [showGpayWidget, setShowGpayWidget] = useState(false);
  const [activeWidget, SetActiveWidget] = useState("upi");

  const handleShowCardWidget = () => {
    setShowCardWidget(true);
    setShowUpiWidget(false);
    setShowPaylaterWidget(false);
    setShowNetBankingWidget(false);
    setShowGiftCardWidget(false);
    setShowGpayWidget(false);
    SetActiveWidget("cards");
  };
  const handleShowUpiWidget = () => {
    setShowCardWidget(false);
    setShowUpiWidget(true);
    setShowPaylaterWidget(false);
    setShowNetBankingWidget(false);
    setShowGiftCardWidget(false);
    setShowGpayWidget(false);
    SetActiveWidget("upi");
  };
  const handleShowPaylaterWidget = () => {
    setShowCardWidget(false);
    setShowUpiWidget(false);
    setShowPaylaterWidget(true);
    setShowNetBankingWidget(false);
    setShowGiftCardWidget(false);
    setShowGpayWidget(false);
    SetActiveWidget("paylater");
  };
  const handleShowNetbanking = () => {
    setShowCardWidget(false);
    setShowUpiWidget(false);
    setShowPaylaterWidget(false);
    setShowNetBankingWidget(true);
    setShowGiftCardWidget(false);
    setShowGpayWidget(false);
    SetActiveWidget("netbanking");
  };
  const handleShowGiftCards = () => {
    setShowCardWidget(false);
    setShowUpiWidget(false);
    setShowPaylaterWidget(false);
    setShowNetBankingWidget(false);
    setShowGiftCardWidget(true);
    setShowGpayWidget(false);
    SetActiveWidget("giftcards");
  };
  const handleShowGpay = () => {
    setShowCardWidget(false);
    setShowUpiWidget(false);
    setShowPaylaterWidget(false);
    setShowNetBankingWidget(false);
    setShowGiftCardWidget(false);
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

            <li
              onClick={handleShowPaylaterWidget}
              className={activeWidget === "paylater" ? "activewidget" : ""}
            >
              <div className="paylater-img"></div>
              <div className="options-text">
                <p>Book Now Pay Later</p>
                <p>Tripmoney, Lazypay, Simpl, ZestMoney, ICICI, HDFC</p>
              </div>
            </li>

            <li
              onClick={handleShowNetbanking}
              className={activeWidget === "netbanking" ? "activewidget" : ""}
            >
              <div className="netbanking-img"></div>
              <div className="options-text">
                <p>Net Banking</p>
                <p>All Major Banks Available</p>
              </div>
            </li>

            <li
              onClick={handleShowGiftCards}
              className={activeWidget === "giftcards" ? "activewidget" : ""}
            >
              <div className="giftcards-img"></div>
              <div className="options-text">
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
          {showUpiWidget && <UpiWidget />}
          {showCardWidget && <CardWidget />}
          {showPaylaterWidget && <BookNowPaylaterWidget />}
          {showNetBankingWidget && <EmiWidget />}
          {showGiftCardWidget && <GiftCardWidget />}
          {showGpayWidget && <GpayWidget />}
        </div>
      </div>
    </>
  );
};

export default PaymentOptions;
