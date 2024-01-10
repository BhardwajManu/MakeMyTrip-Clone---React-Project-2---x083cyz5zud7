import "./imagecarousel.css";
import Flickity from "react-flickity-component";
import hoteloneimg from "../../assets/Images/hoteloneimg.jpeg";
import hoteltwoimg from "../../assets/Images/hoteltwoimg.jpeg";
import hotelthirdimg from "../../assets/Images/hotelthirdimg.jpeg";
import hotelfourthimg from "../../assets/Images/hotelfourthimg.jpeg";
import { MdPolicy } from "react-icons/md";
import { IoIosCheckmark } from "react-icons/io";
import { IoMdPricetag } from "react-icons/io";
import "./flickity.css";
import { Link } from "react-router-dom";

const flickityOptions = {
  initialIndex: 0,
  autoPlay: false,
  cellAlign: "center",
  fade: true,
  lazyLoad: true,
};

const ImageCarousel = () => {
  return (
    <>
      <div className="topcarousel-div">
        <div className="hotel-image-div">
          <Flickity
            className={"carousel"} // default ''
            elementType={"div"} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
          >
            <img className="imageshow" src={hoteloneimg} alt="" />
            <img className="imageshow" src={hoteltwoimg} alt="" />
            <img className="imageshow" src={hotelthirdimg} alt="" />
            <img className="imageshow" src={hotelfourthimg} alt="" />
          </Flickity>
        </div>
        <div className="baseRight">
          <div className="prmRoomDtlCard"></div>
          <span className="font-bold text-lg ">Luxe Twin Room</span>
          <h2 className="text-[#9b9b9b] text-[14px] flex">
            <MdPolicy className="mt-1 mr-1" /> ExtraBedPolicy
          </h2>
          <div className="baseRight-bottom">
            <span className="flex mt-2">
              <IoIosCheckmark className=" text-green-600 text-xl" />
              Bed Provided For Child
            </span>
            <div className="flex justify-between">
              <div className="flex  text-red-600">
                <IoMdPricetag className=" text-green-600 mx-1 mt-1" />
                Extra Bed Charge
              </div>
              <div>
                <span>₹ 550</span>
              </div>
            </div>
            <h6 className="text-[12px] ml-2">Additional charges may apply</h6>
          </div>
          <Link to="/hotelcheckoutpage">
            <button className="primaryBtn">Book Now</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default ImageCarousel;
