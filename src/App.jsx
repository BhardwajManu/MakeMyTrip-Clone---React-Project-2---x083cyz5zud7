import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/HomePage/Main";
import { useEffect, useState } from "react";
import MainFooter from "./components/Footer/MainFooter";
import { Stickyheader } from "./components/stickeyheader/Stickyheader";

function App() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);

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
      <div className="App">
        {showStickyHeader && <Stickyheader />}
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Main />} />
          </Routes>
        </BrowserRouter>
        <MainFooter />
      </div>
    </>
  );
}

export default App;
