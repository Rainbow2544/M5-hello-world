import React from "react";
import "./ListingItem.css";

const ListingItem = ({ listing }) => {
  return (
    <div key={listing.id} id={listing.id} className="listingItemContainer">
      <img className="listingItemContainer--Img" src={listing.img} alt={listing.city} />
      <p className="listingItemContainer--cityName">
        {listing.city}, {listing.country}
      </p>
      <div className="listingItemContainer--des">
        <p>{listing.des}</p>
      </div>
    </div>
  );
};

export default ListingItem;
