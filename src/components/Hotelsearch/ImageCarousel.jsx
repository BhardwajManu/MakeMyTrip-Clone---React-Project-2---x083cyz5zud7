import React, { useState } from "react";
import "./imagecarousel.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://unsplash.com/photos/Cj7a21nHLyo/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NjZ8fGhvdGVsfGVufDB8fHx8MTY5NzA4ODA4NXww",
    "https://unsplash.com/photos/UPv0s6izv2Y/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjUxfHxob3RlbHxlbnwwfHx8fDE2OTcwODExODV8MA",
    "https://unsplash.com/photos/ej52Nm_-RUA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTE5fHxob3RlbHxlbnwwfHx8fDE2OTcwOTE0OTJ8MA",
    "https://unsplash.com/photos/w1gguH6xRUc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjQwfHxob3RlbHxlbnwwfHx8fDE2OTcxMDMzMTN8MA",
  ];
  const handleNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };
  const handlePrev = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length
    );
  };
  return (
    <>
      <div className="container">
        <div className="slideshow">
          <IoIosArrowBack className="prev-button" onClick={handlePrev}>
            Previous
          </IoIosArrowBack>
          <img
            className="image"
            src={images[currentImageIndex]}
            alt="Slideshow"
          />
          <IoIosArrowForward className="next-button" onClick={handleNext}>
            Next
          </IoIosArrowForward>
        </div>
      </div>
    </>
  );
};
export default ImageCarousel;
