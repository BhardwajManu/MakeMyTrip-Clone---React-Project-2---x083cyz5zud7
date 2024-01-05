import React, { useState } from "react";
import "./cardwidget.css";
import Select from "react-select";

const CardWidget = () => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);

  const monthOptions = [
    { value: "1", label: "January(01)" },
    { value: "2", label: "February(02)" },
    { value: "3", label: "March(03)" },
    { value: "4", label: "April(04)" },
    { value: "5", label: "May(05)" },
    { value: "6", label: "June(06)" },
    { value: "7", label: "July(07)" },
    { value: "8", label: "August(08)" },
    { value: "9", label: "September(09)" },
    { value: "10", label: "October(10)" },
    { value: "11", label: "November(11)" },
    { value: "12", label: "December(12)" },
  ];

  const styles = {
    control: (base) => ({
      ...base,
      border: 0,
      boxShadow: "none",
    }),
    indicatorSeparator: () => null,
  };

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 20 }, (_, i) => ({
    value: (currentYear + i).toString(),
    label: (currentYear + i).toString(),
  }));

  return (
    <>
      <div className="cardwidget-container">
        <label className="labelforcardnumber">Card Number</label>
        <input type="text" placeholder="Enter Your Card Number Here" />
        <label>Name on Card</label>
        <input type="text" placeholder="Enter Your Name On Card" />
        <div className="expiry-cvv-div">
          <div className="expirydate-div">
            <label>Expiry Month & Year</label>
            <div className="month-year-dropdown">
              <Select
                className="month-dropdown"
                options={monthOptions}
                value={selectedMonth}
                onChange={setSelectedMonth}
                styles={styles}
              />
              {/* <input
                className="month-dropdown"
                type="month"
                placeholder="Month"
              /> */}
              <Select
                className="year-dropdown"
                options={yearOptions}
                value={selectedYear}
                onChange={setSelectedYear}
                styles={styles}
              />
              {/* <input className="year-dropdown" type="year" placeholder="Year" /> */}
            </div>
          </div>
          <div className="cvv-div">
            <label>Card CVV</label>
            <input type="text" placeholder="Enter Card CVV" />
          </div>
        </div>
        <button className="card-paynow-btn">PAY NOW</button>
        <p className="card-termsandconditions">
          By continuing to pay, I understand and agree with the{" "}
          <span>privacy policy</span>, the <span>user agreement</span> and{" "}
          <span>terms of service</span> of makemytrip.
        </p>
      </div>
    </>
  );
};

export default CardWidget;
