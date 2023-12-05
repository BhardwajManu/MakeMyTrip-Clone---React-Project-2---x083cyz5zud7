import React from "react";
import "./fguidance.css";
import { Container } from "@mui/material";
import vandeflight from "../../assets/images/vandeflight.png";
import language from "../../assets/images/language.png";
import webcheckin from "../../assets/images/webcheckin.png";

const Fguidance = () => {
  return (
    <>
      <Container>
        <div className="fguidance-main">
          <div className="internationalflightbook">
            <img src={vandeflight} alt="vbflight" />
            <div>
              <p>Planning to book an international flight?</p>
              <p>Check Travel Guidelines</p>
            </div>
          </div>

          <div className="available-lang">
            <img src={language} alt="lang" />
            <div>
              <p>We are now available in Hindi!</p>
              <p>Change Language</p>
            </div>
          </div>

          <div className="webcheckin">
            <img src={webcheckin} alt="webcheckin" />
            <div>
              <p>Complete your web check-in on MakeMyTrip in easy steps.</p>
              <p>Know More</p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Fguidance;
