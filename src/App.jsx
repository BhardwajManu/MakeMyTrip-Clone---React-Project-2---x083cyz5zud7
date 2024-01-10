import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/HomePage/Main";
import { useEffect, useState } from "react";
import { Stickyheader } from "./components/stickeyheader/Stickyheader";
import MytripsPage from "./components/profilePages/MyTripspage";
import ProfileDetails from "./components/profilePages/ProfileDetails";
import HotelSearchPage from "./components/Hotelsearch/HotelSearchPage";
import TrainsSearchPage from "./components/Trainsearch/TrainSearchPage";
import FlightSearch from "./components/Flightsearch/Flightsearch";
import PaymentPageMain from "./components/Paymentpage/PaymentPageMain";
import SingleHotelPage from "./components/Hotelsearch/SingleHotelPage";
import { useAuthContext } from "./Context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Traincheckoutpage from "./components/checkoutpages/Traincheckoutpage";
import Flightcheckoutpage from "./components/checkoutpages/Flightcheckoutpage";
import Hotelcheckoutpage from "./components/checkoutpages/Hotelcheckoutpage";
// import Buscheckoutpage from "./components/checkoutpages/Buscheckoutpage";

function App() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const { authenticated, isUserLoggedIn } = useAuthContext();

  useEffect(() => {
    console.log(authenticated);
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
      <ToastContainer />
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
        <Route path="/flightcheckout" element={<Flightcheckoutpage />} />
        <Route path="/hotelcheckoutpage" element={<Hotelcheckoutpage />} />
        <Route path="/traincheckoutpage" element={<Traincheckoutpage />} />
      </Routes>
    </>
  );
}

export default App;
