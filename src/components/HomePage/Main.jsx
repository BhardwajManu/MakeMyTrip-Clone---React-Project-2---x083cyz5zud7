import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./main.css";
import TopNavbar from "./TopNavbar";
import { Container } from "@mui/material";
import HeaderNavbar from "./HeaderNavbar";
import HotelsWiget from "../Hotelswidget/HotelsWiget";
import FlightsWidgetMain from "../Flightswidget/FlightsWidgetMain";
import TrainsWidget from "../Trainswidget/TrainsWidget";
import FlightwidgetBottom from "../Flightswidget/FlightwidgetBottom";
import HotelWidgetBottom from "../Hotelswidget/HotelWidgetBottom";
import TrainWidgetBottom from "../Trainswidget/TrainWidgetBottom";
TrainsWidget;

const Main = () => {
  const [showFlight, setShowFlight] = useState(true);
  const [showHotel, setShowHotel] = useState(false);
  const [showTrains, setShowTrains] = useState(false);
  return (
    <>
      <div className="mainpage-top">
        <Container>
          <TopNavbar />
          <HeaderNavbar
            setShowFlight={setShowFlight}
            setShowHotel={setShowHotel}
            setShowTrains={setShowTrains}
          />
          {showFlight && <FlightsWidgetMain />}
          {showHotel && <HotelsWiget />}
          {showTrains && <TrainsWidget />}
        </Container>
      </div>
      <div className="mainpage-bottom">
        {showFlight && <FlightwidgetBottom />}
        {showHotel && <HotelWidgetBottom />}
        {showTrains && <TrainWidgetBottom />}
      </div>
    </>
  );
};

export default Main;
