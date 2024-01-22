import React, { useEffect, useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import useFetch from "../../Hooks/useFetch";
import { useSearchParams } from "react-router-dom";

const BusTopSection = () => {
  const [fromBusData, setFromBusData] = useState({
    location: "Mumbai, Maharashtra",
  });
  const [toBusData, setToBustData] = useState({
    location: "Jabalpur, Madhya Pradesh",
  });
  const { data: dropDownData, get: getDropdownData } = useFetch([]);
  const [params] = useSearchParams();
  const date = decodeURI(params.get("date"));
  const source = params.get("source");
  const destination = params.get("destination");

  useEffect(() => {
    getDropdownData("/bookingportals/hotel");
  }, []);

  useEffect(() => {
    if (!dropDownData || !dropDownData.data || !dropDownData.data.hotels)
      return;

    const fromData = dropDownData.data.hotels.find(
      (bus) => bus.location === source
    );
    const toData = dropDownData.data.hotels.find(
      (bus) => bus.location === destination
    );

    setFromBusData(fromData || { location: "Delhi,Delhi" });
    setToBustData(toData || { location: "Kanpur,Uttar Pradesh" });
  }, [dropDownData]);

  return (
    <>
      <div className="busessearch-headerdiv">
        <div>
          <p>
            FROM <MdKeyboardArrowDown size={20} />
          </p>
          <p className="bussearch-selecteditem">{fromBusData.location}</p>
        </div>
        <div>
          <p>
            TO <MdKeyboardArrowDown size={20} />
          </p>
          <p className="bussearch-selecteditem">{toBusData.location}</p>
        </div>
        <div>
          <p>
            DEPART <MdKeyboardArrowDown size={20} />
          </p>
          <p className="bussearch-selecteditem">
            {new Date(date).toString().split(" ").slice(0, 4).join(" ")}
          </p>
        </div>
        <button className="bussearch-searchbtn">SEARCH</button>
      </div>
    </>
  );
};

export default BusTopSection;
