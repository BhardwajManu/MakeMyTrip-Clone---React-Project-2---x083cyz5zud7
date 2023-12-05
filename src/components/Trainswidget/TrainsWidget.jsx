import React, { useState } from "react";
import "./trainswidget.css";
import { Container } from "@mui/material";
import Searchbutton from "../Searchbutton/Searchbutton";

const TrainsWidget = () => {
  const [selectTrainOption, setselectTrainOption] = useState("");

  const handleChange = (e) => {
    setselectTrainOption(e.target.value);
  };

  return (
    <>
      <div className="trainswidgetmaindiv">
        <Container>
          <div className="tw-upperdiv">
            <div>
              <ul>
                <li>
                  <input
                    type="radio"
                    value="Book Train Tickets"
                    checked={selectTrainOption === "Book Train Tickets"}
                    onChange={handleChange}
                  />
                  <label>Book Train Tickets</label>
                </li>
                <li>
                  <input
                    type="radio"
                    value="Check PNR Status"
                    checked={selectTrainOption === "Check PNR Status"}
                    onChange={handleChange}
                  />
                  <label>Check PNR Status</label>
                </li>
                <li>
                  <input
                    type="radio"
                    value="Live Train Status"
                    checked={selectTrainOption === "Live Train Status"}
                    onChange={handleChange}
                  />
                  <label>Live Train Status</label>
                </li>
              </ul>
            </div>
          </div>

          <div className="tw-bottomdiv">
            <div className="tw-from">
              <p>From</p>
              <p>New Delhi</p>
              <p>NDLS, New Delhi Railway Station</p>
            </div>
            <div className="tw-to">
              <p>To</p>
              <p>Kanpur</p>
              <p>CNB, Kanpur Central</p>
            </div>
            <div className="tw-traveldate">
              <p>Travel Date</p>
              <p>
                <span>25</span> Nov 23
              </p>
              <p>Saturday</p>
            </div>
            <div className="tw-class">
              <p>class</p>
              <p>ALL</p>
              <p>All class</p>
            </div>
          </div>
          <div className="tw-searchbtndiv">
            <Searchbutton />
          </div>
        </Container>
      </div>
    </>
  );
};

export default TrainsWidget;
