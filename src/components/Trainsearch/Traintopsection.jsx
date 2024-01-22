import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";

const cities = [
  { JunctionName: "Delhi Junction" },
  { JunctionName: "Salem Junction" },
  { JunctionName: "Hubli Junction" },
  { JunctionName: "Surat Junction" },
  { JunctionName: "Udaipur Junction" },
  { JunctionName: "Katpadi Junction" },
  { JunctionName: "Vadodara Junction" },
  { JunctionName: "Kanpur Junction" },
  { JunctionName: "Dhanbad Junction" },
  { JunctionName: "Kharagpur Junction" },
  { JunctionName: "Manmad Junction" },
  { JunctionName: "Indore Junction" },
  { JunctionName: "Vijayawada Junction" },
  { JunctionName: "Chandigarh Junction" },
  { JunctionName: "Gorakhpur Junction" },
  { JunctionName: "Gwalior Junction" },
  { JunctionName: "Ghaziabad Junction" },
  { JunctionName: "Agra Cantonment Junction" },
  { JunctionName: "Allahabad Junction" },
  { JunctionName: "Ambala Cantonment Junction" },
  { JunctionName: "Warangal Junction" },
  { JunctionName: "Bhusaval Junction" },
  { JunctionName: "Howrah Junction" },
  { JunctionName: "Thrissur Junction" },
  { JunctionName: "Yesvantpur Junction" },
  { JunctionName: "Visakhapatnam Junction" },
  { JunctionName: "Asansol Junction" },
  { JunctionName: "Nagpur Junction" },
  { JunctionName: "Ahmedabad Junction" },
  { JunctionName: "Visakhapatnam Junction" },
  { JunctionName: "Coimbatore Junction" },
];

const Traintopsection = () => {
  const [fromTrainData, setFromTrainData] = useState({
    JunctionName: "Delhi Junction",
  });
  const [toTrainData, setToTrainData] = useState({
    JunctionName: "Salem Junction",
  });
  const [dropDownData] = useState({ cities }); // No need for useFetch
  const [params] = useSearchParams();
  const date = decodeURI(params.get("date"));
  const source = params.get("source");
  const destination = params.get("destination");

  useEffect(() => {
    const fromData = cities.find(
      (train) => train.JunctionName.trim() === source.trim()
    );
    const toData = cities.find(
      (train) => train.JunctionName.trim() === destination.trim()
    );
    setFromTrainData(fromData);
    setToTrainData(toData);
  }, [dropDownData]);

  return (
    <>
      <div className="trainspage-topdiv">
        <div className="trains-searchdetails-div">
          <div className="fromcity-div">
            <p>FROM CITY</p>
            <p>{fromTrainData?.JunctionName}</p>
          </div>
          <div className="tocity-div">
            <p>TO CITY</p>
            <p>{toTrainData?.JunctionName}</p>
          </div>
          <div className="traveldate-div">
            <p>TRAVEL DATE</p>
            <p>{new Date(date).toString().split(" ").slice(0, 4).join(" ")}</p>
          </div>
          <div className="class-div">
            <p>CLASS</p>
            <p>All Classes</p>
          </div>
          <button className="trains-searchbtn">SEARCH</button>
        </div>
        <div className="sortedby-div">
          <p>Sorted By :</p>
          <p>
            <span>Availability(Default)</span>
            <IoIosArrowUp size={16} color="#008cff" />
          </p>
          <p>| Showing 48 out of 48 trains.</p>
        </div>
      </div>
    </>
  );
};

export default Traintopsection;
