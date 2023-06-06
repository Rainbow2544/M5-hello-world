import React, { useEffect, useState } from "react";
import ListingItem from "../components/ListingItem";
import data from "../data.json";
import "./Listing.css";

const Listing = () => {
  const [listingArr, setListingArr] = useState(data["listingArr"]);
  useEffect(() => {
    setListingArr(data["listingArr"]);
  },[]);
  return (
    <div className="listingContainer">
      {listingArr.map((l) => {
        return <ListingItem listing={l} />;
      })}
    </div>
  );
};

export default Listing;
