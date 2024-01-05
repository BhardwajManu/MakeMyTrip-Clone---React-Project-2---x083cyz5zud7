import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/HomePage/Main";
import { useEffect, useState } from "react";
import MainFooter from "./components/Footer/MainFooter";
import { Stickyheader } from "./components/stickeyheader/Stickyheader";
import MytripsPage from "./components/profilePages/MyTripspage";
import ProfileDetails from "./components/profilePages/ProfileDetails";
import AuthContextProvider, { useAuthContext } from "./Context/AuthContext";
import HotelSearchPage from "./components/Hotelsearch/HotelSearchPage";
import TrainsSearchPage from "./components/Trainsearch/TrainSearchPage";
import FlightSearch from "./components/Flightsearch/Flightsearch";
import PaymentPageMain from "./components/Paymentpage/PaymentPageMain";
import SingleHotelPage from "./components/Hotelsearch/SingleHotelPage";

function App() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const { authenticated, isUserLoggedIn } = useAuthContext();

  useEffect(() => {
    if (!authenticated) isUserLoggedIn();
  }, [authenticated]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 90) {
        setShowStickyHeader(true);
      } else {
        setShowStickyHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {showStickyHeader && <Stickyheader />}
      <Routes>
        <Route path="/" exact element={<Main />} />
        <Route path="/mytrips" element={<MytripsPage />} />
        <Route path="/myprofile" element={<ProfileDetails />} />
        <Route path="/hotels" element={<HotelSearchPage />} />
        <Route path="/trains" element={<TrainsSearchPage />} />
        <Route path="/flights" element={<FlightSearch />} />
        <Route path="/payment" element={<PaymentPageMain />} />
        <Route path="/singlehotel" element={<SingleHotelPage />} />
      </Routes>
    </>
  );
}

export default App;
